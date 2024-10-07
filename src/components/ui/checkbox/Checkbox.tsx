import { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import s from './checkbox.module.scss'
import { Body2span } from '../typography'
import clsx from 'clsx'
import { useFinalId } from '@/hooks/useFinalId'
import { CheckIcon } from '@radix-ui/react-icons'
import * as Label from '@radix-ui/react-label'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: ReactNode
  onValueChange?: (checked: boolean) => void
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = ({
  checked,
  className,
  disabled = false,
  id,
  label,
  onValueChange,
  ...restProps
}: CheckboxProps) => {
  const finalId = useFinalId(id)
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <CheckboxRadix.Root
        checked={checked}
        className={clsx(className, s.CheckboxRoot)}
        id={finalId}
        disabled={disabled}
        onCheckedChange={onValueChange}
        {...restProps}
      >
        <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
          <CheckIcon className={s.CheckIcon} />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <Label.Root className={clsx(className, s.Label, disabled && s.disabled)} htmlFor={finalId}>
        <Body2span>{label}</Body2span>
      </Label.Root>
    </div>
  )
}

// import * as Checkbox from '@radix-ui/react-checkbox'
// import { CheckIcon } from '@radix-ui/react-icons'
//
// import s from './checkbox.module.scss'
//
// type Props = {
//   checked?: 'indeterminate' | boolean
//   disabled?: boolean
//   setChecked: (s: Checkbox.CheckedState) => void
// }
//
// export const CheckboxComponent = ({ checked = false, disabled = false, setChecked }: Props) => {
//   return (
//     <form>
//       <div style={{ alignItems: 'center', display: 'flex' }}>
//         <Checkbox.Root
//           checked={checked}
//           className={`${s.CheckboxRoot} ${checked && s.CheckboxRootChecked} ${
//             disabled && s.CheckboxRootDisabled
//           }`}
//           disabled={disabled}
//           id={'c1'}
//           onCheckedChange={setChecked}
//         >
//           <Checkbox.Indicator
//             className={`${s.CheckboxIndicator}
//             ${disabled && s.CheckboxIndicatorDisabled}`}
//           >
//             <CheckIcon />
//           </Checkbox.Indicator>
//         </Checkbox.Root>
//         <label className={`${s.Label} ${disabled && s.LabelDisabled}`} htmlFor={'c1'}>
//           Some Text
//         </label>
//       </div>
//     </form>
//   )
// }
