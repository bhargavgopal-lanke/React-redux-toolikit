// import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProveMain from "./Components/ProveMain";
import EditMainComponent from "./Components/EditMainComponent";
import { BrowserRouter, Route, Routes } from "react-router";
import ReactFromComponent from "./Components/ReactFromComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReactFromComponent />} />
          <Route path="/proveMain" element={<ProveMain />} />
          <Route path="/editMain" element={<EditMainComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
