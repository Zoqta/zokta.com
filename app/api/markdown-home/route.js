import { HOME_MARKDOWN } from '../../../lib/homeMarkdown'

export function GET() {
  return new Response(HOME_MARKDOWN, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      Vary: 'Accept',
      'x-markdown-tokens': String(HOME_MARKDOWN.split(/\s+/).length),
    },
  })
}
