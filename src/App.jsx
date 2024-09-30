import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { usePrivy } from '@privy-io/react-auth'

import { useStateContext } from './context'
import { Home, Onboarding, Profile } from './pages'
import MedicalRecords from './pages/medical-records/index'
import SingleRecordDetails from './pages/medical-records/single-record-details'

import ScreeningSchedule from './pages/ScreeningSchedule'
import { Navbar, Sidebar } from './components'

export default function App() {
  const navigate = useNavigate()
  const { user, authenticated, ready, login } = usePrivy()
  console.log(user)

  const { currentUser } = useStateContext()

  useEffect(() => {
    if (ready && !authenticated) {
      login()
    } else if (user && !currentUser) {
      navigate('/onboarding')
    }
  }, [ready, currentUser, navigate])

  return (
    <div className="sm:-8 relative flex min-h-screen flex-row bg-[#13131a] p-4">
      <div className="relative mr-10 hidden sm:flex">
        <Sidebar />
      </div>

      <div className="mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route
            path="/medical-records/:id"
            element={<SingleRecordDetails />}
          />
          <Route path="/screening-schedules" element={<ScreeningSchedule />} />
        </Routes>
      </div>
    </div>
  )
}
