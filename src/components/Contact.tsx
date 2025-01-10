import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const contacts = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-2xl" />,
      link: 'https://www.linkedin.com/in/ahmet-erdem-yeniay/',
      username: 'ahmet-erdem-yeniay'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      link: 'https://github.com/aeyeniay',
      username: 'aeyeniay'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="text-2xl" />,
      link: 'mailto:aeyeniay@gmail.com',
      username: 'aeyeniay@gmail.com'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex justify-center items-center gap-8">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {contact.icon}
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">
                {contact.username}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 