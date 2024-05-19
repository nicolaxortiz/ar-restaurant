import React from "react";
import { UseContext } from "../context/UseContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../resources/theme";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";

function BuyInfo() {
  const steps = [
    {
      label: "Tu pedido ya se encuentra en preparacion.",
      description: `Nuestros cocineros estan dando su mayor 
      esfuerzo para presentar el plato en tu mesa en el menor 
      tiempo posible!`,
    },
    {
      label: "Tu comida ya esta siendo emplatada.",
      description: `Ten paciencia, pronto estaremos en tu mesa!`,
    },
    {
      label: "Tu comida ha sido entregada.",
      description: `Por favor confirma que esta todo bien en 
      tu plato`,
    },
  ];

  const navigate = useNavigate();
  const { product } = React.useContext(UseContext);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="box-information">
      <Typography
        variant="h5"
        gutterBottom
        className="title-information"
        sx={{ fontWeight: "bold" }}
      >
        {product?.name}
      </Typography>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">
                      Esperando confirmación...
                    </Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>Excelente! que difrutes de tu comida.</Typography>
            <Button
              onClick={() => {
                navigate("/rate");
              }}
              sx={{ mt: 1, mr: 1 }}
            >
              Calificar plato
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}

export default BuyInfo;
