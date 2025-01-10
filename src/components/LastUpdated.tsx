'use client'

import { useEffect, useState } from 'react'

export default function LastUpdated() {
  const [currentDate, setCurrentDate] = useState<string>('')

  useEffect(() => {
    const now = new Date()
    const formattedDate = now.toLocaleString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
    setCurrentDate(formattedDate)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 text-sm text-gray-600 bg-white border border-gray-200 py-2 px-3 rounded-lg shadow-sm flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      Last Updated: {currentDate}
    </div>
  )
} 