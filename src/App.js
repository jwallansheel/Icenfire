import "./App.css";
import './index.css'; // Adjust the path if necessary

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./components/ListPage";
import DetailsPage from "./components/details";
import HomePage from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route
          path="*"
          render={() => <h1 style={{ color: "black" }}>404 Not Found</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
