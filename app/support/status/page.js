import { InfoPageShell, infoListStyle, infoTextStyle } from '../../../components/InfoPageShell'

export default function StatusPage() {
  return (
    <InfoPageShell title="Status">
      <p style={infoTextStyle}>All core systems are currently operational.</p>
      <ul style={infoListStyle}>
        <li>API: Operational</li>
        <li>Website: Operational</li>
        <li>Waitlist Service: Operational</li>
      </ul>
    </InfoPageShell>
  )
}
