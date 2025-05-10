import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-8 px-6 border-t border-gray-800 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-[#FF0B55] text-sm">
              © {currentYear} <span className="font-style-script text-base">Eros Store</span>. Todos los derechos
              reservados.
            </p>
            <a
              href="https://armnelljackson.github.io/portfolio/"
              target="_blank"
              className="inline-block border border-[#FF0B55] rounded-xl px-3 py-1 mt-2 text-[#FF0B55] text-sm hover:bg-[#FF0B55] hover:text-black transition-all duration-300"
              rel="noreferrer"
            >
              Creado por: Armnell Gomez
            </a>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-[#FF0B55] hover:text-[#FFDEDE] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-[#FF0B55] hover:text-[#FFDEDE] transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-[#FF0B55] hover:text-[#FFDEDE] transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
