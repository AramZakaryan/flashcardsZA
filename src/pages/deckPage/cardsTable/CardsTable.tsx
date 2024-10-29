import {
  Column,
  Grade,
  Table,
  TBody,
  Td,
  THeadWithSort,
  THeadWithSortProps,
  Tr,
} from '@/components'
import s from './cardsTable.module.scss'
import { CardsList } from '@/services'

type CardsTableProps = {
  cards?: CardsList['items']
} & Omit<THeadWithSortProps, 'columns'>

export const CardsTable = ({ cards, onSort, sort }: CardsTableProps) => {
  const columns: Column[] = [
    {
      key: 'question',
      title: 'Question',
    },
    {
      key: 'answer',
      title: 'Answer',
    },
    {
      key: 'updated',
      title: 'Last Updated',
    },
    {
      key: 'grade',
      title: 'Grade',
    },
  ]
  return (
    <Table className={s.table}>
      <THeadWithSort columns={columns} onSort={onSort} sort={sort} />
      <TBody>
        {cards?.map(card => {
          const updatedAt = new Date(card.updated).toLocaleDateString('ru-RU')
          return (
            <Tr key={card.id}>
              <Td>{card.question}</Td>
              <Td>{card.answer}</Td>
              <Td>{updatedAt}</Td>
              <Td>
                <Grade grade={card.grade} />{' '}
              </Td>
            </Tr>
          )
        })}
      </TBody>
    </Table>
  )
}
