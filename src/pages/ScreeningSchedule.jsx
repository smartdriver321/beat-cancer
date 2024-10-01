import React from 'react'
import { useLocation } from 'react-router-dom'

import KanbanBoard from '../components/KanbanBoard'

export default function ScreeningSchedulePage() {
  const state = useLocation()
  return (
    <div className="w-full overflow-scroll">
      <KanbanBoard state={state} />;
    </div>
  )
}
