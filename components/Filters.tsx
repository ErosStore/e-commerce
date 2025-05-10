"use client"

interface FiltersProps {
  categoryFilter: string
  setCategoryFilter: (category: string) => void
  subcategoryFilter: string
  setSubcategoryFilter: (subcategory: string) => void
  subcategories: string[]
}

export default function Filters({
  categoryFilter,
  setCategoryFilter,
  subcategoryFilter,
  setSubcategoryFilter,
  subcategories,
}: FiltersProps) {
  return (
    <section className="py-6 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Botones de categoría */}
          <div className="flex gap-2">
            <button
              onClick={() => setCategoryFilter("todo")}
              className={`px-3 py-1 rounded-xl text-[#FF0B55] font-medium border border-[#FF0B55] transition-all duration-300 hover:bg-[#FF0B55] hover:text-black ${
                categoryFilter === "todo" ? "bg-[#FF0B55] text-black" : ""
              }`}
            >
              Todo
            </button>
            <button
              onClick={() => setCategoryFilter("mujer")}
              className={`px-3 py-1 rounded-xl text-[#FF0B55] font-medium border border-[#FF0B55] transition-all duration-300 hover:bg-[#FF0B55] hover:text-black ${
                categoryFilter === "mujer" ? "bg-[#FF0B55] text-black" : ""
              }`}
            >
              Mujer
            </button>
            <button
              onClick={() => setCategoryFilter("hombre")}
              className={`px-3 py-1 rounded-xl text-[#FF0B55] font-medium border border-[#FF0B55] transition-all duration-300 hover:bg-[#FF0B55] hover:text-black ${
                categoryFilter === "hombre" ? "bg-[#FF0B55] text-black" : ""
              }`}
            >
              Hombre
            </button>
          </div>

          {/* Select de subcategorías */}
          <div>
            <select
              value={subcategoryFilter}
              onChange={(e) => setSubcategoryFilter(e.target.value)}
              className="bg-black text-[#FF0B55] px-3 py-1 rounded-xl border border-[#FF0B55] focus:outline-none focus:ring-2 focus:ring-[#CF0F47]"
            >
              {subcategories.map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}
