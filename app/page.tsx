// Este es ahora un Server Component. No más "use client" aquí.
import Navbar from "@/components/Navbar"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import AmazonProductCard from "@/components/AmazonProductCard"
import ProductView from "@/components/ProductView" // Importar el nuevo Client Component
import { sampleProducts } from "@/types/product"

// La interfaz se puede mantener o mover a un archivo de tipos
interface AmazonProduct {
  id: string
  name: string
  image: string
  price: string
  currency: string
  affiliateLink: string
}

// Lógica para obtener los productos de Amazon (se ejecuta en el servidor durante el build)
async function getAmazonProducts() {
  // --- MODO DE PRUEBA CON DATOS SIMULADOS (MOCK) ---
  const mockAmazonProducts: AmazonProduct[] = [
    {
      id: 'B08N5HR31W',
      name: 'Echo Dot (4.ª generación) | Parlante inteligente con reloj y Alexa (MOCK)',
      image: '/e-commerce/placeholder.svg',
      price: '49.99',
      currency: 'USD',
      affiliateLink: '#',
    },
    {
      id: 'B084DWCZ68',
      name: 'Kindle Paperwhite – Ahora con una pantalla de 6.8” (MOCK)',
      image: '/e-commerce/placeholder.svg',
      price: '139.99',
      currency: 'USD',
      affiliateLink: '#',
    },
  ];
  
  // NOTA: Cuando quieras usar la API real, reemplazarías el retorno de arriba
  // con la lógica de llamada a la API que teníamos antes, usando process.env
  // y el cliente de 'amazon-paapi'.
  
  // Por ahora, devolvemos los datos simulados.
  return mockAmazonProducts;
}

export default async function Home() {
  // Obtenemos los datos de Amazon directamente en el servidor.
  const amazonProducts = await getAmazonProducts();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <Banner />
      <main className="flex-grow">
        
        {/* Renderizamos el componente de cliente para toda la lógica interactiva,
            pasando tanto los productos locales como los de Amazon. */}
        <ProductView 
          sampleProducts={sampleProducts}
          amazonProducts={amazonProducts} 
        />

      </main>
      <Footer />
    </div>
  )
}
