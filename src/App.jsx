import React from "react";
import { Routes, Route } from "react-router-dom";
import { MenuProvider } from "./context/MenuContext"; // ✅ Must match named export


import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import { CartProvider } from "./context/Cartcontext";
import { SearchProvider } from "./context/SearchContext";
import { AdminProvider } from "./context/AdminContext";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Review from "./Pages/Review";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Cartpage from "./Pages/Cartpage";
import AdminLogin from "./Pages/AdminLogin";
import AdminPage from "./Pages/AdminPage";
import AdminSignup from "./Pages/AdminSignup";
import ChangePassword from "./Pages/ChangePassword";
import ForgotPassword from "./Pages/ForgotPassword";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <AdminProvider>
          <MenuProvider> {/* ✅ Halkan ku dar */}
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/review" element={<Review />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/cartpage" element={<Cartpage />} />

              {/* Admin */}
              <Route path="/adminLogin" element={<AdminLogin />} />
              <Route path="/adminSignUp" element={<AdminSignup />} />
              <Route path="/changePassword" element={<ChangePassword />} />
              <Route path="/ForgotPassword" element={<ForgotPassword />} />
              <Route path="/AdminDashboard" element={<AdminDashboard />} />
              <Route
                path="/adminPage"
                element={
                  <ProtectedRoute>
                    <AdminPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </MenuProvider> {/* ✅ Halkan xidh */}
        </AdminProvider>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
