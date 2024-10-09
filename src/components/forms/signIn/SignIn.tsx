import { useForm } from 'react-hook-form'
import { Body2span, Button, Card, ControlledInput, Input, Link0 } from '@/components'
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

export const SignIn = () => {
  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInFormValues>({ resolver: zodResolver(signInSchema) })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Card as={'form'} title={'Sign In'} onSubmit={onSubmit} className={s.card}>
      <DevTool control={control} />
      <ControlledInput label={'Email'} name={'email'} control={control} />
      <Input
        label={'Password'}
        variant={'password'}
        {...register('password')}
        error={!!errors?.password}
        errorMessage={errors?.password?.message}
      />
      <ControlledCheckbox
        label={'Remember Me'}
        name={'rememberMe'}
        control={control}
        className={s.rememberMe}
      />
      <Button as={'a'} variant={'text'} className={s.forgotPassword}>
        Forgot Password?
      </Button>
      <Button type="submit" fullWidth>
        Sign in
      </Button>
      <Body2span>Don't have an account?</Body2span>
      <Link0>Sign Up</Link0>
    </Card>
  )
}
