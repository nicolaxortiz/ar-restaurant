import React from "react";

export default function () {
  const [product, setProduct] = React.useState({});

  return {
    product,
    setProduct,
  };
}
