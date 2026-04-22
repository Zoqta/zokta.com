export function Footer() {
  const productItems = [
    { label: 'CodeGen AI', href: '/products/codegen-ai' },
    { label: 'DevOps Assistant', href: '/products/devops-assistant' },
  ]
  const companyItems = [
    { label: 'About Us', href: '/company/about-us' },
    { label: 'Blog', href: '/company/blog' },
    { label: 'Contact', href: '/company/contact' },
  ]
  const supportItems = [
    { label: 'Documentation', href: '/support/documentation' },
    { label: 'Help Center', href: '/support/help-center' },
    { label: 'Status', href: '/support/status' },
  ]

  return (
    <footer style={{ background: '#060a14', borderTop: '1px solid rgba(133,173,255,0.2)', padding: '2.6rem 0 1rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '0.3rem 0.58rem',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(255,255,255,0.35)',
                boxShadow: '0 8px 18px rgba(0,0,0,0.24)',
              }}
            >
              <img
                src="https://res.cloudinary.com/difdeg5br/image/upload/v1754455337/logo_zypdux.png"
                alt="Zoqta Logo"
                style={{ width: 44, height: 44 }}
              />
              <img
                src="https://res.cloudinary.com/difdeg5br/image/upload/v1754455337/name_km1rp7.png"
                alt="Zoqta"
                style={{ height: 24 }}
              />
            </div>
            <p style={{ color: '#a9abb3' }}>
              AI-first tools for engineering teams. Focused, practical, and production-ready.
            </p>
          </div>
          <FooterCol title="Product" items={productItems} />
          <FooterCol title="Company" items={companyItems} />
          <FooterCol title="Support" items={supportItems} />
        </div>
        <div style={{ marginTop: 18, paddingTop: 12, borderTop: '1px solid rgba(133,173,255,0.2)', color: '#9eabcf' }}>
          &copy; {new Date().getFullYear()} Zoqta. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 style={{ marginBottom: 10 }}>{title}</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#a9abb3' }}>
        {items.map((item) => (
          <li key={item.label} style={{ marginBottom: 6 }}>
            <a href={item.href} style={{ color: 'inherit', textDecoration: 'none' }}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
