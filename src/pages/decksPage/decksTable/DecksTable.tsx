import { DecksList } from '@/services/decks/decks.types'
import {
  Column,
  Edit2Outline,
  PlayCircleOutline,
  Table,
  TBody,
  Td,
  THeadWithSort,
  THeadWithSortProps,
  Tr,
  TrashOutline,
} from '@/components'
import s from './decksTable.module.scss'
import { useDeleteDeckMutation } from '@/services/decks'
import { Link } from 'react-router-dom'

type DecksTableProps = {
  decks?: DecksList['items']
} & Omit<THeadWithSortProps, 'columns'>

export const DecksTable = ({ decks, onSort, sort }: DecksTableProps) => {
  const [deleteDeck, { isLoading: isDeckBeingDeleted, error: errorDeleteDeck }] =
    useDeleteDeckMutation()

  if (errorDeleteDeck) {
    return <div>Error: {JSON.stringify(errorDeleteDeck)}</div>
  }

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
    {
      key: null,
      title: '',
      sortable: false,
    },
  ]
  return (
    <Table className={s.table}>
      <THeadWithSort columns={columns} onSort={onSort} sort={sort} />
      <TBody>
        {decks?.map(deck => {
          const updatedAt = new Date(deck.updated).toLocaleDateString('ru-RU')
          return (
            <Tr key={deck.id}>
              <Td>
                <Link to={`/decks/${deck.id}`} className={s.link}>
                  {deck.name}
                </Link>
              </Td>
              <Td>{deck.cardsCount}</Td>
              <Td>{updatedAt}</Td>
              <Td>{deck.author.name}</Td>
              <Td className={s.actions}>
                <PlayCircleOutline width={16} />
                <Edit2Outline width={16} />
                <TrashOutline
                  width={16}
                  onClick={() => {
                    if (!isDeckBeingDeleted) {
                      deleteDeck({ id: deck?.id })
                    }
                  }}
                />
              </Td>
            </Tr>
          )
        })}
      </TBody>
    </Table>
  )
}
