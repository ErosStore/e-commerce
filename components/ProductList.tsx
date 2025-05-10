"use client"

import type { Product } from "@/types/product"
import ProductCard from "./ProductCard"

interface ProductListProps {
  products: Product[]
  onProductClick: (product: Product) => void
}

export default function ProductList({ products, onProductClick }: ProductListProps) {
  return (
    <section className="py-8 px-6 mx-6 bg-[#CF0F47] rounded-xl">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif text-[#FFDEDE] mb-6 text-center italic">Nuestros Productos</h2>

        {/* Contenedor con scroll horizontal para ambas filas */}
        <div
          className="overflow-x-auto py-4 px-4"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#000000 #FFDEDE",
          }}
        >
          <style jsx>{`
            /* Estilos para navegadores webkit (Chrome, Safari, etc.) */
            div::-webkit-scrollbar {
              height: 8px;
            }
            div::-webkit-scrollbar-track {
              background: #FFDEDE;
              border-radius: 4px;
            }
            div::-webkit-scrollbar-thumb {
              background-color: #000000;
              border-radius: 4px;
            }
          `}</style>
          <div className="inline-block min-w-full">
            <div className="grid grid-rows-2 gap-6" style={{ gridAutoColumns: "250px", gridAutoFlow: "column" }}>
              {products.map((product, index) => (
                <div key={product.id} className={`${index % 2 === 0 ? "row-start-1" : "row-start-2"}`}>
                  <ProductCard product={product} onClick={onProductClick} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
