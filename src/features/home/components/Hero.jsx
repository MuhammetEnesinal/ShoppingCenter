import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-light p-5 rounded-3 mb-5 text-center shadow-sm">
      <div className="container-fluid py-5">
        <h1 className="display-4 fw-bold text-primary">
          Shopping Center'a Hoş Geldiniz
        </h1>
        <p className="col-md-8 fs-4 mx-auto text-muted">
          En yeni teknoloji ürünleri, sezonun en şık kıyafetleri ve özel
          takılar. Hepsi tek bir adreste, en iyi fiyat garantisiyle.
        </p>
        <Link
          to="/products"
          className="btn btn-primary btn-lg mt-3 px-5 shadow"
        >
          Alışverişe Başla{" "}
        </Link>
      </div>
    </div>
  );
}
