import { useNavigate } from "react-router-dom";

export default function CartSummary({ totalPrice }) {
  const navigate = useNavigate();

  return (
    <div className="card p-3 shadow-sm">
      <h4>Sipariş Özeti</h4>
      <hr />
      <div className="d-flex justify-content-between mb-3">
        <span>Toplam:</span>
        <span className="fw-bold fs-5">${totalPrice}</span>
      </div>
      <button
        className="btn btn-success w-100"
        onClick={() => navigate("/checkout")}
      >
        Sepeti Onayla
      </button>
    </div>
  );
}
