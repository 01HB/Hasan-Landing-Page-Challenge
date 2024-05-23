import Header from "./components/Header";
import Banner from "./components/Banner";
import BuySteps from "./components/BuySteps";
import DiscountProducts from "./components/DiscountProducts";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <div className="w-full min-h-screen h-fit flex justify-center bg-white">
        <div id='page_container' className="w-full max-w-[1800px] flex flex-col items-center">
          <Header />
          <Banner />
          <BuySteps />
          <DiscountProducts />
          <AboutUs />
          <Products />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
