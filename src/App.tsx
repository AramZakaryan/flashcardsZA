import {
  Body1,
  Body2,
  Caption,
  H1,
  H2,
  H3,
  H4,
  Link1,
  Link2,
  Overline,
  Subtitle1,
  Subtitle2,
} from '@/components/ui/typography'

export function App() {
  const locationText = 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'

  return (
    <>
      <div>Hello</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <H1>{`H1: ${locationText}`}</H1>
        <H2>{`H2: ${locationText}`}</H2>
        <H3>{`H3: ${locationText}`}</H3>
        <H4>{`H4: ${locationText}`}</H4>
        <Body1>{`Body1: ${locationText}`}</Body1>
        <Subtitle1>{`Subtitle1: ${locationText}`}</Subtitle1>
        <Body2>{`Body2: ${locationText}`}</Body2>
        <Subtitle2>{`Subtitle2: ${locationText}`}</Subtitle2>
        <Caption>{`Caption: ${locationText}`}</Caption>
        <Overline>{`Overline: ${locationText}`}</Overline>
        <Link1>{`Link1: ${locationText}`}</Link1>
        <Link2>{`Link2: ${locationText}`}</Link2>
      </div>
    </>
  )
}
