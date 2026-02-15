'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Categories from '@/components/categories'
import CertificateGrid from '@/components/certificate-grid'
import Timeline from '@/components/timeline'
import Skills from '@/components/skills'
import Footer from '@/components/footer'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Categories selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <CertificateGrid selectedCategory={selectedCategory} />
      <Timeline />
      <Skills />
      <Footer />
    </main>
  )
}
