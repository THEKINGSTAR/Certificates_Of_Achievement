'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-neutral-dark">
              KF
            </div>
            <span className="text-xl font-bold text-neutral-light hidden sm:inline">
              Khaled Fathallah
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#certificates" className="text-neutral-light hover:text-accent transition-smooth text-sm">
              Certificates
            </a>
            <a href="#timeline" className="text-neutral-light hover:text-accent transition-smooth text-sm">
              Journey
            </a>
            <a href="#skills" className="text-neutral-light hover:text-accent transition-smooth text-sm">
              Skills
            </a>
            <a href="#footer" className="text-neutral-light hover:text-accent transition-smooth text-sm">
              Contact
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neutral-light hover:text-accent transition-smooth"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-white/10 pt-4">
            <a href="#certificates" className="block text-neutral-light hover:text-accent transition-smooth">
              Certificates
            </a>
            <a href="#timeline" className="block text-neutral-light hover:text-accent transition-smooth">
              Journey
            </a>
            <a href="#skills" className="block text-neutral-light hover:text-accent transition-smooth">
              Skills
            </a>
            <a href="#footer" className="block text-neutral-light hover:text-accent transition-smooth">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
