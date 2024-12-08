const  Hero = () => (
    <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold">Library Stool Chair</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque est in arcu.
        </p>
        <p className="text-2xl font-semibold text-blue-500">$210.00 USD</p>
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src="/chair-featured.png" alt="Library Stool Chair" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
  
  export default Hero;
  