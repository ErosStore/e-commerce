"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

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
      className="bg-[#CF0F47] flex flex-col rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] border-0"
      onClick={() => window.open(product.affiliateLink, "_blank")} // Abrir el enlace de afiliado en una nueva pestaña
    >
      <CardContent className="relative h-48 w-full">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          priority
          className="object-contain" 
        />
      </CardContent>
      <CardFooter className="p-4 bg-[#CF0F47] flex items-center justify-center">
        <h3 className="text-[#000000] font-medium text-lg truncate w-full">{product.name}</h3>
        <p className="text-white text-base mt-2">{product.currency} {product.price}</p>
      </CardFooter>
    </Card>
  )
}
