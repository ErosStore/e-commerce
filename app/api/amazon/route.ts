import { NextResponse } from 'next/server';
import { createClient } from 'amazon-paapi';

// Configuración del cliente de Amazon PA-API
// Asegúrate de tener estas variables de entorno configuradas en tu archivo .env.local
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
    // Puedes cambiar las palabras clave y otros parámetros según tus necesidades.
    const searchParams = {
      SearchIndex: 'All', // O 'Electronics', 'Books', etc.
      Keywords: 'vibrator massager adult', // Palabras clave de búsqueda
      ItemCount: 10, // Número de productos a devolver (máximo 10 para una sola llamada de ItemSearch)
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
