import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
import RateInfo from "../components/RateInfo";

function Rate() {
  return (
    <>
      <Header />
      <Product backPath={"/buy"}>
        <RateInfo />
      </Product>
      <Footer />
    </>
  );
}

export default Rate;
