import Gallery from "../components/Gallery";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <About />

        <Gallery />
      </div>
      <Footer />
    </>
  );
}
