import React from "react";
const DetailsPage = ({ match,items}) => {
  const itemId = match.params.id;
  const item = items.find((item) => item.id === itemId);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <h1>Details for {item.name || item.aliases}</h1>
      <p>Name: {item.name}</p>
      <p>Aliases: {item.aliases}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DetailsPage;
