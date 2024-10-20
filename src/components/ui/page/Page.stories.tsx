import type { Meta, StoryObj } from '@storybook/react'

import { Page } from './'
import { SignIn } from '@/components'

const meta = {
  component: Page,
  tags: ['autodocs'],
  title: 'Components/Page',
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const PageDefault: Story = {
  args: {
    children: <>some element on page</>,
  },
}

export const PageWithSignIn: Story = {
  args: {
    children: <SignIn />,
  },
}
