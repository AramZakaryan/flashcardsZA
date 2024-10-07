import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import s from './modal.module.scss'
import { clsx } from 'clsx'
import { H3 } from '@/components'

export const Modal = () => (
  <Dialog.Root open>
    <Dialog.Trigger asChild>
      <button className={clsx(s.Button, s.Violet)}>Open Modal</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={s.DialogOverlay} />
      <Dialog.Content className={s.DialogContent}>
        <div className={s.headerContainer}>
          <Dialog.Title asChild>
            <H3 className={s.DialogTitle}>Title</H3>
          </Dialog.Title>
          <Dialog.Close asChild>
            <button className={s.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Description className={s.DialogDescription}>
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <fieldset className={s.Fieldset}>
          <label className={s.Label} htmlFor="name">
            Name
          </label>
          <input className={s.Input} id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className={s.Fieldset}>
          <label className={s.Label} htmlFor="username">
            Username
          </label>
          <input className={s.Input} id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className={s.Button + ' ' + s.Green}>Save changes</button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
