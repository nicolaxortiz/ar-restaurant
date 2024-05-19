import React from "react";
import ARcamera from "../components/ARcamera";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function ARview() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div
        style={{ position: "absolute", zIndex: 100 }}
        onClick={() => {
          navigate("/product");
          window.location.reload();
        }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          variant="contained"
          sx={{ marginLeft: 4, marginTop: 4, borderRadius: "8px" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Regresar
        </Button>
      </div>
      <ARcamera />;
    </>
  );
}

export default ARview;
