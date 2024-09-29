import { Input } from '@/components/ui/Input'

export function App() {
  return (
    <>
      <div>Hello</div>

      <div style={{ marginLeft: '20px', marginTop: '20px', width: '400px' }}>
        <Input label={'Input'} placeholder={'write here'} />
        <Input label={'Input'} placeholder={'write here'} disabled />
        <Input label={'Input'} error errorMessage={'Error!'} placeholder={'write here'} />
        <Input label={'Input'} error errorMessage={'Error!'} placeholder={'write here'} disabled />
        <Input variant={'search'} label={'Input'} placeholder={'write here'} />
        <Input variant={'search'} label={'Input'} placeholder={'write here'} disabled />
        <Input variant={'password'} label={'Input'} placeholder={'write here'} />
        <Input variant={'password'} label={'Input'} placeholder={'write here'} disabled />
      </div>
    </>
  )
}
