import { InfoPageShell, infoTextStyle } from '../../../components/InfoPageShell'

export default function BlogPage() {
  return (
    <InfoPageShell title="Blog">
      <p style={infoTextStyle}>
        Zoqta updates, product notes, and engineering write-ups will appear here.
      </p>
      <p style={infoTextStyle}>Sample post list coming soon.</p>
    </InfoPageShell>
  )
}
