import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // check duplicate email
      const checkRes = await fetch(
        "https://69d0006da4647a9fc6764075.mockapi.io/users",
      );
      const users = await checkRes.json();

      const exists = users.find((u) => u.email === form.email);

      if (exists) {
        alert("User already exists!");
        return;
      }

      // POST new user
      const res = await fetch(
        "https://69d0006da4647a9fc6764075.mockapi.io/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      if (!res.ok) throw new Error("Failed");

      alert("Registered Successfully!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration error");
    }
  };

  // https://69d0006da4647a9fc6764075.mockapi.io/users

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center">Create your account</h2>
        <h3 className="text-center">Low prices High vibes ⚡</h3>
        <p className="text-center text-gray-500 mt-2">
          Welcome! Please fill in the details to get started.
        </p>

        {/* Google Button */}
        {/* <button className="mt-6 w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
          <span>🌐</span>
          Continue with Google
        </button> */}

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-1" />
          {/* <span className="mx-3 text-gray-400 text-sm">or</span> */}
          <hr className="flex-1" />
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* First & Last Name */}
          <div className="flex gap-4">
            <input
              placeholder="First name"
              className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />

            <input
              placeholder="Last name"
              className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full mt-1 p-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />

              {/* Eye Icon */}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
              >
                👁️
              </span>
            </div>
          </div>

          {/* Button */}
          <button className="w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-lg hover:opacity-90">
            Continue →
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-red-600 cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
