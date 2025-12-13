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
    image: "/hotSale.png?height=300&width=300",
    images: [              // Array de imágenes para el carrusel
      "/1.jpg",
      "/2.jpg",
      "/3.jpg"
    ],
    category: "mujer",
    subcategory: "vibradores",
  }
]