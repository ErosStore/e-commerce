"use client"

export default function Navbar() {
  return (
    <nav className="bg-black py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-center items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.location.reload()
          }}
          className="text-[#FF0B55] text-3xl md:text-4xl font-style-script hover:text-[#FFDEDE] transition-colors duration-300"
        >
          Eros Store
        </a>
      </div>
    </nav>
  )
}
