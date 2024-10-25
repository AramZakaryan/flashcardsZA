import { useForm } from 'react-hook-form'
import { Body2span, Button, Card, ControlledInput, Link0 } from '@/components'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { emailSchema } from '@/utils'
import { DevTool } from '@hookform/devtools'
import s from './forgotPass.module.scss'

const forgotPasswordSchema = z.object({
  email: emailSchema,
})

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>

type ForgotPasswordProps = {
  onSubmit?: (data: ForgotPasswordFormValues) => void
}

export const ForgotPasswordForm = ({ onSubmit }: ForgotPasswordProps) => {
  const { control, handleSubmit } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmitHandler = handleSubmit(data => {
    onSubmit?.(data)
  })

  return (
    <Card as={'form'} title={'Forgot your password?'} onSubmit={onSubmitHandler}>
      <DevTool control={control} />
      <ControlledInput label={'Email'} name={'email'} control={control} />
      <Body2span className={s.furtherInstruction}>
        Enter your email address and we will send you further instructions
      </Body2span>
      <Button type="submit" fullWidth className={s.buttonSendInstructions}>
        Send Instructions
      </Button>
      <Body2span className={s.rememberPassword}>Did you remember your password?</Body2span>
      <Link0 href={'#'}>Try logging in</Link0>
    </Card>
  )
}
