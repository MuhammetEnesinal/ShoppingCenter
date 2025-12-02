import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />

      <div className="container min-vh-100">{children}</div>

      <Footer />
    </div>
  );
}
