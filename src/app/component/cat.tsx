import ProductCard from "./img";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Chair 1", price: 49, image: "/chair1.png" },
    { id: 2, name: "Chair 2", price: 59, image: "/chair2.png" },
    // Add more products here
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
