import { useForm } from 'react-hook-form'
import { Body2span, Button, Card, ControlledInput, Link0 } from '@/components'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import s from './logIn.module.scss'
import { emailSchema, passwordSchema, rememberMeSchema } from '@/utils'
import { ControlledCheckbox } from '@/components/controlled/ControlledCheckbox'
import { DevTool } from '@hookform/devtools'

const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: rememberMeSchema,
})

type SignInFormValues = z.infer<typeof signInSchema>

type SignInProps = {
  onSubmit?: (data: SignInFormValues) => void
}

export const LogInForm = ({ onSubmit }: SignInProps) => {
  const { control, handleSubmit } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmitHandler = handleSubmit(data => {
    onSubmit?.(data)
  })

  return (
    <Card as={'form'} title={'Sign In'} onSubmit={onSubmitHandler}>
      <DevTool control={control} />
      <ControlledInput label={'Email'} name={'email'} control={control} />
      <ControlledInput
        label={'Password'}
        variant={'password'}
        name={'password'}
        control={control}
      />
      <ControlledCheckbox
        label={'Remember Me'}
        name={'rememberMe'}
        control={control}
        className={s.rememberMe}
      />
      <Button as={'a'} variant={'text'} href={'/forgotpass'} className={s.forgotPassword}>
        Forgot Password?
      </Button>
      <Button type={'submit'} fullWidth className={s.buttonSignIn}>
        Sign in
      </Button>
      <Body2span>{"Don't have an account?"}</Body2span>
      <Link0 href={'/signup'}>Sign Up</Link0>
    </Card>
  )
}
