import type { Meta, StoryObj } from '@storybook/react'
import { PersonalInformationForm } from './PersonInfo'
import johnImg from '@/assets/image/john.png'

const meta = {
  title: 'Forms/PersonalInformationForm',
  component: PersonalInformationForm,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonalInformationForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  argTypes: {
    onSubmit: {
      action: 'on Submit',
    },
    onLogOut: {
      action: 'on Sign Out',
    },
  },
  args: {
    name: 'John',
    email: 'john@example.com',
  },
}

export const WithImage: Story = {
  argTypes: { ...Primary.argTypes },
  args: {
    ...Primary.args,
    src: johnImg,
  },
}
