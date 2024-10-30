import { Control, FieldValues, Path, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components'

export type ControlledInputProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
} & Omit<InputProps, 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledInputProps<T>) => {
  const {
    field, // ZA: field includes: onChange, name, value, ref, disabled, onBlur
    fieldState: { error }, // ZA: fieldState includes as well: isDirty, isTouched, isValidating, invalid
  } = useController({
    name,
    control,
  })

  return <Input {...restProps} {...field} error={!!error} errorMessage={error?.message} />
}
