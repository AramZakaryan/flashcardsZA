import { useForm } from 'react-hook-form'
import { Body2span, Button, Card, ControlledInput } from '@/components'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { passwordSchema } from '@/utils'
import { DevTool } from '@hookform/devtools'
import s from './createNewPass.module.scss'

const createNewPasswordSchema = z.object({
  password: passwordSchema,
})

type CreateNewPasswordFormValues = z.infer<typeof createNewPasswordSchema>

type CreateNewPasswordProps = {
  onSubmit?: (data: CreateNewPasswordFormValues) => void
}

export const CreateNewPasswordForm = ({ onSubmit }: CreateNewPasswordProps) => {
  const { control, handleSubmit } = useForm<CreateNewPasswordFormValues>({
    resolver: zodResolver(createNewPasswordSchema),
  })

  const onSubmitHandler = handleSubmit(data => {
    onSubmit?.(data)
  })

  return (
    <Card as={'form'} title={'Create new password'} onSubmit={onSubmitHandler}>
      <DevTool control={control} />
      <ControlledInput
        label={'Password'}
        variant={'password'}
        name={'password'}
        control={control}
      />
      <Body2span className={s.furtherInstruction}>
        Create new password and we will send you <br />
        further instructions to email
      </Body2span>
      <Button type="submit" fullWidth className={s.buttonCreateNewButton}>
        Create new password
      </Button>
    </Card>
  )
}
