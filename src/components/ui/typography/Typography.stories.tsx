// const meta = {
//   component: Typography,
//   title: 'Components/Typography',
//   tags: ['autodocs'],
// } satisfies Meta<typeof Typography>
//
// export default meta
//
// type Story = StoryObj<typeof meta>
//
// import * as icons from './iconComponents'

import {
  H1,
  H2,
  H3,
  H4,
  Body1,
  Subtitle1,
  Body2,
  Subtitle2,
  Caption,
  Overline,
  Link1,
  Link2,
} from './individualComponents'

export default {
  title: 'Typography',
}

const locationText = 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'

export const Typography = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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

//
// export const small_link: Story = {
//   args: {
//     asChild: true,
//     children: (
//       <a href={'#'} target={'_blank'} rel={'noopener noreferrer'}>
//         {`go to google.com - Typography ${TypographyVariant.small_link} as a (default)`}
//       </a>
//     ),
//     variant: TypographyVariant.small_link,
//   },
// }
