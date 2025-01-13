'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Projects', path: '/projects', id: 'projects' },
    { name: 'Statistics', path: '/statistics', id: 'statistics' }
  ]

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#contact'
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/"
            className="text-blue-600 font-bold text-xl"
          >
            Ahmet Erdem YENIAY
          </Link>

          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.path
                    ? 'text-primary'
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              title="Resume"
            >
              Resume
            </a>
            <Link
              href="/#contact"
              onClick={handleContactClick}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === '/#contact'
                  ? 'text-primary'
                  : 'text-gray-600'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 