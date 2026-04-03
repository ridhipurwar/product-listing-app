import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center">
          Sign in to My Application
        </h2>
        <h3 className="text-center">Low prices High vibes ⚡</h3>
        <p className="text-center text-gray-500 mt-2">
          Welcome back! Please sign in to continue
        </p>

        {/* Google Button (UI only) */}
        {/* <button className="mt-6 w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
          <span className="text-lg">🌐</span>
          Continue with Google
        </button> */}

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-1" />
          {/* <span className="mx-3 text-gray-400 text-sm">or</span> */}
          <hr className="flex-1" />
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-lg hover:opacity-90">
            Sign In →
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-red-600 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
