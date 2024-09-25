import "./App.css";
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
        <Route path="/details/:url" component={<DetailsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
