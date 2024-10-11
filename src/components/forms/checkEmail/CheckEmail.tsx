import { Body2span, Button, Card } from '@/components'
import checkEmailSvg from '@/assets/svg/groups/checkEmail.svg'
import s from './checkEmail.module.scss'

type CheckEmailProps = {
  email: string
}

export const CheckEmail = ({ email }: CheckEmailProps) => {
  return (
    <Card as={'form'} title={'Check Email'}>
      <img src={checkEmailSvg} alt={'Check Email'} />
      <Body2span className={s.furtherInstruction}>
        We’ve sent an Email with instructions <br />
        {email}
      </Body2span>
      <Button type="button" as={'a'} href={'#'} fullWidth className={s.buttonBackToSignIn}>
        Back to Sign In
      </Button>
    </Card>
  )
}
