import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

//  Helper component to hide Navbar on login/register
function Layout({ children, setSearch }) {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar setSearch={setSearch} />}
      {children}
    </>
  );
}

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Layout setSearch={setSearch}>
        <Routes>
          {/*  Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/*  Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home search={search} setSearch={setSearch} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
