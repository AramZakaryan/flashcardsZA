import { Button } from '@/components/ui/button'
import { LogOut } from '@/components/ui/icons'

export function App() {
  // const [checked, setChecked] = useState<'indeterminate' | boolean>(false)

  return (
    <>
      <div>Hello</div>
      <div>
        <Button variant={'secondary'}>Secondary</Button>
      </div>
      <br />
      <div>
        <Button variant={'secondary'}>
          <LogOut width={16} />
          Button Primary
        </Button>
      </div>
      <br />
      <div>
        <Button variant={'secondary'} disabled>
          Button Primary
        </Button>
      </div>
      <br />
      <div>
        <Button
          variant={'secondary'}
          as={'a'}
          href="#"
          target="_blank"
          // rel="noopener noreferrer"
          // title={'new blank page will be opened'}
        >
          Button Primary as link
        </Button>
      </div>
      <br />
      <div>
        <Button as={'a'} variant={'secondary'} href="#" disabled target="_blank">
          Button Primary as link
        </Button>
      </div>
      {/*<div>*/}
      {/*  <Card />*/}
      {/*</div>*/}
      {/*<div style={{ marginLeft: '50px', marginTop: '50px' }}>*/}
      {/*  <CheckboxComponent checked={checked} setChecked={setChecked} />*/}
      {/*</div>*/}
      {/*<div style={{ marginLeft: '10px', marginTop: '10px' }}>*/}
      {/*  <Input errorMessage={'Some Error !'} label={'active input label'} variant={'password'} />*/}
      {/*  <br />*/}
      {/*  <Input errorMessage={'Some Error !'} label={'active input label'} variant={'search'} />*/}
      {/*  <br />*/}
      {/*  <Input errorMessage={'Some Error !'} label={'active input label'} />*/}
      {/*</div>*/}
      <br />
      <div>
        <Button>Button Primary</Button>
      </div>
      <br />
      <div>
        <Button as={'button'}>
          <LogOut width={16} />
          Button Primary
        </Button>
      </div>
      <br />
      <div>
        <Button as={'button'} disabled>
          Button Primary
        </Button>
      </div>
      <br />
      <div>
        <Button
          as={'a'}
          href="#"
          target="_blank"
          // rel="noopener noreferrer"
          // title={'new blank page will be opened'}
        >
          Button Primary as link
        </Button>
      </div>
      <br />
      <div>
        <Button as={'a'} href="#" disabled target="_blank">
          Button Primary as link
        </Button>
      </div>
    </>
  )
}
