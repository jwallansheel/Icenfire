import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const HomePage = () => {

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Ice and Fire</p>
        
          <div>
            <Link to="/list">View List</Link>
          </div>
      </header>
    </div>
  );
};

export default HomePage;
