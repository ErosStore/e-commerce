# Eros Store 🛍️

Eros Store es una aplicación de e-commerce moderna y discreta, diseñada para la venta de artículos para adultos. La principal característica de esta plataforma es el enfoque en la **privacidad total del usuario**.

## ✨ Concepto Principal: Privacidad Primero

A diferencia de las tiendas en línea tradicionales, Eros Store elimina la necesidad de registro de usuarios y carritos de compras. Este enfoque garantiza el anonimato y la seguridad de los clientes, ya que no se almacena ningún dato personal en la aplicación.

El proceso de compra es simple y directo:
1.  El usuario explora los productos en el catálogo.
2.  Al elegir un artículo, puede contactar directamente al vendedor a través de **WhatsApp** para finalizar la compra de manera privada.

Siguiendo esta filosofía de simplicidad y cero almacenamiento de datos, **no existe una base de datos ni un panel de administrador**. Todos los productos y sus imágenes se gestionan directamente en el código fuente del proyecto. Esto elimina la necesidad de mantenimiento de bases de datos y asegura que toda la información de la tienda esté contenida dentro del propio repositorio. Para mantener esta organización, las imágenes se estructuran en subcarpetas dentro de `public/` (ej. `public/VibradorElegance/VibradorElegance-1.png`). Al referenciar estas imágenes en el código (especialmente con el componente `<Image>` de Next.js), se debe usar la ruta relativa desde `public/` (ej. `/VibradorElegance/VibradorElegance-1.png`), y Next.js se encargará automáticamente de añadir el `basePath` (`/e-commerce`) cuando sea necesario.

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
