"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import type { Product } from "@/types/product"
import Image from "next/image"
import { X } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    : ["/e-commerce/placeholder.svg"]

  const numeroWhatsApp = '51929438206';
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola, vengo de ErosStore y me interesa el producto "${product.name}" con precio $${product.price}. ¿Podrían darme más información?`,
    )
    window.open(`https://wa.me/${numeroWhatsApp}?text=${message}`, "_blank")
  }

  const plugin = React.useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: true }),
    []
  )

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
          <div className="md:w-1/2 p-6 flex items-center justify-center">
            <Carousel
              plugins={[plugin]}
              className="w-full max-w-md"
              onMouseEnter={plugin.stop}
              onMouseLeave={plugin.reset}
            >
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="relative aspect-square">
                        <Image
                          src={src}
                          alt={`${product.name} - Imagen ${index + 1}`}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-[#CF0F47] border-none" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-[#CF0F47] border-none" />
                </>
              )}
            </Carousel>
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
