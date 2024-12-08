const FeaturedProducts = () => {
    const products = [
      { id: 1, name: "Library Stool Chair", price: 120, image: "/chair1.png" },
      { id: 2, name: "Library Stool Chair", price: 140, image: "/chair2.png" },
      { id: 3, name: "Library Stool Chair", price: 160, image: "/chair3.png" },
      { id: 4, name: "Library Stool Chair", price: 200, image: "/chair4.png" },
    ];
  
    return (
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 text-center shadow-sm hover:shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-blue-500 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedProducts;
  