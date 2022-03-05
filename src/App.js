import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import SignUp from "./routes/SignUp";
import Success from "./routes/Success";

import "./scss/index.scss";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact={true} element={<SignUp />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </HashRouter>
  );
};
export default App;
