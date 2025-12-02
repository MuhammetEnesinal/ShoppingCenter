export default function ProductInfo({ product }) {
  return (
    <div>
      <h2 className="fw-bold">{product.title}</h2>

      <span className="badge bg-warning text-dark mb-3 fs-6">
        {product.category.toUpperCase()}
      </span>

      <p className="lead text-muted">{product.description}</p>

      <h3 className="text-primary fw-bold my-4">${product.price}</h3>

      <div className="d-grid gap-2">
        <button className="btn btn-success btn-lg">Sepete Ekle</button>
        <button className="btn btn-dark btn-lg">Hemen Al</button>
      </div>
    </div>
  );
}
