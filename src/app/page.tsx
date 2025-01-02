import Header from "./components/Header";
import About from "./components/About";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Welcome from "./components/Wellcome";




export default function Home() {
  return (
    <div>
      
      <Header />
      <Welcome />
      <About />
      <Product />
      <Collection />
      <Footer />

    </div>
  );
}
