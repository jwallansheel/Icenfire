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

  const specialStyles = {
    authors: { border: "13px solid #5dbf40" },
    coatOfArms: { border: "13px solid #ffb300" },
    gender: { border: "13px solid #d92626" },
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
    cardStyles = { ...cardStyles, ...specialStyles.authors };
  } else if (item.region) {
    cardStyles = { ...cardStyles, ...specialStyles.coatOfArms };
  } else if (item.gender) {
    cardStyles = { ...cardStyles, ...specialStyles.gender };
  }

  return (
    <Link
      to={`/details?url=${encodeURIComponent(item.url)}`}
      style={cardLinkStyles}
    >
      <div
        style={cardStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 style={cardTitleStyles}>{item.name || item.aliases?.join(", ")}</h2>
      </div>
    </Link>
  );
};

export default CardItem;
