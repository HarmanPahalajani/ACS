export interface Env {
  RESEND_API_KEY?: string;
  INQUIRY_RECIPIENT_EMAIL?: string;
  RESEND_SENDER_EMAIL?: string;
  ALLOW_LOCAL_SIMULATION?: string;
  ASSETS?: Fetcher;
}

export const CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export function jsonResponse(data: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

// Local Isolate In-memory Rate Limiter: 5 requests per IP per 10-minute window
const rateLimitMap = new Map<string, { count: number; firstSeen: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function cleanupRateLimits() {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now - entry.firstSeen > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}

export function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (m) => {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
      default: return m;
    }
  });
}

/**
 * Inquiry API Handler for Awasthi Consultancy Services (ACS).
 * Leaves recipient email unconfigured by default per instructions.
 */
export async function handleInquireRequest(request: Request, env: Env): Promise<Response> {
  cleanupRateLimits();

  const clientIp = request.headers.get('cf-connecting-ip') || 
                   request.headers.get('x-forwarded-for') || 
                   '127.0.0.1';

  const now = Date.now();
  const currentLimit = rateLimitMap.get(clientIp);

  if (currentLimit) {
    if (now - currentLimit.firstSeen < RATE_LIMIT_WINDOW_MS) {
      if (currentLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
        return jsonResponse({
          success: false,
          error: "Inquiry submission rate limit reached from your IP. Please call our Bhopal desk directly for immediate assistance."
        }, 429);
      }
      currentLimit.count += 1;
    } else {
      rateLimitMap.set(clientIp, { count: 1, firstSeen: now });
    }
  } else {
    rateLimitMap.set(clientIp, { count: 1, firstSeen: now });
  }

  try {
    let data: Record<string, unknown>;
    try {
      data = (await request.json()) as Record<string, unknown>;
    } catch {
      return jsonResponse({
        success: false,
        error: "Malformed request payload. Expected valid JSON."
      }, 400);
    }

    // Honeypot spam check: if filled, quietly reject bot
    if (typeof data.website_hp === 'string' && data.website_hp.trim() !== '') {
      return jsonResponse({
        success: false,
        error: "Spam verification failed."
      }, 400);
    }

    const fullName = String(data.fullName || '').trim();
    const phoneNumber = String(data.phoneNumber || '').trim();
    const email = String(data.email || '').trim();
    const serviceRequired = String(data.serviceRequired || 'General Consultation').trim();
    const message = String(data.message || '').trim();

    // Server-side Validation
    if (!fullName || fullName.length < 2) {
      return jsonResponse({
        success: false,
        error: "Please provide your full name."
      }, 400);
    }

    const cleanPhone = phoneNumber.replace(/[\s\-()]/g, '');
    const indianPhoneRegex = /^(?:(?:\+|0{0,2})91|0)?[6-9]\d{9}$/;
    if (!cleanPhone || !indianPhoneRegex.test(cleanPhone)) {
      return jsonResponse({
        success: false,
        error: "Please provide a valid 10-digit Indian mobile contact number."
      }, 400);
    }

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return jsonResponse({
          success: false,
          error: "Please enter a valid email address."
        }, 400);
      }
    }

    if (!message || message.length < 5) {
      return jsonResponse({
        success: false,
        error: "Please provide details regarding your requirement."
      }, 400);
    }

    // Reference ID
    const referenceId = `ACS-${Math.floor(10000 + Math.random() * 90000)}`;
    const timestampIso = new Date().toISOString();

    const recipientEmail = env.INQUIRY_RECIPIENT_EMAIL?.trim();
    const senderEmail = env.RESEND_SENDER_EMAIL || 'ACS Web Desk <onboarding@resend.dev>';
    const resendApiKey = env.RESEND_API_KEY?.trim();

    // If recipient email is configured and resend key exists: send email
    if (recipientEmail && resendApiKey) {
      const safeFullName = escapeHtml(fullName);
      const safePhone = escapeHtml(cleanPhone);
      const safeEmail = escapeHtml(email || 'Not provided');
      const safeService = escapeHtml(serviceRequired);
      const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

      const htmlEmailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0f172a; line-height: 1.6; }
    .header { background: #E11D48; padding: 20px; color: #ffffff; border-radius: 8px 8px 0 0; }
    .badge { background: #059669; color: #ffffff; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; }
    .content { padding: 24px; border: 1px solid #e2e8f0; border-top: none; background: #ffffff; border-radius: 0 0 8px 8px; }
    table { width: 100%; border-collapse: collapse; margin-top: 16px; margin-bottom: 16px; }
    td { padding: 10px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
    .label { font-weight: 600; color: #475569; width: 35%; }
    .msg-box { background: #f8fafc; border-left: 4px solid #E11D48; padding: 14px; font-size: 14px; }
  </style>
</head>
<body>
  <div class="header">
    <span class="badge">NEW CLIENT INQUIRY</span>
    <h2 style="margin: 8px 0 0 0; font-size: 20px;">Ref: ${referenceId} — ${safeService}</h2>
  </div>
  <div class="content">
    <p>A new customer inquiry has been received via Awasthi Consultancy Services website:</p>
    <table>
      <tr><td class="label">Client Name:</td><td><strong>${safeFullName}</strong></td></tr>
      <tr><td class="label">Phone Number:</td><td><a href="tel:${safePhone}">${safePhone}</a></td></tr>
      <tr><td class="label">Email:</td><td>${safeEmail}</td></tr>
      <tr><td class="label">Service Required:</td><td><strong>${safeService}</strong></td></tr>
      <tr><td class="label">Timestamp:</td><td>${timestampIso}</td></tr>
    </table>
    <h4>Client Message / Requirement:</h4>
    <div class="msg-box">${safeMessage}</div>
  </div>
</body>
</html>`;

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [recipientEmail],
          reply_to: email || undefined,
          subject: `[New Inquiry] ${referenceId} - ${fullName} (${serviceRequired})`,
          html: htmlEmailContent,
          text: `Inquiry Ref ${referenceId}\nClient: ${fullName}\nPhone: ${cleanPhone}\nEmail: ${email}\nService: ${serviceRequired}\nMessage:\n${message}`
        })
      });

      if (!resendResponse.ok) {
        return jsonResponse({
          success: false,
          error: "Email delivery service rejected the notification. Please call our office directly at +91 91658 94496."
        }, 502);
      }

      const resendData = (await resendResponse.json().catch(() => ({}))) as { id?: string };
      return jsonResponse({
        success: true,
        referenceId,
        emailId: resendData.id,
        deliveredVia: 'resend',
        message: "Your inquiry has been transmitted directly to Awasthi Consultancy Services."
      }, 200);
    }

    if (env.ALLOW_LOCAL_SIMULATION === 'true') {
      console.info(`[LOCAL SIMULATION] Inquiry ${referenceId} received for ${fullName} (${serviceRequired})`);
      return jsonResponse({
        success: true,
        referenceId,
        deliveredVia: 'local_simulation',
        message: "Inquiry processed in local testing mode."
      }, 200);
    }

    // Unconfigured state: Prompt specifically required leaving recipient email unconfigured
    console.warn(`[INQUIRY DISPATCH PENDING] INQUIRY_RECIPIENT_EMAIL is not yet configured. Inquiry ref ${referenceId} from ${fullName} (${cleanPhone}) awaiting configuration.`);

    return jsonResponse({
      success: false,
      isUnconfigured: true,
      error: "Online inquiry dispatch is awaiting recipient email configuration. Please contact our Bhopal office directly at +91 91658 94496 / +91 86430 94468 for immediate assistance.",
      alternativeContactNumbers: ["+91 91658 94496", "+91 86430 94468"]
    }, 503);

  } catch (err: unknown) {
    console.error("Unhandled error processing inquiry:", err);
    return jsonResponse({
      success: false,
      error: "An unexpected error occurred while processing your request."
    }, 500);
  }
}
