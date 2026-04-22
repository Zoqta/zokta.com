export function ProductSection() {
  const integrations = [
    { title: 'GitHub', subtitle: 'Version control automation', tone: 'github', iconKey: 'github' },
    { title: 'AWS', subtitle: 'Infrastructure intelligence', tone: 'aws', iconKey: 'aws' },
    { title: 'Kubernetes', subtitle: 'Container orchestration', tone: 'kubernetes', iconKey: 'kubernetes' },
  ]

  return (
    <section id="products" className="section section-mesh-bg">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
          <div className="section-eyebrow">Product Stack</div>
          <h2 className="section-title" style={{ margin: 0 }}>Powerful AI Solutions</h2>
          <p style={{ color: '#a9abb3' }}>
            Practical products for coding workflows and DevOps automation.
          </p>
        </div>

        <div className="product-grid" style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 16 }}>
          <article
            className="product-panel"
            style={{
              padding: '1.5rem',
              borderRadius: 16,
              background: 'linear-gradient(160deg,#171c28,#131824)',
              boxShadow: 'inset 0 0 0 1px rgba(133,173,255,0.18)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <h3 style={{ margin: 0 }}>CodeGen AI</h3>
              <span style={{ fontSize: 12, color: '#7de9ff' }}>AI-Generated Refactoring</span>
            </div>
            <p style={{ color: '#a9abb3', marginTop: 0 }}>
              LLM optimization, secure synthesis, and automated test generation.
            </p>
            <div
              style={{
                marginTop: 12,
                borderRadius: 10,
                background: '#0f1420',
                padding: '.7rem',
                boxShadow: 'inset 0 0 0 1px rgba(125,233,255,0.12)',
              }}
            >
              <pre style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: '#b9cbf6', whiteSpace: 'pre-wrap' }}>
{`const optimize = analyze(diff);
if (optimize.risk < 0.2) {
  applyPatch(optimize.safeTransform);
}
emitTests(optimize.coverageTargets);`}
              </pre>
            </div>
            <div style={{ marginTop: 12, height: 6, borderRadius: 99, background: '#21293a', overflow: 'hidden' }}>
              <div className="animate-bar" style={{ width: '84%', height: '100%', background: 'linear-gradient(90deg,#7de9ff,#85adff)' }} />
            </div>
            <small style={{ color: '#96a4c8', display: 'block', marginTop: 6 }}>Optimization complete: 84%</small>
          </article>

          <article
            className="product-panel"
            style={{
              padding: '1.5rem',
              borderRadius: 16,
              background: 'linear-gradient(160deg,#171c28,#131824)',
              boxShadow: 'inset 0 0 0 1px rgba(193,128,255,0.2)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <h3 style={{ margin: 0 }}>DevOps Assistant</h3>
              <span style={{ fontSize: 12, color: '#c9a7ff' }}>Real-time Infrastructure Monitoring</span>
            </div>
            <p style={{ color: '#a9abb3', marginTop: 0 }}>
              CI/CD orchestration, observability, and faster incident response.
            </p>
            <div style={{ display: 'grid', gap: 6, marginTop: 10 }}>
              {[46, 52, 49, 57, 61, 58, 66].map((v, i) => (
                <div key={i} style={{ height: 8, borderRadius: 6, background: '#232a3b', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${v}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg,#85adff,#c180ff)',
                      transition: 'width .4s ease',
                    }}
                  />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
              {['AWS Cluster Healthy', 'Kubernetes Pods Scaling', 'Git Commit Synced'].map((item) => (
                <span key={item} style={{ fontSize: 12, color: '#c6d0ef', background: 'rgba(193,128,255,0.14)', borderRadius: 999, padding: '0.25rem .55rem' }}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div
          style={{
            marginTop: 16,
            display: 'grid',
            gap: 12,
            gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
          }}
          className="integration-grid"
        >
          {integrations.map(({ title, subtitle, tone, iconKey }) => (
            <article
              key={title}
              className={`integration-card integration-card-${tone}`}
              style={{
                borderRadius: 14,
                padding: '1rem',
                background: 'rgba(22,26,33,0.86)',
                boxShadow: 'inset 0 0 0 1px rgba(133,173,255,0.16)',
              }}
            >
              <h4 className="product-integration-title" style={{ margin: 0 }}>
                <IntegrationIcon iconKey={iconKey} />
                {title}
              </h4>
              <p style={{ margin: '.4rem 0 0', color: '#9aa9ce', fontSize: 13 }}>{subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function IntegrationIcon({ iconKey }) {
  if (iconKey === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="product-integration-icon">
        <path
          fill="currentColor"
          d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.92.57.1.78-.25.78-.56v-1.95c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.08-.12-.3-.51-1.49.11-3.1 0 0 .97-.31 3.17 1.17a11.03 11.03 0 0 1 5.78 0c2.2-1.48 3.17-1.17 3.17-1.17.62 1.61.23 2.8.11 3.1.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.77 1.08.77 2.18v3.23c0 .31.2.67.79.56a11.52 11.52 0 0 0 7.85-10.92C23.5 5.66 18.35.5 12 .5Z"
        />
      </svg>
    )
  }

  if (iconKey === 'aws') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="product-integration-icon">
        <path
          fill="currentColor"
          d="M5.13 15.78c2.05 1.52 4.73 2.33 7.14 2.33 3.38 0 6.53-1.25 8.87-3.33.37-.33.07-.78-.4-.5-2.52 1.47-5.63 2.36-8.85 2.36-2.14 0-4.49-.44-6.64-1.35-.32-.13-.59.21-.32.49Zm12.58-1.15c-.26-.34-1.69-.16-2.34-.09-.2.02-.24-.15-.05-.29 1.25-.88 3.31-.63 3.55-.35.23.28-.06 2.34-1.23 3.32-.18.15-.35.07-.27-.12.26-.65.6-2.12.34-2.47Z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="product-integration-icon">
      <path fill="currentColor" d="M12 1.2 3.5 6.1v11.8L12 22.8l8.5-4.9V6.1L12 1.2Z" />
      <path
        fill="currentColor"
        d="M12 4.2a1 1 0 0 0-1 1v1.57a5.17 5.17 0 0 0-1.92.8L8 6.5a1 1 0 1 0-1.41 1.41l1.1 1.1a5.17 5.17 0 0 0-.8 1.92H5.3a1 1 0 1 0 0 2h1.57c.16.69.44 1.34.8 1.92l-1.1 1.1a1 1 0 0 0 1.41 1.41l1.1-1.1c.58.36 1.23.64 1.92.8v1.57a1 1 0 1 0 2 0v-1.57a5.17 5.17 0 0 0 1.92-.8l1.1 1.1a1 1 0 0 0 1.41-1.41l-1.1-1.1c.36-.58.64-1.23.8-1.92h1.57a1 1 0 1 0 0-2H17.1a5.17 5.17 0 0 0-.8-1.92l1.1-1.1A1 1 0 1 0 16 6.5l-1.1 1.1a5.17 5.17 0 0 0-1.92-.8V5.2a1 1 0 0 0-1-1Zm0 4a2.93 2.93 0 1 1 0 5.86 2.93 2.93 0 0 1 0-5.86Z"
      />
    </svg>
  )
}
