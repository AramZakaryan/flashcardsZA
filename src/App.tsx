// import { Button } from '@/components/ui/button'
import { useState } from 'react'

// import { Card } from '@/components/ui/card'
import { CheckboxComponent } from '@/components/ui/checkbox/checkbox'

export function App() {
  const [checked, setChacked] = useState<'indeterminate' | boolean>(false)

  return (
    <>
      <div>Hello</div>
      {/*<div>*/}
      {/*  <Button as={'button'}>Some Button</Button>*/}
      {/*</div>*/}
      {/*<br />*/}
      {/*<div>*/}
      {/*  <Button as={'a'}>Some Button</Button>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <Card />*/}
      {/*</div>*/}
      <div style={{ marginLeft: '50px', marginTop: '50px' }}>
        <CheckboxComponent checked={checked} setChecked={setChacked} />
      </div>
    </>
  )
}
