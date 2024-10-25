import { useForm } from 'react-hook-form'
import {
  Avatar,
  Body2span,
  Button,
  Card,
  ControlledInput,
  Edit2Outline,
  H2span,
  LogOutOutline,
} from '@/components'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { nicknameSchema } from '@/utils'
import { DevTool } from '@hookform/devtools'
import s from './personInfo.module.scss'
import { useState } from 'react'

const personalInformationSchema = z.object({
  nickname: nicknameSchema,
})

type PersonalInformationFormValues = z.infer<typeof personalInformationSchema>

type PersonalInformationProps = {
  name?: string
  src?: string
  email?: string
  onSubmit?: (data: PersonalInformationFormValues) => void // ZA: this is on save changes
  onLogOut?: () => void
}

export const PersonalInformationForm = ({
  name,
  src,
  email,
  onSubmit,
  onLogOut,
}: PersonalInformationProps) => {
  const { control, handleSubmit } = useForm<PersonalInformationFormValues>({
    resolver: zodResolver(personalInformationSchema),
  })

  // ZA: image Edit Logic should be added further
  const [imageEditMode, setImageEditMode] = useState(false)

  const [nicknameEditMode, setNicknameEditMode] = useState(false)

  const onSubmitHandler = handleSubmit(data => {
    onSubmit?.(data)
    setImageEditMode(false)
    setNicknameEditMode(false)
  })

  return (
    <Card as={'form'} title={'Personal Information'} onSubmit={onSubmitHandler}>
      <DevTool control={control} />
      <div className={s.imageContainer}>
        <Avatar variant={'large'} src={src} alt={`${name}'s image`} />
        <div className={s.editImage}>
          <Edit2Outline width={16} onClick={() => setImageEditMode(true)} />
        </div>
      </div>
      {nicknameEditMode ? (
        <ControlledInput label={'Nickname'} name={'nickname'} control={control} />
      ) : (
        <>
          <H2span className={s.nickname}>
            {name}
            <Edit2Outline width={16} onClick={() => setNicknameEditMode(true)} />
          </H2span>
          <Body2span className={s.email}>{email}</Body2span>
        </>
      )}

      {(imageEditMode || nicknameEditMode) && (
        <Button type="submit" variant={'primary'} fullWidth>
          Save Changes
        </Button>
      )}
      <Button type="button" variant={'secondary'} className={s.buttonLogOut} onClick={onLogOut}>
        <LogOutOutline width={16} />
        Logout
      </Button>
    </Card>
  )
}
