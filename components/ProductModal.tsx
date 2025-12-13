"use client"

import type { Product } from "@/types/product"
import Image from "next/image"
import { X } from "lucide-react"

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const numeroWhatsApp = '51929438206';
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola, vengo de ErosStore y me interesa el producto "${product.name}" con precio $${product.price}. ¿Podrían darme más información?`,
    )
    window.open(`https://wa.me/${numeroWhatsApp}?text=${message}`, "_blank")
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
          {/* Imagen del producto */}
          <div className="md:w-1/2 p-6">
            <div className="relative h-[300px] w-full">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Detalles del producto */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#CF0F47] mb-2">{product.name}</h2>
            <p className="text-xl text-[#CF0F47] font-bold mb-4">${product.price.toFixed(2)}</p>
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
