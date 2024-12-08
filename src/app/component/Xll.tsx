import Footer from "./Boa";
import ProductGrid from "./cat";
import Header from "./navbar";
import Newsletter from "./news";


export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <ProductGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
