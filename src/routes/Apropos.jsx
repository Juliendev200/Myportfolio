import AproposCollapse from "../components/AproposCollapse";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Mycard from "../components/Mycard";

export default function Apropos() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <h2>Me, myself, and I</h2>
        <AproposCollapse />
        <Mycard />
      </div>
      <Footer />
    </>
  );
}
