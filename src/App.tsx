import { Checkbox } from '@/components/ui/checkbox'

export function App() {
  return (
    <>
      <div>Hello</div>

      <div style={{ marginLeft: '20px', marginTop: '20px' }}>
        <Checkbox label={'some checkbox'} />
      </div>
      <div style={{ marginLeft: '20px', marginTop: '20px' }}>
        <Checkbox label={'some checkbox'} disabled />
      </div>
    </>
  )
}
