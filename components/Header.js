export function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid rgba(133,173,255,0.18)',
      }}
      className="glass"
    >
      <div className="container top-nav-shell" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 72 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '0.28rem 0.55rem',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.92)',
              border: '1px solid rgba(255,255,255,0.35)',
              boxShadow: '0 8px 18px rgba(0,0,0,0.22)',
            }}
          >
            <img
              src="https://res.cloudinary.com/difdeg5br/image/upload/v1754455337/logo_zypdux.png"
              alt="Zoqta Logo"
              style={{ width: 42, height: 42 }}
            />
            <img
              src="https://res.cloudinary.com/difdeg5br/image/upload/v1754455337/name_km1rp7.png"
              alt="Zoqta"
              style={{ height: 26 }}
            />
          </div>
        </a>
        <nav className="top-nav-links" style={{ display: 'flex', gap: 24, color: '#d9dcf1', fontSize: 14, alignItems: 'center' }}>
          <a className="top-link" href="#about">About</a>
          <a className="top-link" href="#products">Products</a>
          <a className="top-link" href="#contact">Contact</a>
          <a className="top-cta btn" href="#contact">Get Started</a>
        </nav>
      </div>
    </header>
  )
}
