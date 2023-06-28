import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

require("dotenv").config();

const driveLink =
  "https://drive.google.com/embeddedfolderview?id=11Gwak_UCH1FrJ7qhgKSrP1COm3lbmFCl#grid"; //https://drive.google.com/drive/folders/11Gwak_UCH1FrJ7qhgKSrP1COm3lbmFCl?usp=sharing
const headingText = "College 'Study' Material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

reportWebVitals();
