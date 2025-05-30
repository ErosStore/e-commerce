export interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: string
  subcategory: string
}

// Datos de muestra para los productos
export const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Vibrador Elegance",
    price: 49.99,
    description:
      "Vibrador de lujo con 10 modos de vibración diferentes. Fabricado con silicona médica de alta calidad, suave al tacto y segura para el cuerpo. Recargable mediante USB y resistente al agua para mayor versatilidad.",
    image: "/placeholder.svg?height=300&width=300",
    category: "mujer",
    subcategory: "vibradores",
  },
  {
    id: 2,
    name: "Lencería Midnight",
    price: 39.99,
    description:
      "Conjunto de lencería en encaje negro con detalles en rosa. Incluye sujetador con copa push-up, tanga a juego y ligueros. Disponible en varias tallas para adaptarse perfectamente a tu figura.",
    image: "/placeholder.svg?height=300&width=300",
    category: "mujer",
    subcategory: "lencería",
  },
  {
    id: 3,
    name: "Anillo Vibrador Duo",
    price: 29.99,
    description:
      "Anillo vibrador diseñado para parejas. Proporciona estimulación adicional durante las relaciones. Fabricado con silicona hipoalergénica y con batería recargable de larga duración.",
    image: "/placeholder.svg?height=300&width=300",
    category: "hombre",
    subcategory: "anillos",
  },
  {
    id: 4,
    name: "Kit Bondage Passion",
    price: 59.99,
    description:
      "Kit completo de bondage que incluye esposas, antifaz, látigo suave y cuerda de seda. Perfecto para iniciarse en el mundo del BDSM de forma segura y consensuada.",
    image: "/placeholder.svg?height=300&width=300",
    category: "mujer",
    subcategory: "bondage",
  },
  {
    id: 5,
    name: "Lubricante Sensual",
    price: 14.99,
    description:
      "Lubricante a base de agua con efecto calor. Compatible con todos los juguetes y preservativos. Sin parabenos ni glicerina para evitar irritaciones.",
    image: "/placeholder.svg?height=300&width=300",
    category: "hombre",
    subcategory: "lubricantes",
  },
  {
    id: 6,
    name: "Dildo Realista",
    price: 34.99,
    description:
      "Dildo de aspecto realista fabricado con silicona premium. Textura suave y flexible con base de ventosa para múltiples posiciones. Hipoalergénico y fácil de limpiar.",
    image: "/placeholder.svg?height=300&width=300",
    category: "mujer",
    subcategory: "dildos",
  },
  {
    id: 7,
    name: "Masturbador Masculino",
    price: 45.99,
    description:
      "Masturbador masculino con textura interior estimulante. Diseño discreto y ergonómico para un agarre cómodo. Material suave que imita la sensación real.",
    image: "/placeholder.svg?height=300&width=300",
    category: "hombre",
    subcategory: "masturbadores",
  },
  {
    id: 8,
    name: "Consolador Multifunción",
    price: 69.99,
    description:
      "Consolador con múltiples funciones de vibración y rotación. Control remoto incluido para mayor comodidad. Silicona médica de alta calidad y batería de larga duración.",
    image: "/placeholder.svg?height=300&width=300",
    category: "mujer",
    subcategory: "consoladores",
  },
  {
    id: 9,
    name: "Lencería Masculina",
    price: 24.99,
    description:
      "Conjunto de lencería masculina en tejido elástico y transparente. Diseño atrevido que realza la figura masculina. Cómodo y sensual.",
    image: "/placeholder.svg?height=300&width=300",
    category: "hombre",
    subcategory: "lencería",
  },
  {
    id: 10,
    name: "Aceite de Masaje",
    price: 19.99,
    description:
      "Aceite de masaje con aroma a frutos rojos. Hidrata la piel y proporciona un deslizamiento perfecto. Ingredientes naturales y comestibles.",
    image: "/placeholder.svg?height=300&width=300",
    category: "mujer",
    subcategory: "lubricantes",
  },
]