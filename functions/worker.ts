import { handleInquireRequest, CORS_HEADERS, type Env } from './api/inquire';

export default {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Corporate Inquiry API Route
    if (url.pathname === '/api/inquire') {
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: CORS_HEADERS,
        });
      }
      if (request.method === 'POST') {
        return handleInquireRequest(request, env);
      }
      return new Response(JSON.stringify({ success: false, error: "Method not allowed." }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Allow': 'POST, OPTIONS',
          ...CORS_HEADERS,
        },
      });
    }

    // Serve static assets for SPA and public files
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Foxwyn Global Assurance Worker Active', { status: 200 });
  },
};
