import { InfoPageShell, infoTextStyle } from '../../../components/InfoPageShell'

export default function ContactPage() {
  return (
    <InfoPageShell title="Contact" backHref="/#contact" backLabel="Go to contact form">
      <p style={infoTextStyle}>
        For partnerships and product discussions, reach out to the Zoqta team through
        the waitlist form on the homepage.
      </p>
    </InfoPageShell>
  )
}
