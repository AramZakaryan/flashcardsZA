import { useMemo } from 'react'

type UsePaginationParams = {
  currentPage: number
  pageSize: number
  totalCount: number
}

export const usePagination = ({
  currentPage,
  pageSize,
  totalCount,
}: UsePaginationParams): Array<number | '…'> => {
  return useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    if (totalPageCount <= 7) {
      return createRange(1, totalPageCount)
    }

    const leftSibling = Math.max(currentPage - 1, 1)
    const rightSibling = Math.min(currentPage + 1, totalPageCount)

    const firstPage = 1
    const lastPage = totalPageCount

    const showLeftDots = leftSibling > 3
    const showRightDots = rightSibling < lastPage - 2

    if (!showLeftDots && showRightDots) {
      const leftRange = createRange(1, 5)
      return [...leftRange, '…', totalPageCount]
    }

    if (showLeftDots && !showRightDots) {
      const rightRange = createRange(totalPageCount - 4, totalPageCount)
      return [firstPage, '…', ...rightRange]
    }

    const middleRange = createRange(leftSibling, rightSibling)
    return [firstPage, '…', ...middleRange, '…', lastPage]
  }, [totalCount, pageSize, currentPage])
}

const createRange = (start: number, end: number): Array<number | '…'> =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i)
