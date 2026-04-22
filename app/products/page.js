import { InfoPageShell, infoLinkStyle, infoListStyle, infoTextStyle } from '../../components/InfoPageShell'

export default function ProductsPage() {
  return (
    <InfoPageShell title="Product">
      <p style={infoTextStyle}>Explore Zoqta product experiences built for engineering teams.</p>
      <ul style={infoListStyle}>
        <li><a href="/products/codegen-ai" style={infoLinkStyle}>CodeGen AI</a></li>
        <li><a href="/products/devops-assistant" style={infoLinkStyle}>DevOps Assistant</a></li>
      </ul>
    </InfoPageShell>
  )
}
