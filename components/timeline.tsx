'use client'

export default function Timeline() {
  const milestones = [
    {
      year: '2009',
      title: 'Technical Foundation',
      description: 'Started professional journey with YAT Technical Support Diploma',
      icon: '🎓',
    },
    {
      year: '2015-2018',
      title: 'Microsoft Certifications',
      description: 'Earned MCSD credential with focus on C# and Windows development',
      icon: '🖥️',
    },
    {
      year: '2018-2020',
      title: 'Programming Expansion',
      description: 'Completed Python programming courses from intro to intermediate level',
      icon: '🐍',
    },
    {
      year: '2020-2022',
      title: 'Full Stack Mastery',
      description: 'Completed multiple full-stack development tracks including Udacity',
      icon: '💻',
    },
    {
      year: '2022-2023',
      title: 'Cloud & AI Pioneer',
      description: 'Earned AWS Cloud Practitioner and Generative AI certifications',
      icon: '☁️',
    },
    {
      year: '2023-Present',
      title: 'Continuous Excellence',
      description: 'Pursuing advanced technologies, ethical hacking, and data analysis',
      icon: '🚀',
    },
  ]

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-light mb-4">
            Learning Journey
          </h2>
          <p className="text-neutral-light/70 text-lg">
            A timeline of continuous growth and professional development
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-secondary to-accent transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex flex-col md:flex-row md:items-center gap-6 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Left side - Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-3 md:text-left md:pl-8'}`}>
                  <div className="glass-effect rounded-lg p-6">
                    <span className="text-accent font-bold text-lg">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-neutral-light mt-2">
                      {milestone.title}
                    </h3>
                    <p className="text-neutral-light/70 mt-2">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center - Icon/Dot */}
                <div className="hidden md:flex md:w-12 md:justify-center md:order-2">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-xl shadow-lg shadow-accent/50 animate-glow">
                    {milestone.icon}
                  </div>
                </div>

                {/* Right side - Empty on alternating */}
                <div className="md:w-1/2 md:order-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
