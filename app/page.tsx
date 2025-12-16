"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import Banner from "@/components/Banner"
import Filters from "@/components/Filters"
import ProductList from "@/components/ProductList"
import ProductModal from "@/components/ProductModal"
import Footer from "@/components/Footer"
import AmazonProductCard from "@/components/AmazonProductCard" // Importar el nuevo componente
import type { Product } from "@/types/product"
import { sampleProducts } from "@/types/product"

// Definir la interfaz para los datos del producto de Amazon, debe coincidir con lo que devuelve la API
interface AmazonProduct {
  id: string
  name: string
  image: string
  price: string
  currency: string
  affiliateLink: string
}

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

  // Nuevo estado para los productos de Amazon
  const [amazonProducts, setAmazonProducts] = useState<AmazonProduct[]>([])
  const [loadingAmazon, setLoadingAmazon] = useState<boolean>(true)
  const [errorAmazon, setErrorAmazon] = useState<string | null>(null)

  // Efecto para cargar los productos de Amazon desde nuestra API Route
  useEffect(() => {
    async function fetchAmazonProducts() {
      try {
        setLoadingAmazon(true)
        const response = await fetch("/api/amazon") // Llama a nuestra API Route
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: AmazonProduct[] = await response.json()
        setAmazonProducts(data)
      } catch (error: any) {
        setErrorAmazon(error.message || "Error al cargar productos de Amazon")
        console.error("Error fetching Amazon products:", error)
      } finally {
        setLoadingAmazon(false)
      }
    }

    fetchAmazonProducts()
  }, []) // El array vacío asegura que se ejecute solo una vez al montar

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

        {/* Sección para Productos de Amazon */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-serif font-bold text-[#CF0F47] mb-6 text-center">Productos de Amazon</h2>
          {loadingAmazon && <p className="text-center">Cargando productos de Amazon...</p>}
          {errorAmazon && <p className="text-center text-red-500">Error: {errorAmazon}</p>}
          {!loadingAmazon && !errorAmazon && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {amazonProducts.map((product) => (
                <AmazonProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />

      {/* Modal de producto */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  )
}
