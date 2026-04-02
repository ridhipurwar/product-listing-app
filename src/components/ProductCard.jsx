import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (e) => {
    e.stopPropagation();
    setCart([...cart, product]);
    toast.success("Added to cart!");
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white p-4 cursor-pointer hover:shadow-lg transition rounded"
    >
      <img src={product.thumbnail} className="h-40 mx-auto object-contain" />

      <h3 className="text-sm mt-2 line-clamp-2 h-10">{product.title}</h3>

      <div className="text-red-500 text-sm">⭐ {product.rating}</div>

      <p className="text-lg font-bold mt-1">₹{product.price}</p>

      <button
        onClick={addToCart}
        className="mt-2 w-full bg-red-400 hover:bg-red-500 text-black py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
