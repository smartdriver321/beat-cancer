import React, { useEffect } from 'react'
import { usePrivy } from '@privy-io/react-auth'

import { useStateContext } from '../context'

export default function ProfilePage() {
  const { user } = usePrivy()

  const { currentUser, fetchUserByEmail } = useStateContext()

  useEffect(() => {
    if (!currentUser) {
      fetchUserByEmail(user?.email?.address)
    }
  }, [currentUser, fetchUserByEmail])

  if (!currentUser) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg text-gray-500">Loading...</div>
      </div>
    )
  }

  return (
    <div className="mx-auto mt-16 max-w-lg rounded-lg bg-[#1c1c24] p-6 shadow-lg">
      <div className="flex flex-col items-center">
        <p className="mb-4 flex h-20 w-20 flex-row items-center justify-center rounded-full bg-[#0092F3]">
          <span className="text-6xl">😊</span>
        </p>
        <h1 className="mb-2 text-3xl font-semibold text-white">User Profile</h1>
        <div className="mt-4 w-full">
          <p className="mb-1 text-sm text-gray-400">Email:</p>
          <p className="mb-4 text-lg font-semibold text-white">
            {currentUser.createdBy}
          </p>

          <p className="mb-1 text-sm text-gray-400">Username:</p>
          <p className="mb-4 text-lg font-semibold text-white">
            {currentUser.username}
          </p>

          <p className="mb-1 text-sm text-gray-400">Age:</p>
          <p className="mb-4 text-lg font-semibold text-white">
            {currentUser.age}
          </p>

          <p className="mb-1 text-sm text-gray-400">Location:</p>
          <p className="text-lg font-semibold text-white">
            {currentUser.location}
          </p>
        </div>
      </div>
    </div>
  )
}
