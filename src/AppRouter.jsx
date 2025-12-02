import { Routes, Route } from "react-router-dom";
import Home from "./features/home/pages/Home";
import ProductList from "./features/product/pages/ProductList";
import ProductDetails from "./features/product/pages/ProductDetails";
import CartPage from "./features/cart/pages/CartPage";
import CheckoutPage from "./features/checkout/pages/CheckoutPage";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<h2>404 - Sayfa Bulunamadı</h2>} />
    </Routes>
  );
}
