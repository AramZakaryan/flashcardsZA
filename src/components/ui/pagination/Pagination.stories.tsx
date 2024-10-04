import type { Meta, StoryObj } from '@storybook/react'

import { useEffect, useState } from 'react'

import { Pagination } from './Pagination'

const meta = {
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const PaginationDefault: Story = {
  args: {
    currentPage: 1,
    selectOptions: [
      { value: 'value1', text: '5' },
      { value: 'value2', text: '10' },
      { value: 'value3', text: '20' },
    ],
    pageSize: 5,
    totalCount: 45,
    onChangePage: () => {},
    setPageSize: () => {},
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState<number>(args.pageSize)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState<number>(args.currentPage)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setCurrentPage(args.currentPage)
    }, [pageSize])

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    )
  },
}

export const PaginationWithData: Story = {
  args: {
    ...PaginationDefault.args,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState<number>(args.pageSize)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState<number>(args.currentPage)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setCurrentPage(args.currentPage)
    }, [pageSize])

    const items = Array.from({ length: args.totalCount }, (_, i) => `item ${i + 1}`)
    const itemsSlice = items.slice(
      (currentPage - 1) * pageSize,
      Math.min(currentPage * pageSize, args.totalCount)
    )

    return (
      <>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            listStyle: 'none',
          }}
        >
          {itemsSlice.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <Pagination
          {...args}
          currentPage={currentPage}
          onChangePage={setCurrentPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </>
    )
  },
}
