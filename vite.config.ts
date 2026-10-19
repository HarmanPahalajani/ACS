import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

// Helper to parse .dev.vars if present locally
function parseDevVars(dir: string): Record<string, string> {
  const devVarsPath = path.resolve(dir, '.dev.vars')
  const envObj: Record<string, string> = {}
  if (fs.existsSync(devVarsPath)) {
    const lines = fs.readFileSync(devVarsPath, 'utf-8').split('\n')
    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eqIdx = trimmed.indexOf('=')
      if (eqIdx !== -1) {
        const key = trimmed.slice(0, eqIdx).trim()
        const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '')
        envObj[key] = val
      }
    }
  }
  return envObj
}

// Helper to escape HTML special characters
function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (m) => {
    switch (m) {
      case '&': return '&amp;'
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '"': return '&quot;'
      case "'": return '&#39;'
      default: return m
    }
  })
}

// In-memory rate limiter for dev middleware
const devRateLimitMap = new Map<string, { count: number; firstSeen: number }>()

export default defineConfig(() => {
  const rootDir = process.cwd()
  const devVars = parseDevVars(rootDir)

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'cloudflare-pages-api-local-middleware',
        configureServer(server) {
          server.middlewares.use('/api/inquire', async (req, res, next) => {
            if (req.method !== 'POST') {
              return next()
            }

            // In-memory rate limiter
            const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1'
            const now = Date.now()
            const entry = devRateLimitMap.get(clientIp)
            if (entry) {
              if (now - entry.firstSeen < 10 * 60 * 1000) {
                if (entry.count >= 5) {
                  res.statusCode = 429
                  res.setHeader('Content-Type', 'application/json')
                  return res.end(JSON.stringify({
                    success: false,
                    error: "Inquiry submission rate limit reached from your IP. Please call our Bhopal desk directly for immediate assistance."
                  }))
                }
                entry.count++
              } else {
                devRateLimitMap.set(clientIp, { count: 1, firstSeen: now })
              }
            } else {
              devRateLimitMap.set(clientIp, { count: 1, firstSeen: now })
            }

            let body = ''
            req.on('data', chunk => { body += chunk })
            req.on('end', async () => {
              try {
                const data = JSON.parse(body || '{}')

                // Honeypot check
                if (data.website_hp && data.website_hp.trim() !== '') {
                  res.statusCode = 400
                  res.setHeader('Content-Type', 'application/json')
                  return res.end(JSON.stringify({ success: false, error: "Spam verification failed." }))
                }

                const fullName = String(data.fullName || '').trim()
                const phoneNumber = String(data.phoneNumber || '').trim()
                const email = String(data.email || '').trim()
                const serviceRequired = String(data.serviceRequired || 'General Consultation').trim()
                const message = String(data.message || '').trim()

                // Server-side validations
                if (!fullName || fullName.length < 2) {
                  res.statusCode = 400
                  res.setHeader('Content-Type', 'application/json')
                  return res.end(JSON.stringify({ success: false, error: "Please provide your full name." }))
                }

                const cleanPhone = phoneNumber.replace(/[\s\-()]/g, '')
                const indianPhoneRegex = /^(?:(?:\+|0{0,2})91|0)?[6-9]\d{9}$/
                if (!cleanPhone || !indianPhoneRegex.test(cleanPhone)) {
                  res.statusCode = 400
                  res.setHeader('Content-Type', 'application/json')
                  return res.end(JSON.stringify({ success: false, error: "Please provide a valid 10-digit Indian mobile contact number." }))
                }

                if (email) {
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                  if (!emailRegex.test(email)) {
                    res.statusCode = 400
                    res.setHeader('Content-Type', 'application/json')
                    return res.end(JSON.stringify({ success: false, error: "Please provide a valid email address." }))
                  }
                }

                if (!message || message.length < 5) {
                  res.statusCode = 400
                  res.setHeader('Content-Type', 'application/json')
                  return res.end(JSON.stringify({ success: false, error: "Please describe your requirement or query." }))
                }

                const referenceId = `ACS-${Math.floor(10000 + Math.random() * 90000)}`
                const timestampIso = new Date().toISOString()
                const recipientEmail = (devVars.INQUIRY_RECIPIENT_EMAIL || process.env.INQUIRY_RECIPIENT_EMAIL || '').trim()
                const senderEmail = devVars.RESEND_SENDER_EMAIL || process.env.RESEND_SENDER_EMAIL || 'ACS Web Desk <onboarding@resend.dev>'
                const resendApiKey = (devVars.RESEND_API_KEY || process.env.RESEND_API_KEY || '').trim()

                // Clean HTML email template for Resend
                const safeFullName = escapeHtml(fullName)
                const safePhone = escapeHtml(cleanPhone)
                const safeEmail = escapeHtml(email || 'Not provided')
                const safeService = escapeHtml(serviceRequired)
                const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>")

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
</html>`

                // If configured with destination email & Resend key:
                if (recipientEmail && resendApiKey) {
                  const resendResp = await fetch('https://api.resend.com/emails', {
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
                  })

                  if (!resendResp.ok) {
                    res.statusCode = 502
                    res.setHeader('Content-Type', 'application/json')
                    return res.end(JSON.stringify({
                      success: false,
                      error: "Email delivery service rejected the notification. Please call our office directly at +91 91658 94496."
                    }))
                  }

                  const resendData = (await resendResp.json().catch(() => ({}))) as { id?: string }
                  res.statusCode = 200
                  res.setHeader('Content-Type', 'application/json')
                  return res.end(JSON.stringify({
                    success: true,
                    referenceId,
                    emailId: resendData.id,
                    deliveredVia: 'resend',
                    message: "Your inquiry has been transmitted directly to Awasthi Consultancy Services."
                  }))
                }

                if (devVars.ALLOW_LOCAL_SIMULATION === 'true') {
                  console.info(`\n[LOCAL DEV SIMULATION] Inquiry ${referenceId} for ${fullName} (${serviceRequired})`)
                  res.statusCode = 200
                  res.setHeader('Content-Type', 'application/json')
                  return res.end(JSON.stringify({
                    success: true,
                    referenceId,
                    deliveredVia: 'local_simulation',
                    message: "Inquiry processed in local testing mode."
                  }))
                }

                // Explicit unconfigured state per prompt instructions
                console.warn(`[LOCAL DEV SERVER] INQUIRY_RECIPIENT_EMAIL is currently blank. Inquiry ref ${referenceId} awaiting configuration.`)
                res.statusCode = 503
                res.setHeader('Content-Type', 'application/json')
                return res.end(JSON.stringify({
                  success: false,
                  isUnconfigured: true,
                  error: "Online inquiry dispatch is awaiting recipient email configuration. Please contact our Bhopal office directly at +91 91658 94496 / +91 78797 75279 / +91 62670 95053 for immediate assistance.",
                  alternativeContactNumbers: ["+91 91658 94496", "+91 78797 75279", "+91 62670 95053"]
                }))

              } catch (e: any) {
                console.error("Error in dev /api/inquire handler:", e)
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                return res.end(JSON.stringify({ success: false, error: "Internal server error." }))
              }
            })
          })
        }
      }
    ]
  }
})
