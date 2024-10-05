import { Table, TBody, Td, Th, THead, Tr } from '@/components/ui/table/table'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Table,
  parameters: {},
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const TableDefault: Story = {
  args: {
    children: (
      <Table>
        <THead>
          <Tr>
            <Th>Name</Th>
            <Th>Cards</Th>
            <Th>Last Updated</Th>
            <Th>Created by</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Pack Name</Td>
            <Td>4</Td>
            <Td>18.03.2021</Td>
            <Td>Ivan Ivanov</Td>
          </Tr>
          <Tr>
            <Td>Pack Name</Td>
            <Td>4</Td>
            <Td>18.03.2021</Td>
            <Td>Ivan Ivanov</Td>
          </Tr>
          <Tr>
            <Td>Pack Name</Td>
            <Td>4</Td>
            <Td>18.03.2021</Td>
            <Td>Ivan Ivanov</Td>
          </Tr>
        </TBody>
      </Table>
    ),
  },
}
