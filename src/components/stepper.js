import React, { useState } from "react";
import "./../styles/stepper.css";

const Stepper = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Borrower Info",
    "Director Info",
    "Financial Info",
    "Past Performance",
    "Document Upload",
  ];

  return (
    <div className="stepper">
      <div className="stepper-header">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index <= currentStep ? "active" : ""}`}
            onClick={() => setCurrentStep(index)}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-label">{step}</div>
          </div>
        ))}
      </div>
      <div className="stepper-content">{children[currentStep]}</div>
      <div className="stepper-footer">
        <button
          className="back-btn"
          disabled={currentStep === 0}
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          Back
        </button>
        <button
          className="continue-btn"
          disabled={currentStep === steps.length - 1}
          onClick={() => setCurrentStep((prev) => prev + 1)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Stepper;
