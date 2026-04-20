import { HOME_MARKDOWN } from '../markdown-home-content.js'

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
  res.setHeader('Cache-Control', 'public, max-age=3600')
  res.setHeader('Vary', 'Accept')
  return res.status(200).send(HOME_MARKDOWN)
}
