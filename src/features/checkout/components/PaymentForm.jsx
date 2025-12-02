import { useState } from "react";

export default function PaymentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.cardName || !formData.cardNumber || !formData.cvv) {
      alert("Lütfen kart bilgilerini eksiksiz doldurunuz!");
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="card p-4 shadow-sm mb-4">
      <h4 className="mb-3">Kart Bilgileri 💳</h4>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Kart Sahibi</label>
          <input
            type="text"
            name="cardName"
            className="form-control"
            placeholder="Ad Soyad"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Kart Numarası</label>
          <input
            type="text"
            name="cardNumber"
            className="form-control"
            placeholder="0000 0000 0000 0000"
            maxLength="19"
            onChange={handleChange}
            required
          />
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Son Kullanma Tarihi</label>
            <div className="d-flex gap-2">
              <input
                type="text"
                name="expMonth"
                className="form-control"
                placeholder="Ay"
                maxLength="2"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="expYear"
                className="form-control"
                placeholder="Yıl"
                maxLength="2"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">CVV</label>
            <input
              type="text"
              name="cvv"
              className="form-control"
              placeholder="123"
              maxLength="3"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-success w-100 btn-lg mt-2">
          Ödemeyi Tamamla ve Sipariş Ver
        </button>
      </form>
    </div>
  );
}
