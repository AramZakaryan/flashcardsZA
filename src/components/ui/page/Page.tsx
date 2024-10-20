import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { clsx } from 'clsx'
import s from './page.module.scss'

/**
 * Type definition for the `Page` component's props.
 * Extends the default properties of a `div` element.
 */
export type PageProps = ComponentPropsWithoutRef<'div'>

/**
 * The Page component wraps its children with a div element and forwards its ref
 *
 * @example
 * <Page className={"custom-class"}>
 *   <p>some children</p>
 * </Page>
 */
export const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ className, ...restProps }, forwardedRef) => {
    return <div className={clsx(s.page, className)} {...restProps} ref={forwardedRef} />
  }
)

Page.displayName = 'Page'
