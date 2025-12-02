import { Link } from "react-router-dom";

export default function ProductCardInfo({ product }) {
  return (
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        {product.title.length > 20
          ? product.title.substring(0, 20) + "..."
          : product.title}
      </h5>

      <p className="card-text fw-bold text-primary">${product.price}</p>

      <Link
        to={`/products/${product.id}`}
        className="btn btn-dark mt-auto w-100"
      >
        İncele
      </Link>
    </div>
  );
}
