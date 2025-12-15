export interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  images?: string[] // Array opcional de imágenes para el carrusel
  category: string
  subcategory: string
}

// Datos de muestra para los productos
export const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Vibrador Elegance",
    price: 100,
    description:
      "Vibrador de lujo con 10 modos de vibración diferentes. Fabricado con silicona médica de alta calidad, suave al tacto y segura para el cuerpo. Recargable y resistente al agua para mayor versatilidad.",
    image: "/e-commerce/VibradorElegancehotSale.png?height=300&width=300",
    images: [              // Array de imágenes para el carrusel
      "/e-commerce/VibradorElegance-1.png?height=300&width=300",
      "/e-commerce/VibradorElegance-2.png?height=300&width=300",
      "/e-commerce/VibradorElegance-3.png?height=300&width=300",
      "/e-commerce/VibradorElegance-4.png?height=300&width=300",
      "/e-commerce/VibradorElegance-5.png?height=300&width=300",
      "/e-commerce/VibradorElegance-6.png?height=300&width=300",
      "/e-commerce/VibradorElegance-7.png?height=300&width=300",
      "/e-commerce/VibradorElegance-8.png?height=300&width=300",
      "/e-commerce/VibradorElegance-9.png?height=300&width=300",
      "/e-commerce/VibradorElegance-10.png?height=300&width=300"
    ],
    category: "mujer",
    subcategory: "vibradores",
  }
]