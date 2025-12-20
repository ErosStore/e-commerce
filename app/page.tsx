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
  // price: string
  // currency: string
  affiliateLink: string
}

// Lógica para obtener los productos de Amazon (se ejecuta en el servidor durante el build)
async function getAmazonProducts() {
  // --- MODO DE PRUEBA CON DATOS SIMULADOS (MOCK) ---
  const mockAmazonProducts: AmazonProduct[] = [
    {
      id: '1',
      name: 'MOOLIGIRL',
      image: '/e-commerce/MOOLIGIRL/MOOLIGIRL-1.jpg',
      // price: '49.99',
      // currency: 'USD',
      affiliateLink: 'https://amzn.to/4aYmiNB',
    },
    {
      id: '2',
      name: 'EINSEO',
      image: 'https://m.media-amazon.com/images/I/71Yl19eIJNL._AC_SL1500_.jpg',
      // price: '139.99',
      // currency: 'USD',
      affiliateLink: 'https://amzn.to/4qkl2c3',
    },
    {
      id: '3',
      name: 'Satisfyer Pro 2',
      image: 'https://m.media-amazon.com/images/I/51+FG+FKqML._AC_SX569_.jpg',
      // price: '139.99',
      // currency: 'USD',
      affiliateLink: 'https://amzn.to/458XzT8',
    },
    {
      id: '4',
      name: "Tracy's Dog",
      image: 'https://m.media-amazon.com/images/I/618DGzTs-lL._AC_SX679_.jpg',
      // price: '139.99',
      // currency: 'USD',
      affiliateLink: 'https://amzn.to/49cGDwu',
    },
    {
      id: '5',
      name: 'Anal Plug',
      image: 'https://m.media-amazon.com/images/I/61IXqiIONfL._AC_SL1500_.jpg',
      // price: '139.99',
      // currency: 'USD',
      affiliateLink: 'https://amzn.to/4anCyrm',
    },
    {
      id: '6',
      name: 'LOVENSE',
      image: 'https://m.media-amazon.com/images/I/61oWfEttYEL._AC_SX569_.jpg',
      // price: '139.99',
      // currency: 'USD',
      affiliateLink: 'https://amzn.to/3YCwy6P',
    },
    {
      id: '7',
      name: 'Rose Sex Toy',
      image: 'https://m.media-amazon.com/images/I/71Z3yPFGDHL._AC_SX679_.jpg',
      // price: '139.99',
      // currency: 'USD',
      affiliateLink: 'https://amzn.to/44CvWBR',
    },
    {
      id: '8',
      name: 'BDSM',
      image: 'https://m.media-amazon.com/images/I/616NBgNjDOL._AC_SX679_.jpg',
      // price: '139.99',
      // currency: 'USD',
      affiliateLink: 'https://amzn.to/4p1xRaf',
    },
    {
      id: '9',
      name: 'BULLRING',
      image: 'https://m.media-amazon.com/images/I/81NnhdgZrNL._AC_SX679_.jpg',
      // price: '139.99',
      // currency: 'USD',
      affiliateLink: 'https://amzn.to/48NXDtT',
    },
    {
      id: '10',
      name: 'UTIMI Kit BDSM',
      image: 'https://m.media-amazon.com/images/I/719VLN2NhZL._AC_SX679_.jpg',
      // price: '139.99',
      // currency: 'USD',
      affiliateLink: 'https://amzn.to/4sdiRJm',
    },
    {
      id: '11',
      name: 'Utimi Bondage',
      image: 'https://m.media-amazon.com/images/I/71qwBD6gjKL._AC_SX679_.jpg',
      // price: '139.99',
      // currency: 'USD',
      affiliateLink: 'https://amzn.to/4s70KEL',
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
