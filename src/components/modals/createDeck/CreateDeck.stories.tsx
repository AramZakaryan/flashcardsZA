import type { Meta, StoryObj } from '@storybook/react'
import { CreateDeck } from './CreateDeck'
import { Button } from '@/components'
import { useState } from 'react'

const meta = {
  component: CreateDeck,
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
  title: 'Modals/CreateDeck',
} satisfies Meta<typeof CreateDeck>

export default meta
type Story = StoryObj<typeof meta>

export const CreateDeckDefault: Story = {
  argTypes: { onClickPrimary: { action: 'on Click Primary' } },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState<boolean>(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Add New Deck</Button>
        <CreateDeck open={open} onOpenChange={setOpen} onClickPrimary={args.onClickPrimary} />
      </>
    )
  },
}
