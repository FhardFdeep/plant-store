import ProductCard from "./ProductCard"

const products = [
  {
    name:"Snake Plant",
    price:399,
    image:"https://images.unsplash.com/photo-1592150621744-aca64f48394a"
  },
  {
    name:"Money Plant",
    price:299,
    image:"https://images.unsplash.com/photo-1598880940942-bfa44f3e7c61"
  },
  {
    name:"Aloe Vera",
    price:249,
    image:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  }
]

export default function FeaturedProducts(){

  return(
    <section className="p-12">

      <h2 className="text-3xl font-bold text-center mb-10">
        Best Selling Plants
      </h2>

      <div className="grid grid-cols-3 gap-8">

        {products.map((p,i)=>(
          <ProductCard key={i} product={p}/>
        ))}

      </div>

    </section>
  )
}