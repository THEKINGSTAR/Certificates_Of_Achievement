'use client'

import { CertificateCard } from './certificate-card'

interface Cert {
  name: string
  issuer: string
  date: string
  description: string
}

interface CategorySectionProps {
  id: string
  icon: string
  title: string
  description: string
  color: string
  certs: Cert[]
}

export function CategorySection({
  id,
  icon,
  title,
  description,
  color,
  certs,
}: CategorySectionProps) {
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 border-b border-blue-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{icon}</span>
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              {title}
            </h2>
          </div>
          <p className="text-lg text-muted max-w-2xl">
            {description}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CertificateCard {...cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
