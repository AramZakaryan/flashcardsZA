import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui'

export function App() {
  return (
    <>
      <div>Hello</div>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a verified email to display" />
        </SelectTrigger>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <SelectContent>
          {[...Array(10)].map((_, i) => (
            <SelectItem key={i} value={`val${i}`}>
              Select-box
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}
