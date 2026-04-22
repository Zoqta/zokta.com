import { NextResponse } from 'next/server'
import { HOME_MARKDOWN } from './lib/homeMarkdown'

export const config = {
  matcher: ['/', '/index.html'],
}

export default function middleware(request) {
  const accept = request.headers.get('accept') || ''
  const path = request.nextUrl.pathname

  if (
    (path === '/' || path === '/index.html') &&
    accept.includes('text/markdown')
  ) {
    const markdownTokens = String(HOME_MARKDOWN.split(/\s+/).length)
    return new Response(HOME_MARKDOWN, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
        Vary: 'Accept',
        'x-markdown-tokens': markdownTokens,
      },
    })
  }

  return NextResponse.next()
}
