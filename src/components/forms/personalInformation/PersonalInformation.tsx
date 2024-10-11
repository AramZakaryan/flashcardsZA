import { useForm } from 'react-hook-form'
import {
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
import s from './personalInformation.module.scss'
import { useState } from 'react'

const personalInformationSchema = z.object({
  nickname: nicknameSchema,
})

type PersonalInformationFormValues = z.infer<typeof personalInformationSchema>

type PersonalInformationProps = {
  nickname?: string
  imageSrc?: string
  email?: string
  onSubmit?: (data: PersonalInformationFormValues) => void // ZA: this is on save changes
  onSignOut?: () => void
}

export const PersonalInformation = ({
  nickname,
  imageSrc,
  email,
  onSubmit,
  onSignOut,
}: PersonalInformationProps) => {
  const { control, handleSubmit } = useForm<PersonalInformationFormValues>({
    resolver: zodResolver(personalInformationSchema),
  })

  // ZA: image Edit Logic should be added further
  const [imageEditMode, setImageEditMode] = useState(false)

  const [nicknameEditMode, setNicknameEditMode] = useState(false)

  const onSubmitHandler = handleSubmit((data) => {
    onSubmit?.(data)
    setImageEditMode(false)
    setNicknameEditMode(false)
  })

  return (
    <Card as={'form'} title={'Personal Information'} onSubmit={onSubmitHandler}>
      <DevTool control={control} />
      <div className={s.imageContainer}>
        <img src={imageSrc} alt={`${nickname}'s image`} className={s.image} />
        <div className={s.editImage}>
          <Edit2Outline width={16} onClick={() => setImageEditMode(true)} />
        </div>
      </div>
      {nicknameEditMode ? (
        <ControlledInput label={'Nickname'} name={'nickname'} control={control} />
      ) : (
        <>
          <H2span className={s.nickname}>
            {nickname}
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
      <Button type="button" variant={'secondary'} className={s.buttonLogOut} onClick={onSignOut}>
        <LogOutOutline width={16} />
        Logout
      </Button>
    </Card>
  )
}
