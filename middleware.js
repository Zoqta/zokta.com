import { HOME_MARKDOWN } from './markdown-home-content.js'

export const config = {
  matcher: ['/', '/index.html'],
}

export default function middleware(request) {
  const accept = request.headers.get('accept') || ''
  const url = new URL(request.url)
  const path = url.pathname

  if (
    (path === '/' || path === '/index.html') &&
    accept.includes('text/markdown')
  ) {
    return new Response(HOME_MARKDOWN, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
        Vary: 'Accept',
      },
    })
  }

  return fetch(request)
}
