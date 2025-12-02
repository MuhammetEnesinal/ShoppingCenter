export default function Newsletter() {
  return (
    <div className="bg-primary text-white p-5 rounded-3 text-center mb-5">
      <h3>İndirimleri Kaçırma!</h3>
      <p>Haftalık bültenimize abone ol, %20 indirim kuponunu kap.</p>
      <div className="d-flex justify-content-center gap-2 mt-3">
        <input
          type="email"
          className="form-control w-auto"
          placeholder="E-posta adresin"
        />
        <button className="btn btn-dark">Abone Ol</button>
      </div>
    </div>
  );
}
