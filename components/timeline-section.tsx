'use client'

import { timeline } from '@/lib/utils'

export function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Learning Journey Timeline
          </h2>
          <p className="text-lg text-muted">
            A comprehensive overview of professional growth and continuous learning milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 md:left-1/2 md:transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Dot */}
                <div className="absolute left-0 top-2 w-6 h-6 bg-blue-600 border-4 border-background rounded-full md:left-1/2 md:transform md:-translate-x-1/2 -translate-x-1/2" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:w-5/12' : 'md:ml-auto md:w-5/12'}`}>
                  <div className="glass rounded-xl p-6">
                    <span className="text-sm font-bold text-blue-400">{item.year}</span>
                    <h3 className="text-xl font-bold mt-2 mb-2">
                      {item.milestone}
                    </h3>
                    <p className="text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
