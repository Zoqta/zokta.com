import { InfoPageShell, infoTextStyle } from '../../../components/InfoPageShell'

export default function HelpCenterPage() {
  return (
    <InfoPageShell title="Help Center">
      <p style={infoTextStyle}>
        Need help? This page will host common troubleshooting steps and support FAQs.
      </p>
    </InfoPageShell>
  )
}
