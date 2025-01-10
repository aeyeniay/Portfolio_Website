import Image from 'next/image'

type Education = {
  school: string
  degree: string
  field: string
  startDate: string
  endDate: string
  duration: string
  location?: string
  logo: string
}

export default function Education() {
  const education: Education[] = [
    {
      school: "Constructor University",
      degree: "Master of Science",
      field: "Data Engineering",
      startDate: "Aug 2021",
      endDate: "Jan 2024",
      duration: "2 yrs 5 months",
      location: "Bremen, Germany",
      logo: "/images/edu/constructor.png"
    },
    {
      school: "University of Arkansas",
      degree: "Intensive English Program",
      field: "Language",
      startDate: "Jan 2020",
      endDate: "Aug 2020",
      duration: "8 months",
      location: "Arkansas, United States",
      logo: "/images/edu/arkansas.png"
    },
    {
      school: "Atatürk Üniversitesi",
      degree: "Bachelor's degree",
      field: "Industrial Engineering",
      startDate: "Sep 2010",
      endDate: "Feb 2015",
      duration: "4 yrs 5 months",
      location: "Erzurum, Turkey",
      logo: "/images/edu/ataturk.png"
    }
  ]

  return (
    <div className="relative">
      <div className="absolute left-[20px] top-8 bottom-8 w-[2px] bg-gray-200" />

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-12">
            <div className="absolute left-0 top-6">
              <div className="w-[10px] h-[10px] rounded-full bg-primary border-4 border-white ring-2 ring-primary" />
            </div>

            <div className="flex gap-4">
              <img 
                src={edu.logo} 
                alt={edu.school} 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-primary hover:underline">{edu.school}</p>
                <p className="text-gray-600 text-sm">{edu.startDate} - {edu.endDate} · {edu.location}</p>
                <p className="text-gray-600 text-sm">{edu.field}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 