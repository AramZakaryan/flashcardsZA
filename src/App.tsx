import { Select, SelectProps } from '@/components/ui'

export function App() {
  const options: SelectProps['options'] = [
    { value: 'val1', text: '100' },
    { value: 'val2', text: '10' },
    { value: 'val3', text: '20' },
  ]
  return (
    <>
      <div>Hello</div>
      <div style={{ paddingInline: '10px', width: '210px' }}>
        <Select
          // isCompact
          disabled
          label={'label'}
          options={options}
          onValueChange={(value) => {
            console.log(value)
          }}
        />
      </div>
    </>
  )
}
