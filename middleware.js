import { NextResponse } from 'next/server'
import { HOME_MARKDOWN } from './lib/homeMarkdown'

export const config = {
  matcher: ['/'],
}

export default function middleware(request) {
  try {
    const accept = request.headers.get('accept') || ''
    const path = request.nextUrl.pathname
    const markdown = typeof HOME_MARKDOWN === 'string' ? HOME_MARKDOWN : ''

    if (
      (path === '/' || path === '/index.html') &&
      accept.includes('text/markdown') &&
      markdown
    ) {
      const markdownTokens = String(markdown.split(/\s+/).length)
      return new Response(markdown, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
          Vary: 'Accept',
          'x-markdown-tokens': markdownTokens,
        },
      })
    }
  } catch {
    return NextResponse.next()
  }

  return NextResponse.next()
}
