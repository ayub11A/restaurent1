import React from "react";
import { Routes, Route } from "react-router-dom";

// ✅ Context Providers
import { SearchProvider } from "./context/SearchContext";
import { MenuProvider } from "./context/MenuContext";
import { CartProvider } from "./context/Cartcontext";
import { OrderProvider } from "./context/OrderContext";
import { AdminProvider } from "./context/AdminContext";

// ✅ Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// ✅ Pages
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
      <MenuProvider>
        <CartProvider>
          <OrderProvider>
            <AdminProvider>
              <Header />

              <Routes>
                {/* 🏠 Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/review" element={<Review />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/cartpage" element={<Cartpage />} />

                {/* 🛠️ Admin Routes */}
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/adminsignup" element={<AdminSignup />} />
                <Route path="/changepassword" element={<ChangePassword />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/admindashboard" element={<AdminDashboard />} />

                {/* 🔐 Protected Admin Page */}
                <Route
                  path="/adminpage"
                  element={
                    <ProtectedRoute>
                      <AdminPage />
                    </ProtectedRoute>
                  }
                />
              </Routes>

              <Footer />
            </AdminProvider>
          </OrderProvider>
        </CartProvider>
      </MenuProvider>
    </SearchProvider>
  );
}

export default App;
