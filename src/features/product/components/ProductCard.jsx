import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";
import ProductCardInfo from "./ProductCardInfot";

export default function ProductCard({ product }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="p-3">
          <ProductImage
            image={product.image}
            title={product.title}
            height="200px"
            className="card-img-top"
          />
        </div>
        <ProductCardInfo product={product} />
      </div>
    </div>
  );
}
