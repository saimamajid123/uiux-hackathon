const categories = [
    {
      name: "Wing Chair",
      image: "/images/wing-chair.jpg", // Replace with your actual image path
      items: "3,500 Products",
    },
    {
      name: "Wooden Chair",
      image: "/images/wooden-chair.jpg",
      items: "7,500 Products",
    },
    {
      name: "Desk Chair",
      image: "/images/desk-chair.jpg",
      items: "5,000 Products",
    },
  ];
  
  export default function TopCategories() {
    return (
      <div className="py-8">
        <h2 className="text-xl font-bold mb-6">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md bg-white"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{category.name}</h3>
                <p className="text-gray-600">{category.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  