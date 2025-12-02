import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return (
      <div className="text-center mt-5 text-primary">
        <h2>Ürünler yükleniyor.. ⏳</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h2>Hata: {error}</h2>
      </div>
    );
  }

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const searchMatch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div>
      <h2 className="mb-4"> Ürünler</h2>

      <div className="row mb-4 align-items-center">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="row">
        {filteredProducts.length === 0 ? (
          <div className="col-12 text-center mt-5 text-muted">
            <h3>Aradığınız kriterlere uygun ürün bulunamadı. </h3>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
