import { InfoPageShell, infoTextStyle } from '../../../components/InfoPageShell'

export default function AboutUsPage() {
  return (
    <InfoPageShell title="About Us">
      <p style={infoTextStyle}>
        Zoqta builds practical AI-first tools for modern engineering teams.
        Our focus is to reduce delivery friction and improve developer productivity.
      </p>
    </InfoPageShell>
  )
}
