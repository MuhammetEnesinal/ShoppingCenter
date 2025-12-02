import { useParams, Link } from "react-router-dom";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import useFetch from "../../../hooks/useFetch";

export default function ProductDetails() {
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return (
      <div className="text-center mt-5 text-primary">
        <h2>Detaylar Yükleniyor... ⏳</h2>
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

  return (
    <div className="container mt-5">
      <Link to="/products" className="btn btn-outline-secondary mb-4">
        Ürünlere dön
      </Link>

      <div className="row">
        <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
          <ProductImage
            image={product.image}
            title={product.title}
            height="400px"
          />
        </div>

        <div className="col-md-6">
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
}
