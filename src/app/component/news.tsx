const Newsletter = () => (
    <div className="bg-gray-100 p-8 rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="border rounded-lg p-2 w-full mb-4"
      />
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        Subscribe
      </button>
    </div>
  );
  
  export default Newsletter;
  