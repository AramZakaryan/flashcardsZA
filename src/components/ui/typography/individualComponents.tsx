import { Typography, TypographyProps, TypographyVariants } from './Typography'
import { ElementType, ReactNode } from 'react'

type KeysOfTypographyVariants = keyof typeof TypographyVariants

const createIndividualComponents = () => {
  const IndividualComponents = {} as {
    [K in KeysOfTypographyVariants]: (
      props: Omit<TypographyProps<(typeof TypographyVariants)[K]>, 'as' | 'variant'>
    ) => ReactNode
  }

  ;(Object.keys(TypographyVariants) as Array<KeysOfTypographyVariants>).forEach((variant) => {
    const tagForDel: ElementType = TypographyVariants[variant]

    IndividualComponents[variant] = (
      restProps: Omit<TypographyProps<typeof tagForDel>, 'as' | 'variant'>
    ) => {
      return <Typography as={tagForDel} variant={variant} {...restProps} />
    }
  })

  return IndividualComponents
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
} = createIndividualComponents()
