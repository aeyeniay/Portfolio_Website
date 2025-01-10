'use client'
import { useState } from 'react'

export default function TabGroup() {
  const [activeTab, setActiveTab] = useState<'map' | 'hourly'>('map')

  return (
    <div className="flex space-x-4 border-b">
      <button
        className={`px-4 py-2 ${activeTab === 'map' ? 'border-b-2 border-blue-500' : ''}`}
        onClick={() => setActiveTab('map')}
      >
        Visitor Map
      </button>
      <button
        className={`px-4 py-2 ${activeTab === 'hourly' ? 'border-b-2 border-blue-500' : ''}`}
        onClick={() => setActiveTab('hourly')}
      >
        Hourly Stats
      </button>
    </div>
  )
} 