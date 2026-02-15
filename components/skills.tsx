'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS', 'Cloud Architecture', 'Cloud Services', 'Infrastructure Management'],
      icon: '☁️',
    },
    {
      title: 'Programming Languages',
      skills: ['Python', 'C#', 'JavaScript', 'Java'],
      icon: '🐍',
    },
    {
      title: 'Web Development',
      skills: ['Full Stack', 'Frontend Development', 'Backend Development', 'WordPress'],
      icon: '🌐',
    },
    {
      title: 'AI & Data',
      skills: ['Generative AI', 'Data Analysis', 'Machine Learning', 'Analytics'],
      icon: '🤖',
    },
    {
      title: 'Security',
      skills: ['Ethical Hacking', 'Cybersecurity', 'Security Testing', 'Network Security'],
      icon: '🔒',
    },
    {
      title: 'Mobile Development',
      skills: ['Android Development', 'Mobile Apps', 'Mobile Architecture', 'App Development'],
      icon: '📱',
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-light mb-4">
            Professional Skills
          </h2>
          <p className="text-neutral-light/70 text-lg">
            Expertise developed through certifications and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-effect rounded-lg p-6 hover-lift"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-neutral-light">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-neutral-light/70">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
