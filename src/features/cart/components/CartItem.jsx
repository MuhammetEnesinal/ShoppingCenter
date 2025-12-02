import { useCart } from "../../../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-3">
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
        />
        <div>
          <h6 className="mb-0">{item.title.substring(0, 30)}...</h6>
          <small className="text-muted">${item.price}</small>
        </div>
      </div>

      <button
        className="btn btn-sm btn-outline-danger"
        onClick={() => removeFromCart(item.id)}
      >
        Sil
      </button>
    </li>
  );
}
