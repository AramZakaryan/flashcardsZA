import { useForm } from 'react-hook-form'
import { Body2span, Button, Card, ControlledInput, Link0 } from '@/components'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import s from './signIn.module.scss'
import { emailSchema, passwordSchema, rememberMeSchema } from '@/utils'
import { ControlledCheckbox } from '@/components/ui/checkbox/ControlledCheckbox'
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

export const SignIn = ({ onSubmit }: SignInProps) => {
  const { control, handleSubmit } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmitHandler = handleSubmit((data) => {
    onSubmit(data)
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
      <Button as={'a'} variant={'text'} href={'#'} className={s.forgotPassword}>
        Forgot Password?
      </Button>
      <Button type="submit" fullWidth>
        Sign in
      </Button>
      <Body2span>Don&#39;t have an account?</Body2span>
      <Link0 href={'#'}>Sign Up</Link0>
    </Card>
  )
}
