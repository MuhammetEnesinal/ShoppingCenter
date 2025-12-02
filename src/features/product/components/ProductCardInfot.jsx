import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

export default function ProductCardInfo({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const handleBuyNow = () => {
    addToCart(product);

    navigate("/checkout");
  };
  return (
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        {product.title.length > 20
          ? product.title.substring(0, 20) + "..."
          : product.title}
      </h5>

      <p className="card-text fw-bold text-primary">${product.price}</p>

      <div className="mt-auto">
        <div className="d-flex gap-2 mb-2">
          <button
            className="btn btn-success flex-grow-1"
            onClick={() => addToCart(product)}
          >
            Sepete Ekle
          </button>
          <button className="btn btn-dark flex-grow-1" onClick={handleBuyNow}>
            Satın Al
          </button>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="btn btn-outline-secondary btn-sm w-100"
        >
          İncele
        </Link>
      </div>
    </div>
  );
}
