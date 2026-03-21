const products = [
  { id: 1, name: "Aloe Vera", price: 10 },
  { id: 2, name: "Snake Plant", price: 15 },
  { id: 3, name: "Peace Lily", price: 20 },
];

export default function FeaturedProducts() {
  return (
    <section style={{ padding: "40px" }}>
      <h2>Featured Plants 🌱</h2>

      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px"
      }}>
        {products.map((p) => (
          <div key={p.id} style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}