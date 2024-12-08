const Footer = () => (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-lg font-bold">Comforty</h3>
          <p>All rights reserved © 2024.</p>
        </div>
        <div>
          <h4 className="text-md font-bold mb-2">Help & Support</h4>
          <ul>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-bold mb-2">Stay Updated</h4>
          <input type="email" placeholder="Your email" className="p-2 rounded mb-2 w-full" />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  