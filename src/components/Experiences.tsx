import Image from 'next/image'

type Experience = {
  title: string
  company: string
  type: string
  startDate: string
  endDate: string
  duration: string
  location: string
  description?: string
  bullets?: string[]
  skills?: string[]
  logo?: string
}

export default function Experiences() {
  const experiences: Experience[] = [
    {
      title: "Data Engineer",
      company: "T.C. Ministry of Environment, Urbanisation and Climate Change",
      type: "Full-time",
      startDate: "May 2024",
      endDate: "Present",
      duration: "Present",
      location: "Turkey",
      bullets: [
        "Data Collection and Management",
        "Data Analysis and AI Model Development",
        "Data Visualization and Reporting",
        "API Development and Integration"
      ],
      logo: "/images/companies/ministry.png"
    },
    {
      title: "Working Student in Engine Trend Monitoring",
      company: "MTU Maintenance",
      type: "Part-time",
      startDate: "Apr 2023",
      endDate: "Dec 2023",
      duration: "9 months",
      location: "Hannover, Lower Saxony, Germany · Hybrid",
      bullets: [
        "Maintain and configure MTU's engine trend-monitoring software",
        "Using APIs to aggregate data from ETM web-based application",
        "Improving the generation of engine-specific alarms",
        "Further development of data analysis and processing",
        "Performing special analyses in Excel or Python",
        "Supporting research work in aircraft operating documents on engine parameter monitoring"
      ],
      skills: ["Git", "Swagger", "Spyder", "REST APIs", "Jupyter Notebook", "Python (Programming Language)"],
      logo: "/images/companies/mtu.png"
    },
    {
      title: "IT and Reporting Engineer",
      company: "Palandoken Investment Company",
      type: "Full-time",
      startDate: "Aug 2017",
      endDate: "Mar 2019",
      duration: "1 yr 8 months",
      location: "Erzurum, Turkey · On-site",
      bullets: [
        "Creating weekly and monthly manufacturing reports",
        "Cost Analysis",
        "Capacity Reports",
        "Lean Manufacturing Activities"
      ],
      skills: ["Cost-Benefit Analysis", "Lean Manufacturing", "Reporting & Analysis"],
      logo: "/images/companies/palandoken.png"
    },
    {
      title: "Production Planning Engineer",
      company: "Günko Industrial Systems",
      type: "Full-time",
      startDate: "Oct 2016",
      endDate: "Jul 2017",
      duration: "10 months",
      location: "Istanbul, Turkey · On-site",
      bullets: [
        "Following raw materials and semi-finished products",
        "Coordinating production workflow",
        "Determining manpower and equipment"
      ],
      skills: ["VBA Excel", "Workflow Management", "Raw Materials", "Manpower Handling"],
      logo: "/images/companies/gunko.png"
    },
    {
      title: "Data Entry Specialist",
      company: "Boğaziçi Project Engineering",
      type: "Part-time",
      startDate: "Aug 2012",
      endDate: "Dec 2012",
      duration: "5 months",
      location: "Erzurum, Turkey · Hybrid",
      bullets: [
        "Collecting and processing data in the transportation planning and engineering sector",
        "Face-to-face interviews"
      ],
      logo: "/images/companies/bogazici.png"
    },
    {
      title: "Intern",
      company: "Hidromek",
      type: "Full-time",
      startDate: "Jul 2012",
      endDate: "Aug 2012",
      duration: "2 months",
      location: "Ankara, Turkey",
      description: "I served my mandatory university internship at Hidromek which is one of Turkey's largest companies. Throughout my internship period, I learned the whole process of production starting from zero to the production of a machine, also I had the opportunity to learn every process such as human resources, data processing, management, purchasing, and sales.",
      logo: "/images/companies/hidromek.png"
    }
  ]

  return (
    <div className="relative">
      <div className="absolute left-[20px] top-8 bottom-8 w-[2px] bg-gray-200" />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-12">
            <div className="absolute left-0 top-6">
              <div className="w-[10px] h-[10px] rounded-full bg-primary border-4 border-white ring-2 ring-primary" />
            </div>

            <div className="flex gap-4">
              <img 
                src={exp.logo} 
                alt={exp.company} 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-primary hover:underline">{exp.company}</p>
                <p className="text-gray-600 text-sm">{exp.startDate} - {exp.endDate} · {exp.location}</p>
                {exp.bullets && (
                  <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc list-inside">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 