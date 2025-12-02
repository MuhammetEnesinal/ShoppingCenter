import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../../context/CartContext";
import PaymentForm from "../components/PaymentForm";
import CheckoutSummary from "../components/CheckoutSummary";

export default function CheckoutPage() {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = (cardData) => {
    console.log("Ödeme bilgileri alındı:", cardData);

    clearCart();

    toast.success("Siparişiniz başarıyla alındı!");

    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Ödeme Ekranı </h2>

      <div className="row">
        <div className="col-md-7 order-md-1">
          <PaymentForm onSubmit={handlePayment} />
        </div>

        <div className="col-md-5 order-md-2 mb-4">
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}
