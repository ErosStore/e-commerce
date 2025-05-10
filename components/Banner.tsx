export default function Banner() {
  return (
    <section className="bg-[#CF0F47] py-12 md:py-20 px-6 my-6 mx-6 rounded-xl">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-style-script text-[#FFDEDE] tracking-wide">Eros Store</h1>
          </div>
          <div className="max-w-md">
            <p className="text-xl md:text-2xl text-[#FFDEDE] font-serif italic">Descubre tus fantasías más íntimas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
