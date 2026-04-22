import { NextResponse } from 'next/server'

export const config = {
  matcher: ['/'],
}

export default function middleware(request) {
  const accept = request.headers.get('accept') || ''
  if (accept.includes('text/markdown')) {
    const markdownUrl = new URL('/api/markdown-home', request.url)
    return NextResponse.rewrite(markdownUrl)
  }

  return NextResponse.next()
}
