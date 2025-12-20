// Este es ahora un Server Component. No más "use client" aquí.
import Navbar from "@/components/Navbar"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import AmazonProductCard from "@/components/AmazonProductCard"
import ProductView from "@/components/ProductView" // Importar el nuevo Client Component
import { sampleProducts } from "@/types/product"
import { amazonProducts as mockAmazonProducts } from "@/types/amazon_product"

// Lógica para obtener los productos de Amazon (se ejecuta en el servidor durante el build)
async function getAmazonProducts() {
  // Ahora simplemente devolvemos los datos importados.
  return mockAmazonProducts
}

export default async function Home() {
  // Obtenemos los datos de Amazon directamente en el servidor.
  const amazonProducts = await getAmazonProducts()

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
