import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2 className="text-center mt-10">Loading...</h2>;

  const addToCart = () => {
    setCart([...cart, product]);
    toast.success("Added to cart!");
  };

  return (
    <div className="bg-[#eaeded] min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 grid md:grid-cols-2 gap-6">
        <img src={product.thumbnail} className="h-72 mx-auto object-contain" />

        <div>
          <h2 className="text-2xl font-bold">{product.title}</h2>

          <p className="text-gray-600 mt-3">{product.description}</p>

          <p className="text-red-500 mt-2">⭐ {product.rating}</p>

          <h3 className="text-3xl font-bold mt-4 text-green-600">
            ₹{product.price}
          </h3>

          <button
            onClick={addToCart}
            className="mt-4 bg-red-400 hover:bg-red-500 px-6 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
