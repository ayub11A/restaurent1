import React from "react";
import { Routes, Route } from "react-router-dom";

// Contexts
import { SearchProvider } from "./context/SearchContext";
import { MenuProvider } from "./context/MenuContext";
import { CartProvider } from "./context/Cartcontext";
import { OrderProvider } from "./context/OrderContext";
import { AdminProvider } from "./context/AdminContext";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Review from "./Pages/Review";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Cartpage from "./Pages/Cartpage";

import AdminLogin from "./Pages/AdminLogin";
import SignupPage from "./Pages/SignupPage";
import AdminSignup from "./components/AdminSignup";

// Admin Layout
import AdminLayout from "./Pages/AdminLayout";
import AdminDashboard from "./Pages/AdminDashboard";
import ManageAdmins from "./components/ManageAdmins";
import Orders from "./Pages/Orders";

function App() {
return ( <SearchProvider> <MenuProvider> <CartProvider> <OrderProvider> <AdminProvider>

```
          <Header />

          <Routes>

            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/review" element={<Review />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cartpage" element={<Cartpage />} />

            {/* Auth */}
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/adminsignup" element={<AdminSignup />} />

            {/* Admin Layout */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="admins" element={<ManageAdmins />} />
              <Route path="orders" element={<Orders />} />
            </Route>

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
