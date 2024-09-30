import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconCirclePlus } from '@tabler/icons-react'
import { usePrivy } from '@privy-io/react-auth'

import { useStateContext } from '../../context'
import RecordCard from './components/record-card'

export default function Index() {
  const { user } = usePrivy()
  const navigate = useNavigate()

  const [userRecords, setUserRecords] = useState([])

  const { records, fetchUserRecords, fetchUserByEmail } = useStateContext()

  useEffect(() => {
    if (user) {
      fetchUserByEmail(user.email.address)
      fetchUserRecords(user.email.address)
    }
  }, [user, fetchUserByEmail, fetchUserRecords])

  useEffect(() => {
    setUserRecords(records)
    localStorage.setItem('userRecords', JSON.stringify(records))
  }, [records])

  const handleNavigate = (name) => {
    const filteredRecords = userRecords.filter(
      (record) => record.recordName === name,
    )
    navigate(`/medical-records/${name}`, {
      state: filteredRecords[0],
    })
  }

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

      <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {userRecords?.map((record) => (
          <RecordCard
            key={record.recordName}
            record={record}
            onNavigate={handleNavigate}
          />
        ))}
      </div>
    </div>
  )
}
