import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import ivanImage from '@/assets/image/john.png'
import s from './dropdown.module.scss'
import { Caption, LogOutOutline, PersonOutline, Subtitle2 } from '@/components'
import { clsx } from 'clsx'

/** ZA: this component is initial, it will receive some functionality
 * * and/or some params during the development
 */
const Dropdown = () => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button className={s.IconButton} aria-label="Customise options">
          <img src={ivanImage} className={s.IconImage} alt={'ivan image'} />
        </button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenuPrimitive.Arrow asChild className={s.DropdownMenuArrow}>
            <div className={s.arrow} />
          </DropdownMenuPrimitive.Arrow>

          <DropdownMenuPrimitive.Item className={s.DropdownMenuItem}>
            <img src={ivanImage} className={s.IconImage} alt={'ivan image'} />
            <div className={clsx(s.RightSlot, s.userInfo)}>
              <Subtitle2>Ivan</Subtitle2>
              <Caption className={s.email}>j&johnson@gmail.com</Caption>
            </div>
          </DropdownMenuPrimitive.Item>

          <DropdownMenuPrimitive.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenuPrimitive.Item className={s.DropdownMenuItem}>
            <PersonOutline width={16} />
            <Caption className={s.email}>My Profile</Caption>
          </DropdownMenuPrimitive.Item>

          <DropdownMenuPrimitive.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenuPrimitive.Item className={s.DropdownMenuItem}>
            <LogOutOutline width={16} />
            <Caption className={s.email}>Sign Out</Caption>
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}

export default Dropdown
