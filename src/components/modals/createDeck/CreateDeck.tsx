import { Button, ControlledCheckbox, ControlledInput, ImageOutline } from '@/components'
import { Modal, ModalProps } from '../Modal'
import s from './createDeck.module.scss'
import { z } from 'zod'
import { createDeckSchema } from '@/utils'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'

export type CreateDeckValue = z.infer<typeof createDeckSchema>

type CreateDeckProps = ModalProps

/** CreateDeck component
 * is Modal integrated with react-hook-form including ControlledInput and ControlledCheckbox
 *
 * P.S. to control the state use open and onOpenChange props
 * P.S. to control the submission use onClickPrimary prop
 */
export const CreateDeck = ({ onClickPrimary, ...props }: CreateDeckProps) => {
  const { control, handleSubmit } = useForm<CreateDeckValue>({
    defaultValues: {
      isPrivate: false,
    },
    resolver: zodResolver(createDeckSchema),
  })

  const fileInputRef = useRef<HTMLInputElement>(null)

  const onSubmitHandler = handleSubmit(({ name, isPrivate }) => {
    const formData = new FormData()

    formData.append('name', name)
    formData.append('isPrivate', String(isPrivate)) // Directly convert to string

    const files = fileInputRef.current?.files
    if (files && files.length > 0) {
      formData.append('cover', files[0])
    }

    onClickPrimary?.(formData)
  })

  return (
    <>
      <Modal
        {...props}
        title={'Add New Deck'}
        primaryButtonName={'Add New Deck'}
        onClickPrimary={onSubmitHandler}
      >
        <form className={s.form}>
          <ControlledInput
            label={'Deck Name'}
            className={s.Input}
            placeholder={'Write here Deck Name'}
            control={control}
            name={'name'}
          />
          <input type={'file'} ref={fileInputRef} hidden />
          <Button
            type={'button'}
            variant={'secondary'}
            fullWidth
            onClick={() => {
              fileInputRef.current?.click()
            }}
          >
            <ImageOutline width={16} />
            Upload Image
          </Button>
          <ControlledCheckbox control={control} name={'isPrivate'} label={'Private Deck'} />
        </form>
      </Modal>
    </>
  )
}
