import { useForm } from 'react-hook-form'
import { Body2span, Button, Card, ControlledInput, Link0 } from '@/components'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { confirmPasswordSchema, emailSchema, passwordSchema } from '@/utils'
import { DevTool } from '@hookform/devtools'
import s from './signUp.module.scss'

const signUpSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .refine(({ confirmPassword, password }) => confirmPassword === password, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // ZA: this is for showing the error under confirmPassword ControlledInput
  })

type SignUpFormValues = z.infer<typeof signUpSchema>

type SignUpProps = {
  onSubmit?: (data: Omit<SignUpFormValues, 'confirmPassword'>) => void
}

export const SignUp = ({ onSubmit }: SignUpProps) => {
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmitHandler = handleSubmit(({ email, password }) => {
    // ZA: destructuring to exclude confirmPassword from arguments of onSubmit
    onSubmit?.({ email, password })
  })

  return (
    <Card as={'form'} title={'Sign Up'} onSubmit={onSubmitHandler}>
      <DevTool control={control} />
      <ControlledInput label={'Email'} name={'email'} control={control} />
      <ControlledInput
        label={'Password'}
        variant={'password'}
        name={'password'}
        control={control}
      />
      <ControlledInput
        label={'Confirm Password'}
        variant={'password'}
        name={'confirmPassword'}
        control={control}
      />
      <Button type="submit" fullWidth className={s.buttonSignUp}>
        Sign Up
      </Button>
      <Body2span>Already have an account?</Body2span>
      <Link0 href={'#'}>Sign In</Link0>
    </Card>
  )
}
