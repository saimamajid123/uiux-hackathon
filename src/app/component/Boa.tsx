// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-4">Comforty</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quod.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Category</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900">Sofa</a></li>
                <li><a href="#" className="hover:text-gray-900">Armchair</a></li>
                <li><a href="#" className="hover:text-gray-900">Desk Chair</a></li>
                <li><a href="#" className="hover:text-gray-900">Dining Chair</a></li>
                <li><a href="#" className="hover:text-gray-900">Park Bench</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900">Help</a></li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Newsletter</h4>
                <form className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="p-2 border rounded-lg w-full"
                  />
                  <button className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-4 text-center text-gray-500 text-sm">
            &copy; 2024. Design inspired by Comforty. Powered by Tailwind CSS.
          </div>
        </div>
      </footer>
    );
  }
  
