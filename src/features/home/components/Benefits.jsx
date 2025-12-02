export default function Benefits() {
  const benefits = [
    {
      icon: "🚚",
      title: "Hızlı Teslimat",
      desc: "Siparişleriniz 24 saat içinde kargoda.",
    },
    {
      icon: "🛡️",
      title: "Güvenli Ödeme",
      desc: "256-bit SSL sertifikası ile koruma.",
    },
    {
      icon: "↩️",
      title: "Kolay İade",
      desc: "14 gün içinde koşulsuz iade hakkı.",
    },
  ];

  return (
    <div className="row text-center mb-5">
      {benefits.map((item, index) => (
        <div key={index} className="col-md-4 mb-3">
          <div className="card h-100 border-0 shadow-sm p-4">
            <div className="display-4 mb-3">{item.icon}</div>
            <h3 className="h5">{item.title}</h3>
            <p className="text-muted">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
