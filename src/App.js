import React from "react";
import Stepper from "./components/stepper";
import BorrowerInfo from "./components/borrowInfo";
import TopBar from "./components/topbar";

const App = () => {
  const stepsContent = [
    <BorrowerInfo />,
    <div>Director Info</div>,
    <div>Financial Info</div>,
    <div>Past Performance Details</div>,
    <div>Document Upload</div>,
  ];

  return (
    <div className="container">
      <TopBar />
      <Stepper>{stepsContent}</Stepper>
    </div>
  );
};

export default App;
