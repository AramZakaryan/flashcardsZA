import {
  Body1,
  Body1span,
  Body2,
  Body2span,
  Caption,
  H1,
  H1span,
  H2,
  H2span,
  H3,
  H3span,
  H4,
  H4span,
  Link1,
  Link2,
  Overline,
  Subtitle1,
  Subtitle1span,
  Subtitle2,
  Subtitle2span,
} from './individualComponents'

export default {
  title: 'Typography',
}

const locationText = 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'

export const Typography = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <H1>{`H1: ${locationText}`}</H1>
    <H1span>{`H1span: ${locationText}`}</H1span>
    <H2>{`H2: ${locationText}`}</H2>
    <H2span>{`H2span: ${locationText}`}</H2span>
    <H3>{`H3: ${locationText}`}</H3>
    <H3span>{`H3span: ${locationText}`}</H3span>
    <H4>{`H4: ${locationText}`}</H4>
    <H4span>{`H4span: ${locationText}`}</H4span>
    <Body1>{`Body1: ${locationText}`}</Body1>
    <Body1span>{`Body1span: ${locationText}`}</Body1span>
    <Subtitle1>{`Subtitle1: ${locationText}`}</Subtitle1>
    <Subtitle1span>{`Subtitle1span: ${locationText}`}</Subtitle1span>
    <Body2>{`Body2: ${locationText}`}</Body2>
    <Body2span>{`Body2span: ${locationText}`}</Body2span>
    <Subtitle2>{`Subtitle2: ${locationText}`}</Subtitle2>
    <Subtitle2span>{`Subtitle2span: ${locationText}`}</Subtitle2span>
    <Caption>{`Caption: ${locationText}`}</Caption>
    <Overline>{`Overline: ${locationText}`}</Overline>
    <Link1
      href={'#'}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >{`Link1: ${locationText}`}</Link1>
    <Link2
      href={'#'}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >{`Link2: ${locationText}`}</Link2>
  </div>
)
