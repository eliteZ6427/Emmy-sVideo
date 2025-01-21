/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================

* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import App from "App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
// Vision UI Context Provider
import { VisionUIControllerProvider } from "context";
import { store } from "redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <VisionUIControllerProvider>
        <App />
      </VisionUIControllerProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
