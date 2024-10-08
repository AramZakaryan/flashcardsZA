import { useForm } from 'react-hook-form'
import { Button, Input } from '@/components'
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
    <form onSubmit={onSubmit} className={s.form}>
      <DevTool control={control} />
      <Input
        label={'Email'}
        {...register('email')}
        error={!!errors?.email}
        errorMessage={errors?.email?.message}
      />
      <Input
        label={'Password'}
        variant={'password'}
        {...register('password')}
        error={!!errors?.password}
        errorMessage={errors?.password?.message}
      />
      <ControlledCheckbox label={'Remember Me'} name={'rememberMe'} control={control} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
