import { HeroRetroShooterPreview } from './HeroRetroShooterPreview'

const STATS = [
  ['50+', 'AI Tools Built'],
  ['99%', 'Uptime SLA'],
  ['24/7', 'Support'],
  ['1000+', 'Engineers'],
]

const HERO_STACK = [
  { label: 'CodeGen AI' },
  { label: 'DevOps Assistant' },
  { label: 'GitHub', iconKey: 'github', tone: 'github' },
  { label: 'AWS', iconKey: 'aws', tone: 'aws' },
  { label: 'Kubernetes', iconKey: 'kubernetes', tone: 'kubernetes' },
]

export function HeroSection() {
  return (
    <section id="top" className="section">
      <div className="container">
        <div
          className="surface-card hero-grid hero-card-backdrop"
          style={{
            padding: '2rem',
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: '1.05fr 1fr',
            background: 'rgba(22,26,33,0.92)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '0.4rem 0.9rem',
                borderRadius: 999,
                background: 'rgba(125,233,255,0.12)',
                color: '#9defff',
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#7de9ff' }} />
              AI-Powered Engineering Platform
            </div>
            <h1 className="hero-title" style={{ margin: '1rem 0 0.7rem', fontSize: 'clamp(2.1rem,4.4vw,4rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
              AI Assistant Ecosystem for Engineering Teams
            </h1>
            <p className="hero-subtext" style={{ margin: 0, color: '#d7daf0', fontSize: '1.05rem' }}>
              Refining workflows with intelligent, context-aware tools for product, platform, and infrastructure teams.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-gradient">
                Get Started
              </a>
              <a href="#products" className="btn btn-outline">
                Explore Products
              </a>
            </div>
            <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {HERO_STACK.map((tag) => (
                <span
                  key={tag.label}
                  className={`hero-stack-chip ${tag.tone ? `hero-stack-chip-${tag.tone}` : ''}`}
                  style={{
                    padding: '0.32rem 0.75rem',
                    borderRadius: 999,
                    background: 'rgba(34,38,47,0.92)',
                    color: '#ccd5f2',
                    fontSize: 12,
                  }}
                >
                  {tag.iconKey && <StackIcon iconKey={tag.iconKey} />}
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <HeroRetroShooterPreview />
        </div>

        <div className="stats-grid-responsive" style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 12 }}>
          {STATS.map(([value, label]) => (
            <div
              key={label}
              style={{
                background: 'rgba(16,19,26,0.94)',
                borderRadius: 14,
                padding: '1rem .8rem',
                textAlign: 'center',
                boxShadow: 'inset 0 0 0 1px rgba(133,173,255,0.2)',
              }}
            >
              <div style={{ color: '#7de9ff', fontWeight: 800, fontSize: 28, lineHeight: 1 }}>{value}</div>
              <div style={{ color: '#c2cbe8', fontSize: 13, marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StackIcon({ iconKey }) {
  if (iconKey === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-stack-icon" style={{ marginRight: 6 }}>
        <path
          fill="#e8ecff"
          d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.92.57.1.78-.25.78-.56v-1.95c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.08-.12-.3-.51-1.49.11-3.1 0 0 .97-.31 3.17 1.17a11.03 11.03 0 0 1 5.78 0c2.2-1.48 3.17-1.17 3.17-1.17.62 1.61.23 2.8.11 3.1.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.77 1.08.77 2.18v3.23c0 .31.2.67.79.56a11.52 11.52 0 0 0 7.85-10.92C23.5 5.66 18.35.5 12 .5Z"
        />
      </svg>
    )
  }

  if (iconKey === 'aws') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-stack-icon" style={{ marginRight: 6 }}>
        <path
          fill="#e8ecff"
          d="M5.13 15.78c2.05 1.52 4.73 2.33 7.14 2.33 3.38 0 6.53-1.25 8.87-3.33.37-.33.07-.78-.4-.5-2.52 1.47-5.63 2.36-8.85 2.36-2.14 0-4.49-.44-6.64-1.35-.32-.13-.59.21-.32.49Zm12.58-1.15c-.26-.34-1.69-.16-2.34-.09-.2.02-.24-.15-.05-.29 1.25-.88 3.31-.63 3.55-.35.23.28-.06 2.34-1.23 3.32-.18.15-.35.07-.27-.12.26-.65.6-2.12.34-2.47Z"
        />
        <path fill="#ffb347" d="M17.2 19.48c-1.38 1.02-3.37 1.56-5.08 1.56-2.4 0-4.57-.89-6.21-2.37-.13-.12-.01-.29.14-.2 1.77 1.03 3.95 1.65 6.2 1.65 1.52 0 3.18-.32 4.72-.98.23-.1.43.16.23.34Z" />
      </svg>
    )
  }

  if (iconKey === 'kubernetes') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-stack-icon" style={{ marginRight: 6 }}>
        <path fill="#7db1ff" d="M12 1.2 3.5 6.1v11.8L12 22.8l8.5-4.9V6.1L12 1.2Z" />
        <path
          fill="#e8ecff"
          d="M12 4.2a1 1 0 0 0-1 1v1.57a5.17 5.17 0 0 0-1.92.8L8 6.5a1 1 0 1 0-1.41 1.41l1.1 1.1a5.17 5.17 0 0 0-.8 1.92H5.3a1 1 0 1 0 0 2h1.57c.16.69.44 1.34.8 1.92l-1.1 1.1a1 1 0 0 0 1.41 1.41l1.1-1.1c.58.36 1.23.64 1.92.8v1.57a1 1 0 1 0 2 0v-1.57a5.17 5.17 0 0 0 1.92-.8l1.1 1.1a1 1 0 0 0 1.41-1.41l-1.1-1.1c.36-.58.64-1.23.8-1.92h1.57a1 1 0 1 0 0-2H17.1a5.17 5.17 0 0 0-.8-1.92l1.1-1.1A1 1 0 1 0 16 6.5l-1.1 1.1a5.17 5.17 0 0 0-1.92-.8V5.2a1 1 0 0 0-1-1Zm0 4a2.93 2.93 0 1 1 0 5.86 2.93 2.93 0 0 1 0-5.86Z"
        />
      </svg>
    )
  }

  return null
}
