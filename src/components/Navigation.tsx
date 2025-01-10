'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path

    return (
        <nav className="bg-white fixed w-full z-50 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-8 items-center">
                        <Link 
                            href="/" 
                            className={isActive('/') ? 'text-primary' : 'text-gray-600 hover:text-gray-900'}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/about" 
                            className={isActive('/about') ? 'text-primary' : 'text-gray-600 hover:text-gray-900'}
                        >
                            About
                        </Link>
                        <Link 
                            href="/projects" 
                            className={isActive('/projects') ? 'text-primary' : 'text-gray-600 hover:text-gray-900'}
                        >
                            Projects
                        </Link>
                        <Link 
                            href="/statistics" 
                            className={isActive('/statistics') ? 'text-primary' : 'text-gray-600 hover:text-gray-900'}
                        >
                            Statistics
                        </Link>
                        <Link 
                            href="/contact" 
                            className={isActive('/contact') ? 'text-primary' : 'text-gray-600 hover:text-gray-900'}
                        >
                            Contact
                        </Link>
                        <Link 
                            href="/resume" 
                            className={isActive('/resume') ? 'text-primary' : 'text-gray-600 hover:text-gray-900'}
                        >
                            Resume
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
} 