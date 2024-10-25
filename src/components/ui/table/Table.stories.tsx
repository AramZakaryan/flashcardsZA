import { action } from '@storybook/addon-actions'

import {
  Column,
  Sort,
  Table,
  TBody,
  Td,
  Th,
  THead,
  THeadWithSort,
  Tr,
} from '@/components/ui/table/Table'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

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
            <Td>Deck Name</Td>
            <Td>4</Td>
            <Td>18.03.2021</Td>
            <Td>John Johnson</Td>
          </Tr>
          <Tr>
            <Td>Deck Name</Td>
            <Td>4</Td>
            <Td>18.03.2021</Td>
            <Td>John Johnson</Td>
          </Tr>
          <Tr>
            <Td>Deck Name</Td>
            <Td>4</Td>
            <Td>18.03.2021</Td>
            <Td>John Johnson</Td>
          </Tr>
        </TBody>
      </Table>
    ),
  },
}

export const THeaderWithSort: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sort, setSort] = useState<Sort>({ direction: 'asc', key: 'name' })

    const columns: Column[] = [
      {
        key: 'name',
        title: 'Name',
      },
      {
        key: 'cardsCount',
        title: 'Cards',
      },
      {
        key: 'updated',
        title: 'Last Updated',
      },
      {
        key: 'created',
        title: 'Created By',
      },
    ]

    return (
      <Table>
        <THeadWithSort
          columns={columns}
          onSort={sort => {
            setSort(sort)
            action('on Sort')(sort)
          }}
          sort={sort}
        />
        {/*<TBody>*/}
        {/*  <Tr>*/}
        {/*    <Td>Deck aaa</Td>*/}
        {/*    <Td>10</Td>*/}
        {/*    <Td>10.03.2021</Td>*/}
        {/*    <Td>Aaa John Johnson</Td>*/}
        {/*  </Tr>*/}
        {/*  <Tr>*/}
        {/*    <Td>Deck bbb</Td>*/}
        {/*    <Td>20</Td>*/}
        {/*    <Td>20.03.2021</Td>*/}
        {/*    <Td>Bbb John Johnson</Td>*/}
        {/*  </Tr>*/}
        {/*  <Tr>*/}
        {/*    <Td>Deck ccc</Td>*/}
        {/*    <Td>30</Td>*/}
        {/*    <Td>30.03.2021</Td>*/}
        {/*    <Td>Ccc John Johnson</Td>*/}
        {/*  </Tr>*/}
        {/*</TBody>*/}
      </Table>
    )
  },
}
