"use client"

import type { Product} from "@/types/product"
import Image from "next/image"

interface ProductCardProps {
  product: Product
  onClick: (product: Product) => void
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
      onClick={() => onClick(product)}
    >
      <div className="relative h-48 w-full">
        <Image 
          src={product.image || "/eros-store/placeholder.svg"} 
          alt={product.name} 
          fill 
          priority
          className="object-cover" 
        />
      </div>
      <div className="p-4 bg-[#000000]">
        <h3 className="text-[#FF0B55] font-medium text-lg truncate">{product.name}</h3>
      </div>
    </div>
  )
}
