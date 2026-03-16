export default function ProductCard({product}:any) {

  return (
    <div className="border rounded p-4 hover:shadow-xl">

      <img
        src={product.image}
        className="h-48 w-full object-cover"
      />

      <h3 className="mt-4 font-semibold">
        {product.name}
      </h3>

      <p className="text-green-700 font-bold">
        ₹{product.price}
      </p>

      <button className="mt-3 bg-green-700 text-white px-4 py-2 rounded">
        Add to Cart
      </button>

    </div>
  )
}