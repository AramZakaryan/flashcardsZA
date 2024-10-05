import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import ivanImage from '@/assets/image/ivan.png'
import s from './dropdown.module.scss'
import { Caption, LogOutOutline, PersonOutline, Subtitle2 } from '@/components'
import { clsx } from 'clsx'

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.IconButton} aria-label="Customise options">
          <img src={ivanImage} className={s.IconImage} alt={'ivan image'} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Arrow asChild className={s.DropdownMenuArrow}>
            <div className={s.arrow} />
          </DropdownMenu.Arrow>

          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <img src={ivanImage} className={s.IconImage} alt={'ivan image'} />
            <div className={clsx(s.RightSlot, s.userInfo)}>
              <Subtitle2>Ivan</Subtitle2>
              <Caption className={s.email}>j&johnson@gmail.com</Caption>
            </div>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <PersonOutline width={16} />
            <Caption className={s.email}>My Profile</Caption>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <LogOutOutline width={16} />
            <Caption className={s.email}>Sign Out</Caption>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownMenuDemo
