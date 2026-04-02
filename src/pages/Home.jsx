import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function Home({ search, setSearch }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true); // set error
        setLoading(false); // stop loading
      });
  }, []);

  // FIRST handle loading
  if (loading) return <Loader />;

  // SECOND handle error
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-red-500 text-2xl font-semibold mb-4">
          ❌ Failed to load products
        </h1>
        <button
          onClick={() => window.location.reload()}
          className="bg-yellow-400 px-4 py-2 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  // THEN normal logic
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-[#eaeded] min-h-screen p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filtered.length > 0 ? (
          filtered.map((item) => <ProductCard key={item.id} product={item} />)
        ) : (
          <div className="col-span-full text-center text-gray-600 text-xl mt-10">
            Empty vibes here 👀 check something else
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
