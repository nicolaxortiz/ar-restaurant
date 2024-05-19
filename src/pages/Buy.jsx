import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import BuyInfo from "../components/BuyInfo";

function Buy() {
  return (
    <>
      <Header />
      <Product backPath={"/product"}>
        <BuyInfo />
      </Product>
      <Footer />
    </>
  );
}

export default Buy;
