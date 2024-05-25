import Header from "./components/Header";
import Banner from "./components/Banner";
import BuySteps from "./components/BuySteps";
import DiscountProducts from "./components/DiscountProducts";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {

  const [cartItems, setCartItems] = useState(
    typeof window !== "undefined" ? JSON.parse(sessionStorage.getItem("cartitems")) : []
  );
  const [itemsCount, setItemsCount] = useState(
    typeof window !== "undefined" ? sessionStorage.getItem("count") : 0
  );

  const handleCartChange = (citems) => {
    setCartItems(citems);
  };
  
  const handleCartcountChange = (count) => {
    setItemsCount(count);
  };


  return (
    <>
      <div className="w-full min-h-screen h-fit flex justify-center bg-white">
        <div id='page_container' className="w-full max-w-[1800px] flex flex-col items-center">
          <Header c_items={cartItems} c_count={itemsCount} />
          <Banner />
          <BuySteps />
          <DiscountProducts />
          <AboutUs />
          <Products countfn={handleCartcountChange} cartitemsfn={handleCartChange} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
