import { Routes, Route } from "react-router-dom";
import { ProductProvider } from "@/contexts/ProductContext";
import Navbar from "@/components/Navbar";
import LandingPage from "@/pages/LandingPage";
import HomePage from "@/pages/HomePage";
import CheckoutPage from "@/pages/CheckoutPage";
import ProductManagementPage from "@/pages/ProductManagementPage";

function App() {
  return (
    <ProductProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<HomePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route
              path="/manage-products"
              element={<ProductManagementPage />}
            />
          </Routes>
        </main>
      </div>
    </ProductProvider>
  );
}

export default App;
