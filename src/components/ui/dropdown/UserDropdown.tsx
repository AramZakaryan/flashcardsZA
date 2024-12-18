import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import s from './userDropdown.module.scss'
import { Avatar, Caption, LogOutOutline, PersonOutline, Subtitle2span } from '@/components'
import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'
import { User } from '@/services/auth'

export type UserDropdownProps = Partial<Pick<User, 'avatar' | 'name' | 'email'>> & {
  logOut?: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>['onSelect']
} & ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>

const UserDropdown = ({ avatar, name, email, logOut, ...restProps }: UserDropdownProps) => {
  return (
    <DropdownMenuPrimitive.Root {...restProps}>
      <DropdownMenuPrimitive.Trigger asChild>
        <button className={s.IconButton} aria-label="Customise options">
          <Avatar variant={'small'} src={avatar} />
        </button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenuPrimitive.Arrow asChild className={s.DropdownMenuArrow}>
            <div className={s.arrow} />
          </DropdownMenuPrimitive.Arrow>

          <DropdownMenuPrimitive.Item className={s.DropdownMenuItem}>
            <Avatar variant={'small'} src={avatar} />
            <div className={clsx(s.RightSlot, s.userInfo)}>
              <Subtitle2span>{name}</Subtitle2span>
              <Caption className={s.email}>{email}</Caption>
            </div>
          </DropdownMenuPrimitive.Item>

          <DropdownMenuPrimitive.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenuPrimitive.Item asChild className={s.DropdownMenuItem}>
            <Link to="/profile">
              <PersonOutline width={16} />
              <Caption className={s.email}>My Profile</Caption>
            </Link>
          </DropdownMenuPrimitive.Item>

          <DropdownMenuPrimitive.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenuPrimitive.Item onSelect={logOut} className={s.DropdownMenuItem}>
            <LogOutOutline width={16} />
            <Caption className={s.email}>Sign Out</Caption>
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}

export default UserDropdown
