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
  h2: H2,
  h3: H3,
  h4: H4,
  body1: Body1,
  subtitle1: Subtitle1,
  body2: Body2,
  subtitle2: Subtitle2,
  caption: Caption,
  overline: Overline,
  link1: Link1,
  link2: Link2,
} = createTypographyComponents()
