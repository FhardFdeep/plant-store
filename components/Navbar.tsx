export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 bg-green-600 text-white">
      <h1 className="text-xl font-bold">🌿 Plant Store</h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/products">Plants</a>
        <a href="/cart">Cart</a>
      </div>
    </nav>
  )
}