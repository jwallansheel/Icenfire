import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ item }) => {
  const baseCardStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    width: "250px",
    height: "150px",
    margin: "20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const specialStyles1 = {
    border: "13px solid #d92626",
  };const specialStyles2 = {
    border: "13px solid #ffb300",
  };const specialStyles3 = {
    border: "13px solid #5dbf40",
  };

  const cardLinkStyles = {
    textDecoration: "none",
    color: "inherit",
  };

  const cardTitleStyles = {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  };

  let cardStyles = { ...baseCardStyles };
  if (item.authors) {
    cardStyles = { ...baseCardStyles, ...specialStyles3 }; 
  }if (item.coatOfArms) {
    cardStyles = { ...baseCardStyles, ...specialStyles2 };
  }if (item.gender) {
    cardStyles = { ...baseCardStyles, ...specialStyles1 };
  }

  return (
    <Link to={`/details/${item.url}`} style={cardLinkStyles}>
      <div
        style={cardStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 style={cardTitleStyles}>{item.name || item.aliases.join(", ")}</h2>
      </div>
    </Link>
  );
};

export default CardItem;
