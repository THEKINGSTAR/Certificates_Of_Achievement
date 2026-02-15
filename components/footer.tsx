'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-blue-500/10 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-600/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏆</span>
              <h3 className="font-bold text-lg">Certificates</h3>
            </div>
            <p className="text-muted text-sm">
              A professional portfolio showcasing 15+ years of continuous learning and achievement across multiple platforms and technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="#certificates" className="hover:text-blue-400 transition-colors">
                  Certificates
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-blue-400 transition-colors">
                  Journey
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href="https://github.com/THEKINGSTAR/Certificate_Of_Achievement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/THEKINGSTAR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted">
          <p>© {currentYear} Khaled Fathallah. All rights reserved.</p>
          <p>Deployed on Vercel • Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
