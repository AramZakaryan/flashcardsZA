import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from '@/components/ui/modal/Modal'

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

export const ModalDefault: Story = {}
