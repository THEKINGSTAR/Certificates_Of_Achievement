import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { CategorySection } from '@/components/category-section'
import { SkillsSection } from '@/components/skills-section'
import { TimelineSection } from '@/components/timeline-section'
import { Footer } from '@/components/footer'
import { certificates } from '@/lib/utils'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Certificate Categories */}
      <section id="certificates">
        {Object.entries(certificates).map(([key, category]) => (
          <CategorySection
            key={key}
            id={key}
            icon={category.icon}
            title={category.title}
            description={category.description}
            color={category.color}
            certs={category.certs}
          />
        ))}
      </section>

      <SkillsSection />
      <TimelineSection />
      <Footer />
    </main>
  )
}
