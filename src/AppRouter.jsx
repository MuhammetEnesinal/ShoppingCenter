import { Routes, Route } from "react-router-dom";
import Home from "./features/home/pages/Home";
import ProductList from "./features/product/pages/ProductList";
import ProductDetails from "./features/product/pages/ProductDetails";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="*" element={<h2>404 - Sayfa Bulunamadı</h2>} />
    </Routes>
  );
}
