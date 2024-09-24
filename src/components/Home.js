import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const HomePage = () => {
      const [listload, setlistload] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Ice and Fire</p>
        <button onClick={() => setlistload(true)}>Press to view List</button>
        {listload && (
          <div>
            <Link to="/list">View List</Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default HomePage;
