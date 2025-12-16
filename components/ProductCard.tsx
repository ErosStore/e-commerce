"use client"

import type { Product} from "@/types/product"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProductCardProps {
  product: Product
  onClick: (product: Product) => void
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <Card
      className="flex flex-col rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] border-0 p-2 bg-[#000000]"
      onClick={() => onClick(product)}
    >
      <CardContent className="relative h-48 w-full">
        <Image 
          src={product.image || "/e-commerce/placeholder.svg"} 
          alt={product.name} 
          fill 
          priority
          className="object-contain rounded-xl" 
        />
      </CardContent>
      <CardFooter className="p-4 bg-[#000000] flex justify-center items-center">
        <h3 className="text-[#FF0B55] font-medium text-lg truncate">{product.name}</h3>
      </CardFooter>
    </Card>
  )
}
