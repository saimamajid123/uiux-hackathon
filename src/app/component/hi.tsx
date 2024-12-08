// components/FeaturedProducts.js
export default function Featuredproducts() {
  const products = [
    {
      id: 1,
      label: "New",
      name: "Library Smart Chair",
      price: "$120",
      image: "/images/chair1.jpg",
    },
    {
      id: 2,
      label: "Sale",
      name: "Library Smart Chair",
      price: "$110",
      image: "/images/chair2.jpg",
    },
    {
      id: 3,
      name: "Library Smart Chair",
      price: "$90",
      image: "/images/chair3.jpg",
    },
    {
      id: 4,
      name: "Library Smart Chair",
      price: "$100",
      image: "/images/chair4.jpg",
    },
  ];

  return (
    <div className="py-10 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden group"  
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              {product.label && (
                <span
                  className={`absolute top-2 left-2 px-3 py-1 text-sm font-medium text-white rounded-full ${
                    product.label === "Sale" ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {product.label}
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

