import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keeps file tracing rooted to this app when a lockfile exists higher in the tree (e.g. user home).
  outputFileTracingRoot: path.join(__dirname),

  async headers() {
    const discoveryLinks =
      '</sitemap.xml>; rel="alternate"; type="application/xml"; title="Sitemap", ' +
      '</robots.txt>; rel="alternate"; type="text/plain"; title="robots", ' +
      '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json", ' +
      '</api/markdown-home>; rel="alternate"; type="text/markdown"; title="Homepage (Markdown)", ' +
      '</.well-known/agent-skills/index.json>; rel="describedby"; type="application/json"; title="Agent skills index", ' +
      '</.well-known/mcp/server-card.json>; rel="describedby"; type="application/json"; title="MCP server card"'

    return [
      {
        source: '/',
        headers: [{ key: 'Link', value: discoveryLinks }],
      },
      {
        source: '/.well-known/api-catalog',
        headers: [
          { key: 'Content-Type', value: 'application/linkset+json; charset=utf-8' },
        ],
      },
    ]
  },
}

export default nextConfig
