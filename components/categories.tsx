'use client'

interface CategoriesProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

const categories = [
  { id: 'all', name: 'All', icon: '📚' },
  { id: 'cloud', name: 'Cloud', icon: '☁️' },
  { id: 'microsoft', name: 'Microsoft', icon: '🖥️' },
  { id: 'programming', name: 'Programming', icon: '🐍' },
  { id: 'udacity', name: 'Udacity', icon: '🎯' },
  { id: 'platforms', name: 'Platforms', icon: '📖' },
  { id: 'professional', name: 'Professional', icon: '🏆' },
  { id: 'attendance', name: 'Completion', icon: '✅' },
]

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <section id="certificates" className="py-8 px-4 sm:px-6 lg:px-8 sticky top-20 bg-neutral-dark/80 backdrop-blur-md border-b border-white/10 z-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-smooth ${
                selectedCategory === category.id
                  ? 'bg-accent text-neutral-dark shadow-lg shadow-accent/50'
                  : 'bg-white/5 text-neutral-light hover:bg-white/10 border border-white/10'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
