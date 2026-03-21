import ProductCard from "./ProductCard";

const products = [
  {
    name: "Aloe Vera",
    price: 299,
    image: "/plants/aloe.jpg",
  },
  {
    name: "Snake Plant",
    price: 399,
    image: "/plants/snake.jpg",
  },
  {
    name: "Money Plant",
    price: 199,
    image: "/plants/money.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}