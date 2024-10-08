import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    as: {
      control: { type: 'radio' },
      options: ['button', 'a'],
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    onClick: {
      action: 'Button Click',
    },
  },
  args: {
    as: 'button', // Set default value here
    fullWidth: false, // Default value for fullWidth
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryDisabled: Story = {
  args: {
    children: 'Primary Button Disables',
    disabled: true,
    variant: 'primary',
  },
}

export const PrimaryFullWidth: Story = {
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const PrimaryLinkLikeButton: Story = {
  args: {
    as: 'a',
    children: 'Primary Link that looks like a button',
    variant: 'primary',
    href: '#',
  },
}

export const PrimaryLinkLikeButtonDisabled: Story = {
  args: {
    as: 'a',
    children: 'Primary Link Disabled that looks like a button',
    disabled: true,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const SecondaryDisabled: Story = {
  args: {
    children: 'Secondary Button',
    disabled: true,
    variant: 'secondary',
  },
}

export const SecondaryFullWidth: Story = {
  args: {
    children: 'Full Width Secondary Button',
    disabled: false,
    fullWidth: true,
    variant: 'secondary',
  },
}

export const SecondaryLinkLikeButton: Story = {
  args: {
    as: 'a',
    children: 'Secondary Link that looks like a button',
    variant: 'secondary',
    href: '#',
  },
}

export const SecondaryLinkLikeButtonDisabled: Story = {
  args: {
    as: 'a',
    children: 'Secondary Link Disabled that looks like a button',
    disabled: true,
    variant: 'secondary',
  },
}

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
  },
}

export const TextDisabled: Story = {
  args: {
    ...Text.args,
    disabled: true,
  },
}

export const TextLink: Story = {
  args: {
    as: 'a',
    children: 'Text Link',
    variant: 'text',
    href: '#',
  },
}

export const TextLinkDisabled: Story = {
  args: {
    as: 'a',
    children: 'Text Link',
    variant: 'text',
    disabled: true,
  },
}
