'use client'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-light leading-tight">
                Continuous<br />
                <span className="text-accent">Learning</span>
              </h1>
              <p className="text-lg text-neutral-light/70">
                A comprehensive journey through cloud infrastructure, software development, AI, and professional credentials. Showcasing years of dedication to staying current with industry standards.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg">
                <span className="text-accent font-semibold">30+</span>
                <span className="text-neutral-light/70 ml-2">Certifications</span>
              </div>
              <div className="px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-lg">
                <span className="text-secondary font-semibold">8</span>
                <span className="text-neutral-light/70 ml-2">Categories</span>
              </div>
              <div className="px-4 py-2 bg-primary/20 border border-primary/50 rounded-lg">
                <span className="text-accent font-semibold">10+</span>
                <span className="text-neutral-light/70 ml-2">Years Learning</span>
              </div>
            </div>

            <a
              href="#certificates"
              className="inline-block px-8 py-3 bg-accent text-neutral-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-smooth hover:scale-105"
            >
              Explore Certificates →
            </a>
          </div>

          {/* Right side - Visual element */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-72 h-72">
              {/* Animated background shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary/20 to-primary/20 rounded-3xl blur-3xl animate-glow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-block p-4 bg-accent/10 rounded-2xl border border-accent/30">
                    <svg className="w-16 h-16 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a.25.25 0 00-.448 0l-1.447 4.45H3.25a.25.25 0 00-.15.46l3.597 2.614-1.447 4.45a.25.25 0 00.388.29l3.597-2.614 3.597 2.614a.25.25 0 00.388-.29l-1.447-4.45 3.597-2.614a.25.25 0 00-.15-.46h-5.748l-1.447-4.45z" />
                    </svg>
                  </div>
                  <p className="text-neutral-light font-semibold">Achievement</p>
                  <p className="text-neutral-light/60 text-sm">Verified Credentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
