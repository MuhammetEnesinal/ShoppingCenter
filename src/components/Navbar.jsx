import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          ShopVite 🛍️
        </Link>

        <div className="navbar-nav flex-row gap-4 align-items-center">
          <Link className="nav-link" to="/">
            Ana Sayfa
          </Link>
          <Link className="nav-link" to="/products">
            Ürünler
          </Link>

          <Link to="/cart" className="btn btn-outline-light position-relative">
            Sepet 🛒
            {cart.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
