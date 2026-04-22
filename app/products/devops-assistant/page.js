import { InfoPageShell, infoLinkStyle, infoTextStyle } from '../../../components/InfoPageShell'

export default function DevopsAssistantPage() {
  return (
    <InfoPageShell title="DevOps Assistant">
      <p style={infoTextStyle}>Hello Team</p>
      <p style={infoTextStyle}>
        FocusFlow is now live: <a href="http://mytracker.zoqta.com/" style={infoLinkStyle}>http://mytracker.zoqta.com/</a>
      </p>
      <p style={infoTextStyle}>You can start using it with the invite code below:</p>
      <p style={inviteStyle}>Invite Code: JOIN-WAITLIST</p>
      <p style={infoTextStyle}>
        Please take some time to explore, track your work, and share your feedback.
        It will really help in improving the experience further. Thank you.
      </p>
    </InfoPageShell>
  )
}

const inviteStyle = {
  display: 'inline-block',
  borderRadius: 999,
  padding: '0.45rem 0.85rem',
  background: 'rgba(125,233,255,0.14)',
  color: '#9defff',
  fontWeight: 700,
}
