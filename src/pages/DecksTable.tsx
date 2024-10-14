import { DecksListResponse } from '@/services/decks/decks.types'
import { Column, Table, TBody, Td, THeadWithSort, THeadWithSortProps, Tr } from '@/components'

type DecksTableProps = {
  decks?: DecksListResponse['items']
} & Omit<THeadWithSortProps, 'columns'>

export const DecksTable = ({ decks, onSort, sort }: DecksTableProps) => {
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
      key: 'author.name',
      title: 'Created By',
    },
  ]
  return (
    <Table>
      <THeadWithSort columns={columns} onSort={onSort} sort={sort} />
      <TBody>
        {decks?.map((deck) => {
          const updatedAt = new Date(deck.updated).toLocaleDateString('ru-RU')
          return (
            <Tr key={deck.id}>
              <Td>{deck.name}</Td>
              <Td>{deck.cardsCount}</Td>
              <Td>{updatedAt}</Td>
              <Td>{deck.author.name}</Td>
            </Tr>
          )
        })}
      </TBody>
    </Table>
  )
}
