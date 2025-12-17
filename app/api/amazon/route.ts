import { NextResponse } from 'next/server';
import { createClient } from 'amazon-paapi';

// --- MODO DE PRUEBA CON DATOS SIMULADOS (MOCK) ---
// Para probar el frontend sin necesidad de credenciales reales de Amazon.
const mockAmazonProducts = [
  {
    id: 'B08N5HR31W',
    name: 'Echo Dot (4.ª generación) | Parlante inteligente con reloj y Alexa (MOCK)',
    image: '/placeholder.svg',
    price: '49.99',
    currency: 'USD',
    affiliateLink: '#',
  },
  {
    id: 'B084DWCZ68',
    name: 'Kindle Paperwhite – Ahora con una pantalla de 6.8” y luz cálida ajustable (MOCK)',
    image: '/placeholder.svg',
    price: '139.99',
    currency: 'USD',
    affiliateLink: '#',
  },
  {
    id: 'B07VGRJDFY',
    name: 'Fire TV Stick 4K, streaming de contenido multimedia (MOCK)',
    image: '/placeholder.svg',
    price: '49.99',
    currency: 'USD',
    affiliateLink: '#',
  },
    {
    id: 'B08N5HR31C',
    name: 'Echo Dot (4.ª generación) | Parlante inteligente con reloj y Alexa (MOCK)',
    image: '/placeholder.svg',
    price: '49.99',
    currency: 'USD',
    affiliateLink: '#',
  },
];

export async function GET() {
  // Devolvemos directamente los datos simulados para la prueba.
  return NextResponse.json(mockAmazonProducts);
}


/*
// --- MODO REAL CON API DE AMAZON ---
// NOTA: Para activar la API real de Amazon, comenta el modo de prueba de arriba
// y descomenta todo este bloque. Asegúrate de que tu archivo .env.local
// esté correctamente configurado con tus credenciales.

// Configuración del cliente de Amazon PA-API
const client = createClient({
  accessKey: process.env.AMAZON_ACCESS_KEY || '',
  secretKey: process.env.AMAZON_SECRET_KEY || '',
  partnerTag: process.env.AMAZON_ASSOCIATE_TAG || '',
  host: 'webservices.amazon.com', // Por ejemplo, para Amazon US. Cambia a 'webservices.amazon.es' para España, 'webservices.amazon.com.mx' para México, etc.
  region: 'us', // Cambia a 'es', 'mx', etc., según el host
});

export async function GET() {
  try {
    // Definir los parámetros de búsqueda.
    const searchParams = {
      SearchIndex: 'All',
      Keywords: 'vibrator massager adult',
      ItemCount: 10,
      Resources: [
        'Images.Primary.Large',
        'ItemInfo.Title',
        'Offers.Listings.Price',
      ],
    };

    const { Items } = await client.searchItems(searchParams);

    if (!Items || Items.length === 0) {
      return NextResponse.json({ message: 'No se encontraron productos de Amazon.' }, { status: 404 });
    }

    const amazonProducts = Items.map((item: any) => ({
      id: item.ASIN,
      name: item.ItemInfo?.Title?.DisplayValue || 'Producto sin título',
      image: item.Images?.Primary?.Large?.URL || '/placeholder.svg',
      price: item.Offers?.Listings?.[0]?.Price?.Amount?.toFixed(2) || 'N/A',
      currency: item.Offers?.Listings?.[0]?.Price?.Currency || '',
      affiliateLink: item.DetailPageURL || '#',
    }));

    return NextResponse.json(amazonProducts);
  } catch (error: any) {
    console.error('Error al llamar a la API de Amazon PA-API:', error);
    return NextResponse.json(
      { message: 'Error al obtener productos de Amazon', error: error.message },
      { status: 500 }
    );
  }
}
*/
