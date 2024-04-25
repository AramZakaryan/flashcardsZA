import { Button } from '@/components/ui/button'

export function App() {
  return (
    <>
      <div>Hello</div>
      <div>
        <Button as={'button'}>Some Button</Button>
      </div>
      <br />
      <div>
        <Button as={'a'}>Some Button</Button>
      </div>
    </>
  )
}
