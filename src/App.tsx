import { Input } from '@/components/ui'
import { useState } from 'react'

export function App() {
  const [value, setValue] = useState<string>('')

  console.log(value)
  return (
    <>
      <div>Hello</div>
      <Input variant={'text'} value={value} onValueChange={setValue} />
    </>
  )
}
