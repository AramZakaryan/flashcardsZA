import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui'

export function App() {
  return (
    <>
      <div>Hello</div>
      <div style={{ paddingInline: '10px' }}>
        <Select label={'label'} defaultValue={'val1'}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={`val1`}>Select-box-1</SelectItem>
            <SelectItem value={`val2`}>Select-box-2</SelectItem>
            <SelectItem value={`val3`}>Select-box-3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  )
}
