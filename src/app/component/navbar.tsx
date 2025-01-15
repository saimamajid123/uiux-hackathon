import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-900">
      {/* Top Bar */}
      <div className="text-center text-sm text-white py-1">
        ✓ Free Shipping On All Orders Over $50
      </div>          
    
          
        

        {/* Contact and Cart */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:block text-gray-600">
            Contact: <span className="font-medium">888-555-0111</span>
          </div>
          <button className="flex items-center bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
            <span className="material-icons">shopping_cart</span>
            <span className="ml-2">Cart</span>
          </button>
        </div>
      </div>
    
  );
};

export default Navbar;
