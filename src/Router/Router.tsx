import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Headphones from "../Pages/Headphones";
import Speakers from "../Pages/Speakers";
import Earphones from "../Pages/Earphones";
import Checkout from "../Pages/Checkout";
import ProductPage from "../Pages/ProductPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="earphones" element={<Earphones />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:slug" element={<ProductPage />} />
    </Routes>
  );
}

export default Router;