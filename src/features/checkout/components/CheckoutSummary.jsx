import { useCart } from "../../../context/CartContext";

export default function CheckoutSummary() {
  const { cart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="card p-4 shadow-sm bg-light">
      <h4 className="mb-3">Sipariş Özeti</h4>

      <ul className="list-group mb-3">
        {cart.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between lh-sm"
          >
            <div>
              <h6 className="my-0">{item.title.substring(0, 20)}...</h6>
              <small className="text-muted">{item.category}</small>
            </div>
            <span className="text-muted">${item.price}</span>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between align-items-center p-2 border-top border-dark mt-3">
        <span className="h5">Toplam Tutar:</span>
        <span className="h4 fw-bold text-success">${totalPrice}</span>
      </div>
    </div>
  );
}
