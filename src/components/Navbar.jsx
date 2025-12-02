import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          ShopVite
        </Link>

        <div className="navbar-nav flex-row gap-3">
          <Link className="nav-link" to="/">
            Ana Sayfa
          </Link>
          <Link className="nav-link" to="/products">
            Ürünler
          </Link>
        </div>
      </div>
    </nav>
  );
}
