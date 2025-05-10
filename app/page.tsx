"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Banner from "@/components/Banner"
import Filters from "@/components/Filters"
import ProductList from "@/components/ProductList"
import ProductModal from "@/components/ProductModal"
import Footer from "@/components/Footer"
import type { Product } from "@/types/product"
import { sampleProducts } from "@/types/product"

// Lista de subcategorías disponibles
const subcategories = [
  "Todos",
  "Consoladores",
  "Vibradores",
  "Dildos",
  "Bondage",
  "Lencería",
  "Anillos",
  "Lubricantes",
  "Masturbadores",
]

export default function Home() {
  // Estado para el filtro de categoría
  const [categoryFilter, setCategoryFilter] = useState<string>("todo")

  // Estado para el filtro de subcategoría
  const [subcategoryFilter, setSubcategoryFilter] = useState<string>("Todos")

  // Estado para el producto seleccionado en el modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Filtrar productos según los filtros seleccionados
  const filteredProducts = sampleProducts.filter((product) => {
    // Filtro de categoría
    if (categoryFilter !== "todo" && product.category !== categoryFilter) {
      return false
    }

    // Filtro de subcategoría
    if (subcategoryFilter !== "Todos" && product.subcategory !== subcategoryFilter.toLowerCase()) {
      return false
    }

    return true
  })

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <Banner />
      <main className="flex-grow">
        <Filters
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          subcategoryFilter={subcategoryFilter}
          setSubcategoryFilter={setSubcategoryFilter}
          subcategories={subcategories}
        />
        <ProductList products={filteredProducts} onProductClick={setSelectedProduct} />
      </main>
      <Footer />

      {/* Modal de producto */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  )
}
