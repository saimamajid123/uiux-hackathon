const Cart = () => {
    const cartItems = [
      {
        id: 1,
        name: "Library Stool Chair",
        price: 210,
        image: "/chair1.png",
        quantity: 1,
      },
      {
        id: 2,
        name: "Library Stool Chair",
        price: 329,
        image: "/chair2.png",
        quantity: 1,
      },
    ];
  
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-lg font-bold">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>
  
          {/* Order Summary */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button className="bg-blue-500 text-white py-3 px-6 w-full rounded-lg hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Cart;
  