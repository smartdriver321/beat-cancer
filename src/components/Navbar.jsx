import React, { useCallback } from 'react'
import { usePrivy } from '@privy-io/react-auth'
import { IconHeartHandshake } from '@tabler/icons-react'

import { search } from '../assets'
import CustomButton from './CustomButton'

export default function Navbar() {
  const { authenticated, login, user, logout } = usePrivy()
  console.table('user_info: ', user)

  const handleLoginLogout = useCallback(() => {
    if (authenticated) {
      logout()
    } else {
      login().then(() => {
        if (user) {
          console.log(user)
        }
      })
    }
  }, [authenticated, login, logout, user])

  return (
    <div className="mb-[35px] flex flex-col-reverse justify-between gap-6 md:flex-row">
      <div className="flex h-[52px] max-w-[458px] flex-row rounded-[100px] bg-[#1c1c24] py-2 pl-4 pr-2 lg:flex-1">
        <input
          type="text"
          placeholder="Search for records"
          className="flex w-full bg-transparent font-epilogue text-[14px] font-normal text-white outline-none placeholder:text-[#4b5264]"
        />
        <div className="flex h-full w-[72px] cursor-pointer items-center justify-center rounded-[20px] bg-[#4acd8d]">
          <img
            src={search}
            alt="search"
            className="h-[15px] w-[15px] object-contain"
          />
        </div>
      </div>

      <div className="hidden flex-row justify-end gap-2 sm:flex">
        <CustomButton
          btnType="button"
          title={authenticated ? 'Log Out' : 'Log In'}
          styles={authenticated ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={handleLoginLogout}
        />
      </div>

      <div className="relative flex items-center justify-between sm:hidden">
        <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[10px] bg-[#2c2f32]">
          <IconHeartHandshake size={40} color="#1ec070" className="p-2" />
        </div>
      </div>
    </div>
  )
}
