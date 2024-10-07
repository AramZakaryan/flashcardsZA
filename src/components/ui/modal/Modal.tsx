import * as Dialog from '@radix-ui/react-dialog'
import s from './modal.module.scss'
import { Button, CloseOutline, H3span } from '@/components'
import { ComponentPropsWithoutRef } from 'react'

type ModalProps = {
  // ZA: open and onOpenChange props can be used to control the opening/closing of Modal
  title?: string
  primaryButtonName?: string
  onClickPrimary?: () => void
} & ComponentPropsWithoutRef<typeof Dialog.Root>

export const Modal = ({
  children,
  title,
  primaryButtonName,
  onClickPrimary,
  ...restProps
}: ModalProps) => (
  <Dialog.Root {...restProps}>
    <Dialog.Portal>
      <Dialog.Overlay className={s.DialogOverlay} />
      <Dialog.Content className={s.DialogContent}>
        <div className={s.headerContainer}>
          <Dialog.Title asChild className={s.DialogTitle}>
            <H3span>{title}</H3span>
          </Dialog.Title>
          <Dialog.Close asChild>
            <button className={s.CloseButton} aria-label="Close">
              <CloseOutline />
            </button>
          </Dialog.Close>
        </div>
        {children}
        <div className={s.footerContainer}>
          <Dialog.Close asChild>
            <Button variant="secondary">Cancel</Button>
          </Dialog.Close>
          <Button variant="primary" onClick={onClickPrimary}>
            {primaryButtonName}
          </Button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
