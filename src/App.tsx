// import { Button } from '@/components/ui/button'
// import { useState } from 'react'

// import { Card } from '@/components/ui/card'
// import { CheckboxComponent } from '@/components/ui/checkbox/checkbox'

import { Input } from '@/components/ui/Input'

export function App() {
  // const [checked, setChecked] = useState<'indeterminate' | boolean>(false)

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
      {/*<div style={{ marginLeft: '50px', marginTop: '50px' }}>*/}
      {/*  <CheckboxComponent checked={checked} setChecked={setChecked} />*/}
      {/*</div>*/}
      <div style={{ marginLeft: '10px', marginTop: '10px' }}>
        <Input error={'Some Error !'} label={'active input label'} variant={'password'} />
        <br />
        <Input error={'Some Error !'} label={'active input label'} variant={'search'} />
        <br />
        <Input error={'Some Error !'} label={'active input label'} />
      </div>
    </>
  )
}
