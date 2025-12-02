import { useCart } from "../../../context/CartContext";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

export default function CartPage() {
  const { cart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Sepetim ({cart.length} Ürün)</h2>

      {cart.length === 0 ? (
        <div className="alert alert-warning text-center">
          Sepetiniz boş. Hemen alışverişe başlayın! 🛍️
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <ul className="list-group">
              {cart.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </ul>
          </div>

          <div className="col-md-4">
            <CartSummary totalPrice={totalPrice} />
          </div>
        </div>
      )}
    </div>
  );
}
