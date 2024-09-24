import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListPage from "./components/ListPage";
import Listitem from "./components/listitem";
import DetailsPage from "./components/details";
import HomePage from "./components/Home";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/list" component={ListPage} />
        <Route path="/details/:id" component={DetailsPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
