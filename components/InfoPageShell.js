export function InfoPageShell({ title, children, backHref = '/', backLabel = 'Back to homepage' }) {
  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <div style={bodyStyle}>{children}</div>
        {backHref ? <a href={backHref} style={linkStyle}>{backLabel}</a> : null}
      </div>
    </main>
  )
}

export const infoTextStyle = { color: '#a9b3d5', lineHeight: 1.75, marginTop: 0 }
export const infoListStyle = { color: '#a9b3d5', lineHeight: 1.8, paddingLeft: 18 }
export const infoLinkStyle = { color: '#9defff', textDecoration: 'none' }

const pageStyle = { minHeight: '100vh', padding: '5rem 0', background: 'linear-gradient(180deg, #0b0e14, #080b11)' }
const containerStyle = { width: 'min(900px, calc(100% - 2.5rem))', margin: '0 auto', color: '#e7ebff' }
const titleStyle = { marginTop: 0, fontSize: 'clamp(2rem, 4vw, 3rem)' }
const bodyStyle = { display: 'grid', gap: 12, marginBottom: 12 }
const linkStyle = { color: '#9defff', textDecoration: 'none' }
