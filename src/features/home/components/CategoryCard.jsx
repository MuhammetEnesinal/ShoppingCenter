import { Link } from "react-router-dom";

export default function CategoryCard({ title, image }) {
  return (
    <div className="card text-white border-0 shadow h-100 overflow-hidden">
      <img
        src={image}
        className="card-img"
        alt={title}
        style={{
          filter: "brightness(0.6)",
          height: "250px",
          objectFit: "cover",
        }}
      />
      <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
        <h3 className="card-title fw-bold">{title}</h3>
        <Link to="/products" className="btn btn-outline-light mt-2">
          Keşfet
        </Link>
      </div>
    </div>
  );
}
