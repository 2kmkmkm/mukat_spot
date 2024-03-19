import React from "react";
import "./App.css";
import MainPage from "./Page/MainPage";
import SpotlistPage from "./Page/SpotlistPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/spotlist" element={<SpotlistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
