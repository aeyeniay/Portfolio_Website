import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          
          {/* Profil Fotoğrafı - About Me'nin hemen altında */}
          <div className="relative w-48 h-48 mx-auto mb-12">
            <Image
              src="/images/profile.jpeg"
              alt="Profile Photo"
              fill
              className="object-cover object-center scale-[1.1] rounded-full border-4 border-primary/20 shadow-xl"
              priority
              sizes="(max-width: 768px) 192px, 192px"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Sol taraf - Profil bilgileri */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Data Engineer & Analyst
            </h3>
            <div className="text-gray-600 leading-relaxed text-lg space-y-4">
              <p>
                After completing my bachelor&apos;s degree in Industrial Engineering, I worked as an IT and 
                Reporting Engineer and a Production Planning Engineer. Over time, I realized that working 
                with data and creating analytical solutions always excited me, which led me to shift my 
                focus to this field.
              </p>
              <p>
                To pursue this passion, I attended a six-month language program at the University of 
                Arkansas in the USA, followed by earning a master&apos;s degree in Data Engineering at 
                Jacobs (Constructor) University in Bremen, Germany.
              </p>
              <p>
                Currently, I work as a Data Engineer in the Artificial Intelligence Unit of the Ministry 
                of Environment, Urbanization, and Climate Change in Turkey, where I enjoy leveraging the 
                power of data to develop meaningful solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Data Engineering</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Data Analysis</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Industrial Engineering</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">IT & Reporting</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">AI Solutions</span>
            </div>
          </div>
          
          {/* Sağ taraf - İstatistikler */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">4+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-gray-600">Countries Studied</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-gray-600">Different Roles</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">MSc</div>
              <div className="text-gray-600">Data Engineering</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 