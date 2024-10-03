import { SelectProps } from '@/components/ui'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { useState } from 'react'

export function App() {
  const selectOptions: SelectProps['options'] = [
    { value: 'val1', text: '100' },
    { value: 'val2', text: '10' },
    { value: 'val3', text: '20' },
  ]
  const [pageSize, setPageSize] = useState<number>(10)

  const [currentPage, setCurrentPage] = useState<number>()
  return (
    <>
      <div>Hello</div>
      <Pagination
        currentPage={currentPage || 0}
        onChangePage={(page) => {
          setCurrentPage(page)
        }}
        selectOptions={selectOptions}
        setPageSize={setPageSize}
        pageSize={pageSize}
        // setForm={()=>{}}
        totalCount={190}
      />
    </>
  )
}
