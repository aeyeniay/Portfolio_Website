import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: "Advancing ESG Assessments with NLP-Driven Insights",
      description: "This project focuses on estimating carbon emissions based on vehicle characteristics using the Fuel Consumption Ratings datasets from Natural Resources Canada. Classical machine learning models and explainable artificial intelligence (XAI) techniques are applied to identify key features influencing emissions, offering actionable insights for decision-makers.",
      image: "/images/esg-project.webp",
      github: "https://github.com/aeyeniay/NLP_Mapping_Keywords",
      tags: ["NLP", "BERT", "ESG", "Python", "Machine Learning"]
    },
    {
      title: "XAI-Driven Carbon Emission Estimation",
      description: "This project focuses on estimating carbon emissions based on vehicle characteristics, utilizing the Fuel Consumption Ratings datasets provided by Natural Resources Canada. By applying classical machine learning models alongside explainable artificial intelligence (XAI) techniques, the study aims to identify the key vehicle features that influence emissions and deliver actionable insights for decision-makers.",
      image: "/images/xai-project.webp",
      github: "https://github.com/aeyeniay/MasterThesisXAI",
      tags: ["XAI", "Machine Learning", "Python", "Data Analysis"]
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern personal portfolio website developed with cutting-edge web technologies. Features a robust frontend powered by Next.js 14 and TypeScript, styled with Tailwind CSS for responsive design, and integrated with Prisma ORM for database management. Includes visitor analytics, page view statistics, and an interactive resume viewing experience.",
      image: "/images/portfolio-proje.webp",
      github: "https://github.com/aeyeniay/Portfolio_Website",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link 
              href={project.github} 
              target="_blank"
              key={index}
              className="group h-full"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01] h-full flex flex-col relative">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center">
                    <div className="flex flex-col items-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <FaGithub className="text-3xl text-white" />
                      <span className="text-lg font-medium text-white">View on GitHub</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 