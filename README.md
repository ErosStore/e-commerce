# Eros Store 🛍️

Eros Store es una aplicación de e-commerce moderna y discreta, diseñada para la venta de artículos para adultos. La principal característica de esta plataforma es el enfoque en la **privacidad total del usuario**.

## ✨ Concepto Principal: Privacidad Primero

A diferencia de las tiendas en línea tradicionales, Eros Store elimina la necesidad de registro de usuarios y carritos de compras. Este enfoque garantiza el anonimato y la seguridad de los clientes, ya que no se almacena ningún dato personal en la aplicación.

El proceso de compra es simple y directo:
1.  El usuario explora los productos en el catálogo.
2.  Al elegir un artículo, puede contactar directamente al vendedor a través de **WhatsApp** para finalizar la compra de manera privada.

Siguiendo esta filosofía de simplicidad y cero almacenamiento de datos, **no existe una base de datos ni un panel de administrador**. Todos los productos y sus imágenes se gestionan directamente en el código fuente del proyecto. Esto elimina la necesidad de mantenimiento de bases de datos y asegura que toda la información de la tienda esté contenida dentro del propio repositorio. Para mantener esta organización, las imágenes se estructuran en subcarpetas dentro de `public/` (ej. `public/VibradorElegance/VibradorElegance-1.png`).

**Importante:** Debido a la configuración de exportación estática (`output: 'export'`), es **necesario incluir manualmente el prefijo del `basePath`** en las rutas de las imágenes que se definen en el código. Por ejemplo, la ruta para una imagen debe ser `/e-commerce/VibradorElegance/VibradorElegance-1.png`.

## 🚀 Stack Tecnológico

Este proyecto está construido con un stack de tecnologías moderno, enfocado en el rendimiento y la experiencia de usuario:

