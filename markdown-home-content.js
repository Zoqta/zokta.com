/**
 * Shared Markdown representation of the Zoqta homepage for agents (Accept: text/markdown).
 * Keep in sync with index.html messaging when you update copy.
 */
export const HOME_MARKDOWN = `# Zoqta

**Canonical URL:** https://www.zoqta.com/

Zoqta builds practical, AI-first tools for engineering teams — faster, smarter, and at scale.

## Sections

- **About:** Mission, values, and team background (\`#about\`).
- **Products:** CodeGen AI (available), DevOps Assistant (beta) (\`#products\`).
- **Contact / Waitlist:** Join the waitlist (\`#contact\`).

## API

- **Waitlist:** \`POST /api/waitlist\` with JSON body \`{ "firstName", "lastName", "email", "company?" }\`.
- **Discovery:** \`GET /.well-known/api-catalog\` (\`application/linkset+json\`).
- **This document:** Also available at \`GET /api/markdown-home\`.

## Links

- [Sitemap](https://www.zoqta.com/sitemap.xml)
- [robots.txt](https://www.zoqta.com/robots.txt)
- [Agent skills index](https://www.zoqta.com/.well-known/agent-skills/index.json)
`;
