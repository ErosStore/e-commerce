import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Style_Script } from "next/font/google"
import "./globals.css"

// Fuente para títulos y logo
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

// Fuente para texto general
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Fuente Style Script para "Eros Store"
const styleScript = Style_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-style-script",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Eros Store | Tu Sex-Shop online",
  description:
    "Descubre nuestros productos para adultos de alta calidad. Lencería, juguetes y accesorios para tus fantasías más íntimas.",
  generator: 'v0.dev',
  icons: {
    icon: '/e-commerce/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} ${styleScript.variable} font-sans`}>{children}</body>
    </html>
  )
}
