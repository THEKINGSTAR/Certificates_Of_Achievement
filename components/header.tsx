'use client'

import { useState } from 'react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50)
    })
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass backdrop-blur-md border-b border-blue-500/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          <h1 className="text-xl font-bold gradient-text">Certificates</h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#certificates" className="text-sm hover:text-blue-400 transition-colors">
            Certificates
          </a>
          <a href="#skills" className="text-sm hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a href="#timeline" className="text-sm hover:text-blue-400 transition-colors">
            Journey
          </a>
        </div>

        <a
          href="https://github.com/THEKINGSTAR/Certificate_Of_Achievement"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          GitHub
        </a>
      </nav>
    </header>
  )
}
