'use client'
import { useState } from 'react'
import Experiences from './Experiences'
import Education from './Education'


export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState('experience')

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>

          
          {/* Tab buttons */}
          <div className="flex justify-center space-x-4 mt-16 mb-8">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'experience'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'education'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Tab content */}
        <div className="mt-8">
          {activeTab === 'experience' ? <Experiences /> : <Education />}
        </div>
      </div>
    </section>
  )
} 