-   **Framework:** [Next.js](https://nextjs.org/) (React)
-   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
-   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
-   **Componentes:** [Shadcn UI](https://ui.shadcn.com/)

## 🛠️ Cómo Empezar

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/ErosStore/e-commerce.git
    cd eros-store
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

Abre [http://localhost:3000/e-commerce](http://localhost:3000/e-commerce) en tu navegador para ver la aplicación en funcionamiento.

**Nota:** Se utiliza la ruta `/e-commerce` debido a la configuración `basePath` en `next.config.mjs`, necesaria para el despliegue en GitHub Pages. Esto afecta tanto al entorno de desarrollo local como al de producción.

## 🌐 Consideraciones de Despliegue en GitHub Pages

Este proyecto está configurado para ser desplegado en **GitHub Pages**. Debido a la forma en que GitHub Pages maneja las rutas y la configuración de Next.js para builds estáticas (`output: 'export'`), es necesario tener en cuenta lo siguiente:

-   **Prefijo de Rutas para Imágenes:** Para que las imágenes y otros activos estáticos se muestren correctamente en producción, se ha configurado un prefijo de ruta base en el archivo `next.config.mjs`. Esto asegura que Next.js genere las URLs de los activos con la ruta correcta (`/<nombre-del-repositorio>/...`) que requiere GitHub Pages.
-   **Configuración en `next.config.mjs`:** Es crucial que la configuración `basePath` y `assetPrefix` en `next.config.mjs` refleje el nombre del repositorio de GitHub Pages donde se aloja el proyecto.

## 📂 Estructura de Carpetas

El proyecto sigue una estructura organizada para facilitar la mantenibilidad:

```
eros-store/
├── app/            # Rutas, páginas y layouts principales (App Router)
├── components/     # Componentes de React reutilizables (UI y de negocio)
├── public/         # Archivos estáticos (imágenes, fuentes)
├── lib/            # Funciones de utilidad y helpers
└── types/          # Definiciones de tipos de TypeScript
```

## 🤝 Integración de Marketing de Afiliados de Amazon

Esta sección detalla la implementación de productos de Amazon en la tienda a través de la API de Publicidad de Productos (PA-API) de Amazon, permitiendo el marketing de afiliados de forma segura y eficiente.

### ⚙️ Cómo Funciona la Integración

La integración sigue una arquitectura segura para proteger tus credenciales de la API de Amazon:

1.  **Frontend (Componentes de React):** Tu aplicación web solicita productos de Amazon a tu propio backend.
2.  **API Route en Next.js (`/api/amazon`):** Esta ruta actúa como intermediario. Recibe la solicitud del frontend, utiliza tus credenciales secretas para llamar a la PA-API de Amazon, procesa la respuesta y envía los datos relevantes de vuelta al frontend. Esto asegura que tus credenciales de Amazon nunca se expongan al lado del cliente.
3.  **Amazon Product Advertising API (PA-API):** La API de Amazon que proporciona datos de productos en tiempo real, incluyendo imágenes, precios y enlaces de afiliado.

### 🚀 Configuración y Uso

Para activar y utilizar la integración de Amazon, sigue estos pasos:

#### 1. Obtener Credenciales de la API de Amazon

Antes de nada, necesitas una cuenta activa en el programa [Amazon Associates](https://affiliate-program.amazon.com/). Una vez que tu cuenta esté aprobada y cumpla con los requisitos de actividad (Amazon suele requerir algunas ventas calificadas en un periodo para otorgar acceso completo a la PA-API), podrás generar tus credenciales:

*   **Access Key (Clave de Acceso)**
*   **Secret Key (Clave Secreta)**
*   **Partner Tag (Etiqueta de Asociado):** Tu ID de afiliado (ej. `tu-id-20`).

Puedes encontrar estas credenciales en el panel de Amazon Associates, generalmente bajo la sección de "Herramientas" -> "Product Advertising API".

#### 2. Configurar Variables de Entorno

Para proteger tus credenciales, deben almacenarse como variables de entorno:

*   **Crea un archivo `.env.local`** en la raíz de tu proyecto (si no existe ya).
*   **Copia el contenido de `.env.local.example`** a tu nuevo archivo `.env.local`.
*   **Rellena tus credenciales** con los valores obtenidos de Amazon:

    ```
    # Credenciales de la API de Amazon
    AMAZON_ACCESS_KEY="TU_ACCESS_KEY_VA_AQUÍ"
    AMAZON_SECRET_KEY="TU_SECRET_KEY_VA_AQUÍ"

    # Tu etiqueta de afiliado de Amazon
    AMAZON_ASSOCIATE_TAG="TU_ETIQUETA_DE_AFILIADO-20"
    ```
*   **¡Importante!** Nunca compartas tu archivo `.env.local` ni lo subas a un repositorio de Git. Este archivo ya está excluido por `.gitignore`.

#### 3. Componentes y Visualización

*   **`components/AmazonProductCard.tsx`:** Este es el componente que se encarga de mostrar un producto individual de Amazon. Recibe los datos del producto (imagen, nombre, precio, enlace de afiliado) y los renderiza en un formato de tarjeta. Al hacer clic, redirige al enlace de afiliado de Amazon.
*   **`app/page.tsx`:** La página principal (`/`) de la aplicación ahora incluye una sección dedicada a "Productos de Amazon". Este componente realiza una llamada `fetch` a tu API Route (`/api/amazon`) para obtener los productos y los muestra utilizando `AmazonProductCard`.

#### 4. La API Route (`app/api/amazon/route.ts`)

Este archivo es el corazón de la integración. Está configurado para operar en dos modos:

*   **Modo de Prueba (Activo por defecto):** Por defecto, la ruta API devuelve un conjunto de productos simulados (mock data). Esto te permite probar la visualización y el funcionamiento del frontend sin necesidad de tener credenciales de Amazon válidas configuradas o acceso completo a la PA-API.
*   **Modo Real (Comentado):** El código para interactuar con la API real de Amazon PA-API (utilizando la librería `amazon-paapi`) está presente en el archivo, pero comentado.

**Para cambiar al Modo Real:**

1.  **Abre el archivo `app/api/amazon/route.ts`.**
2.  **Comenta el bloque** que devuelve `mockAmazonProducts`.
3.  **Descomenta el bloque de código** que se encarga de llamar a `createClient` y `client.searchItems`.
4.  **Ajusta la región y el host** del cliente de Amazon (`host` y `region` en `createClient`) según el dominio de Amazon que desees usar (ej. `webservices.amazon.es` y `es` para España, `webservices.amazon.com.mx` y `mx` para México, etc.).
5.  **Modifica las `Keywords`** en `searchParams` para buscar los productos deseados.
