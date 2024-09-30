import React, { useEffect } from 'react'
import { IconCirclePlus } from '@tabler/icons-react'
import { usePrivy } from '@privy-io/react-auth'

import { useStateContext } from '../../context'

export default function Index() {
  const { user } = usePrivy()

  const { fetchUserRecords, fetchUserByEmail } = useStateContext()

  useEffect(() => {
    if (user) {
      fetchUserByEmail(user.email.address)
      fetchUserRecords(user.email.address)
    }
  }, [user, fetchUserByEmail, fetchUserRecords])

  return (
    <div className="flex flex-wrap gap-[26px]">
      <button
        type="button"
        className="mt-6 inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-[#13131a] dark:text-white dark:hover:bg-neutral-800"
        onClick={() => {}}
      >
        <IconCirclePlus />
        Create Record
      </button>
    </div>
  )
}
