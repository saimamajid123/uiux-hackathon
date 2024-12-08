const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-2">Comforty</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque nisl eu nunc.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
  
        {/* Support Links */}
        <div>
          <h4 className="text-md font-bold mb-2">Support</h4>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
  
        {/* Newsletter */}
        <div>
          <h4 className="text-md font-bold mb-2">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to get updates on new products and offers.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg mb-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-400">
        <p>&copy; 2024 Comforty. All rights reserved.</p>
      </div>
    </footer>
  );
  
  export default Footer;
  