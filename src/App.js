import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UseContext } from "./context/UseContext";
import UseState from "./context/UseState";
import Menu from "./pages/Menu";
import ProductInfo from "./pages/ProductInfo";
import ARview from "./pages/ARview";
import Buy from "./pages/Buy";
import Rate from "./pages/Rate";

function App() {
  const initial = UseState();
  return (
    <>
      <UseContext.Provider value={initial}>
        <Router>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/product" element={<ProductInfo />} />
            <Route path="/AR" element={<ARview />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rate" element={<Rate />} />
            <Route path="*" element={<Menu />} />
          </Routes>
        </Router>
      </UseContext.Provider>
    </>
  );
}

export default App;
