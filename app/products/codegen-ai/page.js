import { InfoPageShell, infoTextStyle } from '../../../components/InfoPageShell'

export default function CodegenAiPage() {
  return (
    <InfoPageShell title="CodeGen AI">
      <p style={infoTextStyle}>
        CodeGen AI helps teams ship safer code faster with intelligent refactoring suggestions,
        patch generation, and test scaffolding.
      </p>
      <p style={infoTextStyle}>
        It is designed for practical engineering workflows where speed, readability, and confidence
        all matter.
      </p>
    </InfoPageShell>
  )
}
