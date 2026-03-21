type Product = {
  name: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "16px",
      width: "220px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />

      <h2 style={{ margin: "10px 0" }}>
        {product.name}
      </h2>

      <p style={{ fontWeight: "bold", color: "green" }}>
        ₹{product.price}
      </p>

      <button
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}