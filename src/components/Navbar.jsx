import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar({ setSearch }) {
  const { cart } = useContext(CartContext);

  return (
    <div className="w-full">
      {/* Top Navbar */}
      <div className="bg-[#131921] text-white flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-1 cursor-pointer hover:border border-white px-2 py-1">
            <img src={logo} alt="logo" className="w-20 object-contain" />
            <span className="text-red-400 font-bold text-lg">
              Low prices High vibes ⚡
            </span>
          </div>
        </Link>

        {/* 🔍 Search */}
        <div className="flex w-1/2">
          <input
            type="text"
            placeholder="What’s the vibe today? Type it… we’ll find it ✨"
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 text-black rounded-l-md outline-none"
          />
          <button className="bg-red-400 px-4 rounded-r-md">🔍</button>
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer hover:border border-white px-2 py-1">
          🛒
          <span className="absolute -top-2 -right-3 bg-red-400 text-black text-xs px-2 rounded-full">
            {cart.length}
          </span>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="bg-[#232f3e] text-white px-6 py-2 flex gap-6 text-sm">
        <Link to="/">
          <span className="hover:underline cursor-pointer">All</span>
        </Link>

        <span className="hover:underline cursor-pointer">Today's Deals</span>
        <span className="hover:underline cursor-pointer">Electronics</span>
        <span className="hover:underline cursor-pointer">Fashion</span>
      </div>
    </div>
  );
}

export default Navbar;
