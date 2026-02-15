'use client'

interface CertificateCardProps {
  name: string
  issuer: string
  date: string
  description: string
  icon?: string
}

export function CertificateCard({
  name,
  issuer,
  date,
  description,
  icon = '📜',
}: CertificateCardProps) {
  return (
    <div className="glass rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group cursor-pointer h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-xs text-blue-400 font-medium">{date}</span>
      </div>

      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
        {name}
      </h3>

      <p className="text-sm text-blue-400 mb-3">{issuer}</p>

      <p className="text-sm text-muted flex-grow leading-relaxed">
        {description}
      </p>

      <div className="mt-4 pt-4 border-t border-blue-500/20 flex items-center text-xs text-muted group-hover:text-blue-400 transition-colors">
        <span>View Details →</span>
      </div>
    </div>
  )
}
