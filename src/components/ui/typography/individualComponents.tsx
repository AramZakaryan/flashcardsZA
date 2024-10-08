// Generate individual components based on TypographyVariants keys

import {
  Typography,
  TypographyProps,
  TypographyVariants,
} from '@/components/ui/typography/Typography'

const createTypographyComponents = () => {
  const components: Record<string, typeof Typography> = {}

  Object.keys(TypographyVariants).forEach((variant) => {
    const tag = TypographyVariants[variant as keyof typeof TypographyVariants]
    components[variant] = (props: TypographyProps<typeof tag>) => (
      <Typography as={tag} variant={variant as keyof typeof TypographyVariants} {...props} />
    )
  })

  return components
}

export const {
  h1: H1,
  h1span: H1span,
  h2: H2,
  h2span: H2span,
  h3: H3,
  h3span: H3span,
  h4: H4,
  h4span: H4span,
  body1: Body1,
  body1span: Body1span,
  subtitle1: Subtitle1,
  subtitle1span: Subtitle1span,
  body2: Body2,
  body2span: Body2span,
  subtitle2: Subtitle2,
  subtitle2span: Subtitle2span,
  caption: Caption,
  overline: Overline,
  link0: Link0,
  link1: Link1,
  link2: Link2,
} = createTypographyComponents()
