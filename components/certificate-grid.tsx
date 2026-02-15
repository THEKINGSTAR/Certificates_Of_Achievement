'use client'

import { useMemo } from 'react'

interface Certificate {
  id: string
  name: string
  category: string
  description: string
  issuer: string
  year?: string
  skills: string[]
}

const certificates: Certificate[] = [
  {
    id: 'aws-cp-1',
    name: 'AWS Certified Cloud Practitioner',
    category: 'cloud',
    issuer: 'Amazon Web Services',
    year: '2023',
    description: 'Demonstrated foundational knowledge of AWS cloud services, architecture principles, and best practices for cloud solutions.',
    skills: ['AWS', 'Cloud Infrastructure', 'Cloud Services', 'AWS Architecture'],
  },
  {
    id: 'mcsd-1',
    name: 'MCSD - C# Track',
    category: 'microsoft',
    issuer: 'Microsoft',
    description: 'Microsoft Certified Solution Developer credential validating expertise in C# and .NET application development.',
    skills: ['C#', '.NET', 'Windows Development', 'Solution Architecture'],
  },
  {
    id: 'python-intro',
    name: 'Introduction to Programming Using Python',
    category: 'programming',
    issuer: 'Professional Course',
    description: 'Comprehensive introduction to Python programming fundamentals, syntax, and best practices.',
    skills: ['Python', 'Programming', 'Algorithms', 'Problem Solving'],
  },
  {
    id: 'python-intermediate',
    name: 'Python Programming - Intermediate Level',
    category: 'programming',
    issuer: 'Professional Course',
    description: 'Advanced Python concepts including OOP, data structures, and advanced programming techniques.',
    skills: ['Python', 'OOP', 'Data Structures', 'Advanced Programming'],
  },
  {
    id: 'udacity-eth',
    name: 'Foundation of Ethical Hacking',
    category: 'udacity',
    issuer: 'Udacity',
    description: 'In-depth foundation course on ethical hacking principles, security testing, and defensive strategies.',
    skills: ['Cybersecurity', 'Ethical Hacking', 'Security Testing', 'Network Security'],
  },
  {
    id: 'udacity-genai-aws',
    name: 'Introducing Generative AI with AWS',
    category: 'udacity',
    issuer: 'Udacity',
    description: 'Practical introduction to generative AI implementation using AWS services and machine learning models.',
    skills: ['Generative AI', 'AWS', 'Machine Learning', 'AI Implementation'],
  },
  {
    id: 'udacity-genai-foundation',
    name: 'Foundation of Generative AI',
    category: 'udacity',
    issuer: 'Udacity',
    description: 'Foundation-level understanding of generative AI concepts, architectures, and applications.',
    skills: ['AI', 'Generative AI', 'Machine Learning', 'AI Fundamentals'],
  },
  {
    id: 'udacity-data-analyst',
    name: 'Data Analyst Track',
    category: 'udacity',
    issuer: 'Udacity Nanodegree',
    description: 'Complete track covering data analysis, visualization, and business insights extraction.',
    skills: ['Data Analysis', 'Python', 'SQL', 'Data Visualization'],
  },
  {
    id: 'udacity-fullstack',
    name: 'Full Stack Developer Track',
    category: 'udacity',
    issuer: 'Udacity Nanodegree',
    description: 'Comprehensive full-stack development track covering frontend, backend, and database technologies.',
    skills: ['Full Stack', 'Frontend', 'Backend', 'Databases', 'Web Development'],
  },
  {
    id: 'udacity-android',
    name: 'Android Developer Track',
    category: 'udacity',
    issuer: 'Udacity Nanodegree',
    description: 'Professional Android development track with Java, Android SDK, and mobile best practices.',
    skills: ['Android', 'Mobile Development', 'Java', 'Mobile App Development'],
  },
  {
    id: 'frontend-dev',
    name: 'Front End Development Track',
    category: 'programming',
    issuer: 'Professional Development',
    description: 'Modern frontend development with HTML, CSS, JavaScript, and responsive design principles.',
    skills: ['Frontend', 'HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    id: 'fullstack-dev',
    name: 'Full Stack Development Track',
    category: 'programming',
    issuer: 'Professional Development',
    description: 'Full-stack development certification covering both frontend and backend technologies.',
    skills: ['Full Stack', 'Web Development', 'Frontend', 'Backend'],
  },
  {
    id: 'edraak-1',
    name: 'Arduino Programming Certificate',
    category: 'platforms',
    issuer: 'Edraak',
    description: 'Hands-on Arduino programming and IoT development with microcontrollers and electronics.',
    skills: ['Arduino', 'IoT', 'Embedded Systems', 'Electronics'],
  },
  {
    id: 'edraak-wordpress',
    name: 'WordPress Web Development',
    category: 'platforms',
    issuer: 'Edraak',
    description: 'Web development with WordPress, theme customization, and plugin development.',
    skills: ['WordPress', 'Web Development', 'Web Design', 'CMS'],
  },
  {
    id: 'coursera-cert',
    name: 'Coursera Professional Certificate',
    category: 'platforms',
    issuer: 'Coursera',
    description: 'Professional-level certification from Coursera covering industry-relevant skills and competencies.',
    skills: ['Professional Skills', 'Industry Standards'],
  },
  {
    id: 'yat-1',
    name: 'YAT Professional Diploma in Technical Support',
    category: 'professional',
    issuer: 'YAT Academy',
    year: '2009',
    description: 'Professional diploma covering IT technical support, troubleshooting, and system administration.',
    skills: ['IT Support', 'System Administration', 'Troubleshooting', 'Tech Support'],
  },
  {
    id: 'data-analysis-pro',
    name: 'Data Analysis Professional',
    category: 'professional',
    issuer: 'Professional Institute',
    description: 'Advanced data analysis skills for business intelligence and decision-making.',
    skills: ['Data Analysis', 'Business Intelligence', 'Analytics', 'Reporting'],
  },
  {
    id: 'attendance',
    name: 'Course Completion Certificate',
    category: 'attendance',
    issuer: 'Professional Training',
    description: 'Completion certificate for successful course attendance and assessment.',
    skills: ['Professional Development', 'Continuous Learning'],
  },
]

interface CertificateGridProps {
  selectedCategory: string
}

export default function CertificateGrid({ selectedCategory }: CertificateGridProps) {
  const filteredCertificates = useMemo(() => {
    if (selectedCategory === 'all') return certificates
    return certificates.filter(cert => cert.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group glass-effect rounded-xl p-6 hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-neutral-light line-clamp-2 flex-1 pr-2">
                    {cert.name}
                  </h3>
                  <svg className="w-6 h-6 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a.25.25 0 00-.448 0l-1.447 4.45H3.25a.25.25 0 00-.15.46l3.597 2.614-1.447 4.45a.25.25 0 00.388.29l3.597-2.614 3.597 2.614a.25.25 0 00.388-.29l-1.447-4.45 3.597-2.614a.25.25 0 00-.15-.46h-5.748l-1.447-4.45z" />
                  </svg>
                </div>

                <p className="text-neutral-light/70 text-sm">
                  {cert.issuer}
                </p>

                <p className="text-neutral-light/60 text-sm line-clamp-2">
                  {cert.description}
                </p>

                {cert.year && (
                  <p className="text-accent text-xs font-semibold">
                    {cert.year}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-2 py-1 bg-secondary/20 text-secondary text-xs rounded border border-secondary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-light/60">No certificates found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
