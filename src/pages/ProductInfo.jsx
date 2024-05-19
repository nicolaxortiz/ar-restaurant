import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
import InfoProduct from "../components/InfoProduct";

function ProductInfo() {
  return (
    <>
      <Header />
      <Product backPath={"/"}>
        <InfoProduct />
      </Product>
      <Footer />
    </>
  );
}

export default ProductInfo;
