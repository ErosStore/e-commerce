"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { AmazonProduct } from "@/types/amazon_product"

interface AmazonProductCardProps {
  product: AmazonProduct
}

export default function AmazonProductCard({ product }: AmazonProductCardProps) {
  const handleClick = () => {
    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card
      className="relative flex flex-col rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] border-0 shadow-md"
      style={{
        backgroundImage: `url(${product.image || "/e-commerce/placeholder.svg"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '320px'
      }}
      onClick={handleClick}
    >
      {/* Sección superior - ocupa todo el espacio */}
      <CardContent 
        className="relative w-full flex-1"
      >
      </CardContent>
      
      {/* Footer como overlay en la parte inferior */}
      <CardFooter className="absolute -bottom-2 left-0 right-0 p-2 bg-[#CF0F47] flex justify-center items-center min-h-[60px] rounded-t-xl">
        <h3 className="text-[#000000] font-medium text-lg text-center">{product.name}</h3>
      </CardFooter>
    </Card>
  )
}
