import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function App() {
  return (
    <>
      <div>Hello</div>
      <Card title="Card Title">
        <div style={{ width: '100%', height: '100px', background: 'yellow' }}></div>
        <Button variant={'primary'}>some button</Button>
      </Card>
      <div></div>
    </>
  )
}
