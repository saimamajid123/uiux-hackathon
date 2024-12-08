const Header = () => (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <h1 className="text-lg font-bold">Comforty</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Product</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Pages</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="tel:001-888-777" className="text-gray-700 hover:text-blue-500">
            Contact: 001-888-777
          </a>
        </nav>
      </div>
    </header>
  );
  
  export default Header;
  