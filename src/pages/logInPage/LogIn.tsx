import { Page, LogInForm } from '@/components'
import { LogInArgs, useLogInMutation } from '@/services/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const LogInPage = () => {
  const [signin, { isLoading }] = useLogInMutation()
  const navigate = useNavigate()

  if (isLoading) return <h4> ... loading ...</h4>

  const submitHandler = async (data: LogInArgs) => {
    try {
      await signin(data).unwrap()
      navigate('/')
    } catch (error: any) {
      // console.log('error', error)
      toast.error(error?.data?.message ?? 'Sign in failed')
    }
  }

  return (
    <Page>
      <LogInForm onSubmit={submitHandler} />
    </Page>
  )
}
