export default function Categories() {

  const categories = [
    "Indoor Plants",
    "Outdoor Plants",
    "Seeds",
    "Pots & Planters"
  ]

  return (
    <section className="p-12">

      <h2 className="text-3xl font-bold mb-8 text-center">
        Shop By Category
      </h2>

      <div className="grid grid-cols-4 gap-6">

        {categories.map((c,i)=>(
          <div
            key={i}
            className="border p-10 text-center hover:shadow-lg"
          >
            🌱
            <h3 className="mt-4 font-semibold">{c}</h3>
          </div>
        ))}

      </div>

    </section>
  )
}