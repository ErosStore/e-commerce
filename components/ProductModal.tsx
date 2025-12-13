"use client"

import { useState } from "react"
import type { Product } from "@/types/product"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Usar el array de imágenes si está disponible, sino usar el campo image como fallback
  const images = product.images && product.images.length > 0 
    ? product.images 
    : product.image 
    ? [product.image] 
    : ["/eros-store/placeholder.svg"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const numeroWhatsApp = '51929438206';
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola, vengo de ErosStore y me interesa el producto "${product.name}" con precio $${product.price}. ¿Podrían darme más información?`,
    )
    window.open(`https://wa.me/${numeroWhatsApp}?text=${message}`, "_blank")
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="rounded-lg fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80">
      <div className="relative bg-[#000000] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#CF0F47] hover:text-[#FF0B55] transition-colors duration-300 z-10"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Carrusel de imágenes del producto */}
          <div className="md:w-1/2 p-6">
            <div className="relative h-[300px] w-full group">
              {/* Imagen actual */}
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src={images[currentImageIndex]}
                  alt={`${product.name} - Imagen ${currentImageIndex + 1}`}
                  fill
                  className="object-contain rounded-lg transition-opacity duration-300"
                  key={currentImageIndex}
                />
              </div>

              {/* Botones de navegación (solo si hay más de una imagen) */}
              {images.length > 1 && (
                <>
                  {/* Botón anterior */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-[#CF0F47] p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  {/* Botón siguiente */}
                  <button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-[#CF0F47] p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Indicadores de puntos */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-[#CF0F47] w-6"
                            : "bg-white/50 hover:bg-white/70"
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Detalles del producto */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#CF0F47] mb-2">{product.name}</h2>
            <p className="text-xl text-[#CF0F47] font-bold mb-4">S/{product.price.toFixed(2)}</p>
            <div className="mb-6">
              <p className="text-[#CF0F47] leading-relaxed">{product.description}</p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="w-full py-3 px-4 bg-[#CF0F47] hover:bg-[#FF0B55] text-[#FFDEDE] font-medium rounded-lg transition-colors duration-300"
            >
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
