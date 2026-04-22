export function AboutSection() {
  const cards = [
    ['👥', 'Engineering-First', 'Built by engineers, for engineers.'],
    ['⚡', 'Lightning Fast', 'High performance experiences by default.'],
    ['🛡️', 'Enterprise Ready', 'Security and scalability from day one.'],
    ['🎯', 'Focused Solutions', 'Deep tools for concrete engineering needs.'],
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
          <div className="section-eyebrow">About Zoqta</div>
          <h2 className="section-title" style={{ margin: 0 }}>Who We Are</h2>
          <p style={{ color: '#a9abb3' }}>
            We build practical AI tools that improve engineering output without adding operational overhead.
          </p>
        </div>

        <div className="about-grid" style={{ marginTop: 28, display: 'grid', gap: 16, gridTemplateColumns: 'repeat(2,minmax(0,1fr))' }}>
          {cards.map(([icon, title, text]) => (
            <article key={title} style={{ padding: '1.2rem', borderRadius: 14, background: 'rgba(22,26,33,0.85)' }}>
              <div style={{ fontSize: 24 }}>{icon}</div>
              <h3 style={{ margin: '0.6rem 0 0.25rem' }}>{title}</h3>
              <p style={{ color: '#a9abb3', margin: 0 }}>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
