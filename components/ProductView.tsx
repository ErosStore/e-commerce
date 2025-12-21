"use client"

import { useState } from "react"
import Filters from "@/components/Filters"
import ProductModal from "@/components/ProductModal"
import type { Product } from "@/types/product"
import ProductCard from "./ProductCard" // Importar ProductCard para usarlo directamente
import type { AmazonProduct } from "@/types/amazon_product"
import AmazonProductCard from "./AmazonProductCard" // Importar AmazonProductCard

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

interface ProductViewProps {
  sampleProducts: Product[]
  amazonProducts: AmazonProduct[]
}

export default function ProductView({ sampleProducts, amazonProducts }: ProductViewProps) {
  // Estado para el filtro de categoría
  const [categoryFilter, setCategoryFilter] = useState<string>("todo")

  // Estado para el filtro de subcategoría
  const [subcategoryFilter, setSubcategoryFilter] = useState<string>("Todos")

  // Estado para el producto seleccionado en el modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Filtrar productos locales según los filtros seleccionados
  const filteredProducts = sampleProducts.filter((product) => {
    const categoryMatch = categoryFilter === "todo" || product.category === categoryFilter
    const subcategoryMatch = subcategoryFilter === "Todos" || product.subcategory.toLowerCase() === subcategoryFilter.toLowerCase()
    return categoryMatch && subcategoryMatch
  })

  // Filtrar productos de Amazon según los filtros seleccionados
  const filteredAmazonProducts = amazonProducts.filter((product) => {
    const categoryMatch = categoryFilter === "todo" || product.category === categoryFilter
    const subcategoryMatch = subcategoryFilter === "Todos" || product.subcategory.toLowerCase() === subcategoryFilter.toLowerCase()
    return categoryMatch && subcategoryMatch
  })

  return (
    <>
      <Filters
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        subcategoryFilter={subcategoryFilter}
        setSubcategoryFilter={setSubcategoryFilter}
        subcategories={subcategories}
      />
      
      {/* Sección unificada de productos */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-serif font-bold text-[#CF0F47] mb-6 text-center">Nuestros Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Renderizar productos locales filtrados */}
          {filteredProducts.map((product) => (
            <ProductCard key={`local-${product.id}`} product={product} onClick={() => setSelectedProduct(product)} />
          ))}

          {/* Renderizar productos de Amazon filtrados */}
          {filteredAmazonProducts.map((product) => (
            <AmazonProductCard key={`amazon-${product.id}`} product={product} />
          ))}
        </div>
      </section>

      {/* Modal para productos locales */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </>
  )
}
