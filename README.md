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

Esta sección detalla la implementación de productos de Amazon en la tienda a través de la API de Publicidad de Productos (PA-API) de Amazon. La arquitectura está diseñada específicamente para ser compatible con un despliegue estático en **GitHub Pages**.

### ⚙️ Cómo Funciona la Integración: Arquitectura Estática

Debido a que el proyecto está configurado para una exportación estática (`output: 'export'`), no es posible utilizar rutas de API dinámicas que requieran un servidor. En su lugar, se utiliza el poder de los **React Server Components** de Next.js para obtener los datos durante el proceso de `build`.

1.  **`app/page.tsx` (Server Component):** La página principal ahora es un componente de servidor asíncrono. Durante el `build`, ejecuta una función (`getAmazonProducts`) que llama directamente a la API de Amazon de forma segura (usando las credenciales de las variables de entorno). El resultado de esta llamada se "hornea" en el archivo HTML final.
2.  **`components/ProductView.tsx` (Client Component):** Este componente recibe tanto los productos locales como los productos de Amazon (obtenidos por `app/page.tsx`) como propiedades. Se encarga de toda la lógica interactiva del lado del cliente, como los filtros y la apertura de modales, y de renderizar la parrilla unificada de productos.
3.  **Seguridad:** Las credenciales de la API de Amazon se mantienen seguras, ya que solo se accede a ellas dentro del Server Component en el entorno del servidor durante el `build`. **Nunca se exponen al navegador del cliente.**

Este enfoque garantiza un sitio 100% estático y rápido, compatible con GitHub Pages, aunque con una desventaja: los datos de los productos de Amazon (precios, stock) solo se actualizan cuando el sitio se vuelve a construir y desplegar.

### 🚀 Configuración y Uso

Para activar y utilizar la integración de Amazon, sigue estos pasos:

#### 1. Obtener Credenciales de la API de Amazon

Necesitas una cuenta activa en el programa [Amazon Associates](https://affiliate-program.amazon.com/) con acceso a la PA-API para generar tus credenciales:

*   **Access Key (Clave de Acceso)**
*   **Secret Key (Clave Secreta)**
*   **Partner Tag (Etiqueta de Asociado)**

#### 2. Configurar Variables de Entorno

*   Crea un archivo `.env.local` en la raíz del proyecto.
*   Copia el contenido de `.env.local.example` y rellena tus credenciales reales.
*   **¡Importante!** Nunca subas tu archivo `.env.local` a Git.

#### 3. Modificar el Modo de Obtención de Datos en `app/page.tsx`

El archivo `app/page.tsx` contiene la lógica para obtener los productos. Puedes alternar entre datos de prueba (mock) y datos reales:

*   **Modo de Prueba (Activo por defecto):** La función `getAmazonProducts` dentro de `app/page.tsx` devuelve un array de productos simulados. Esto te permite trabajar en el frontend sin necesidad de credenciales válidas.
*   **Modo Real:** Para conectar con la API de Amazon, debes modificar la función `getAmazonProducts` en `app/page.tsx`. La lógica para llamar a la API real utilizando el paquete `amazon-paapi` está comentada dentro del archivo. Simplemente comenta el retorno de los datos `mock` y descomenta el bloque de código de la API real.

#### 4. Componentes de Visualización

*   **`components/ProductView.tsx`:** Es el componente principal que gestiona la visualización de los productos. Recibe la lista de productos locales y de Amazon y los muestra en una parrilla unificada.
*   **`components/AmazonProductCard.tsx`:** Muestra un único producto de Amazon.
*   **`components/ProductCard.tsx`:** Muestra un único producto local.

## 🎨 Diseño de la Aplicación

El diseño de Eros Store busca ser **moderno, elegante y discreto**, utilizando una paleta de colores oscuros con acentos vibrantes y una tipografía cuidadosamente seleccionada para crear una experiencia de usuario atractiva y fácil de leer.

### Paleta de Colores

La aplicación utiliza un tema oscuro como base para transmitir una sensación de intimidad y sofisticación.

-   **Fondo Principal (`#000000` - Negro):** Utilizado como el color de fondo general de la aplicación, proporcionando un lienzo limpio y sin distracciones.
-   **Texto Principal (`#FFFFFF` - Blanco):** Asegura la máxima legibilidad sobre el fondo oscuro.
-   **Acento Primario (`#CF0F47`):** Un rosa intenso y vibrante que se utiliza para elementos clave como los títulos principales (`h2`) y componentes interactivos como la barra de scroll, capturando la atención del usuario.
-   **Acento Secundario/Hover (`#FF0B55`):** Un fucsia aún más brillante, definido como `primary.light`, que se usa para estados `hover` y otros efectos visuales, añadiendo dinamismo a la interfaz.
-   **Fondo Secundario (`#1a1a1a`):** Un gris oscuro que se emplea en elementos como el fondo de la barra de scroll (`track`), creando una separación sutil con el fondo principal.

### Tipografía

Se utiliza una combinación de tres fuentes de Google Fonts para establecer una jerarquía visual clara y aportar personalidad a la marca.

-   **Playfair Display (Serif):** Asignada a la variable `font-serif`, se usa para los títulos principales y el logo. Aporta un toque de elegancia y clasicismo.
-   **Inter (Sans-serif):** Es la fuente principal para el cuerpo del texto (`font-sans`). Su diseño limpio y moderno garantiza una excelente legibilidad en párrafos y descripciones.
-   **Style Script (Cursive):** Utilizada a través de la variable `font-style-script`, esta fuente cursiva le da un toque personal y estilizado al nombre de "Eros Store" en el banner principal.

## ⚡ Rendimiento y Optimizaciones

### Carga de Imágenes (Lazy Loading)

Este proyecto está configurado para una exportación estática (`output: 'export'`), lo que deshabilita el servidor de optimización de imágenes integrado de Next.js. Por este motivo, en `next.config.mjs` se establece la opción `images: { unoptimized: true }`.

A pesar de esto, se aprovecha una característica clave del componente `<Image>` de Next.js para mejorar el rendimiento: **Lazy Loading** (carga perezosa).

Para las listas de productos (especialmente los que cargan imágenes desde URLs externas de Amazon), se ha omitido intencionadamente la propiedad `priority`. Esto permite que Next.js cargue las imágenes únicamente cuando el usuario está a punto de verlas al hacer scroll, en lugar de cargar todas las imágenes de la página de una sola vez.

Esta técnica **mejora significativamente el tiempo de carga inicial** y la experiencia del usuario, evitando que el navegador se sature al intentar descargar docenas de imágenes simultáneamente.
