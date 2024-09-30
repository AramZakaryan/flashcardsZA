import { Slider } from './components/ui/slider/Slider'
import { useState } from 'react'

export function App() {
  const [value, setValue] = useState<number[]>([2, 10])

  return (
    <>
      <div>Hello</div>

      <div>
        <Slider min={0} max={13} step={1} value={value} onValueChange={setValue} />
      </div>
    </>
  )
}
