'use client'

export function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 border border-blue-500/30">
            Professional Portfolio
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="gradient-text">Certificate of Achievement</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          A comprehensive showcase of professional learning and continuous growth across cloud infrastructure, full-stack development, AI, and specialized technologies over 15+ years.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#certificates"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-medium"
          >
            Explore Certificates
          </a>
          <a
            href="#timeline"
            className="px-8 py-3 rounded-lg border border-blue-500/50 hover:border-blue-400 transition-colors font-medium hover:bg-blue-500/10"
          >
            View Learning Journey
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-blue-400">30+</div>
            <p className="text-sm text-muted mt-2">Certificates Earned</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-purple-400">15+</div>
            <p className="text-sm text-muted mt-2">Years of Learning</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-cyan-400">8</div>
            <p className="text-sm text-muted mt-2">Skill Categories</p>
          </div>
        </div>
      </div>
    </section>
  )
}
