import React from "react";
import Listitem from "../components/listitem";
const DetailsPage = ({ match}) => {
  const itemId = match.params.id;
  const item = match112.find((item) => item.id === itemId);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <h1>Details for {item.name || item.aliases}</h1>
      <p>ID: {item.id}</p>
      <p>Name: {item.name}</p>
      <p>Aliases: {item.aliases}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DetailsPage;
