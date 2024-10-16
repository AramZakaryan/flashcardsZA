import { useParams } from 'react-router-dom'

export const DeckPage = () => {
  const { deckId } = useParams()
  return <div>DeckPage deckId is: {deckId}</div>
}
