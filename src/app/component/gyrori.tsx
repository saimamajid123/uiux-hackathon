export default function Hero() {
    return (
      <section className="bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Your Website
          </h1>
          <p className="text-lg mb-8">
            A modern and responsive design with Next.js and Tailwind CSS.
          </p>
          <div>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    );
  }
  