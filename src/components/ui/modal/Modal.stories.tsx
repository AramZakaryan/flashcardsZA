import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from '@/components/ui/modal/Modal'
import { useState } from 'react'
import { Body1span, Button, Checkbox, ImageOutline, Input, Subtitle2span } from '@/components'
import s from './modal.module.scss'
import maskImage from '@/assets/image/mask.png'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
        {
          name: 'black',
          value: 'black',
        },
      ],
    },
  },
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const ModalDefault: Story = {
  args: {
    title: 'Title',
    primaryButtonName: 'Primary Button',
  },
  argTypes: {
    onClickPrimary: { action: 'onClickPrimary' },
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState<boolean>(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} open={open} onOpenChange={setOpen} />
      </>
    )
  },
}

export const ModalAddNewDeck: Story = {
  args: {
    title: 'Add New Deck',
    primaryButtonName: 'Add New Deck',
  },
  argTypes: {
    onClickPrimary: { action: 'onClick Add New Deck' },
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState<boolean>(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Add New Deck</Button>
        <Modal {...args} open={open} onOpenChange={setOpen}>
          <fieldset className={s.Fieldset}>
            <Input
              label={'Deck Name'}
              className={s.Input}
              id={'name'}
              placeholder={'Write here Deck Name'}
            />
            <Button variant={'secondary'} fullWidth onClick={() => {}}>
              <ImageOutline width={16} />
              Upload Image
            </Button>
            <Checkbox label={'Private Deck'} />
          </fieldset>
        </Modal>
      </>
    )
  },
}

export const ModalAddNewCard: Story = {
  args: {
    title: 'Add New Page',
    primaryButtonName: 'Add New Page',
  },
  argTypes: {
    onClickPrimary: { action: 'onClick Add New Page' },
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState<boolean>(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Add New Card</Button>
        <Modal {...args} open={open} onOpenChange={setOpen}>
          <fieldset className={s.Fieldset}>
            <Subtitle2span>Question</Subtitle2span>
            <Input label={'Question?'} className={s.Input} id="name" defaultValue="Pedro Duarte" />
            <img src={maskImage} className={s.maskImage} alt={'mask image'} />
            <Button variant="secondary" fullWidth onClick={() => {}}>
              <ImageOutline width={16} />
              Change Image
            </Button>
          </fieldset>
          <fieldset className={s.Fieldset}>
            <Subtitle2span>Answer</Subtitle2span>
            <Input label={'Question?'} className={s.Input} id="name" defaultValue="Pedro Duarte" />
            <img src={maskImage} className={s.maskImage} alt={'mask image'} />
            <Button variant="secondary" fullWidth onClick={() => {}}>
              <ImageOutline width={16} />
              Change Image
            </Button>
          </fieldset>
        </Modal>
      </>
    )
  },
}

export const ModalDeleteCard: Story = {
  args: {
    title: 'Delete Page',
    primaryButtonName: 'Delete Page',
  },
  argTypes: {
    onClickPrimary: { action: 'onClick Delete Page' },
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState<boolean>(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Delete Card</Button>
        <Modal {...args} open={open} onOpenChange={setOpen}>
          <div className={s.deleteCardContainer}>
            <Body1span>
              Do you really want to remove Card Name? All cards will be deleted.
            </Body1span>
          </div>
        </Modal>
      </>
    )
  },
}
