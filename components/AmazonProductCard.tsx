"use client"

import Image from "next/image"
import { Card, CardFooter } from "@/components/ui/card"

// Definir la interfaz para los datos del producto de Amazon
interface AmazonProduct {
  id: string
  name: string
  image: string
  price: string
  currency: string
  affiliateLink: string
}

interface AmazonProductCardProps {
  product: AmazonProduct
}

export default function AmazonProductCard({ product }: AmazonProductCardProps) {
  return (
    <Card
      className="flex flex-col rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] border-0"
      onClick={() => window.open(product.affiliateLink, "_blank")} // Abrir el enlace de afiliado en una nueva pestaña
    >
      <div className="relative h-48 w-full">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          priority
          className="object-contain" 
        />
      </div>
      <CardFooter className="p-4 bg-[#000000] flex flex-col items-start">
        <h3 className="text-[#FF0B55] font-medium text-lg truncate w-full">{product.name}</h3>
        <p className="text-white text-base mt-2">{product.currency} {product.price}</p>
      </CardFooter>
    </Card>
  )
}
