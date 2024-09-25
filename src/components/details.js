import React, { useEffect, useState } from "react";

const DetailsPage = ({ match }) => {
  const [details, setDetails] = useState(null);

  // Destructure the type and id from match.params
  const { gender,coatOfArms,authors, id,url } = match.params;

  const fetchdata = async () => {
    try {
      const payload=toString(url);  
      // Make API call based on the type (books, characters, houses)
      const response = await fetch(
        `http://localhost:5000/api/get/${payload}`
      );
      if (!response) {
        throw new Error("Data not found");
      }
      const data = await response.json();
      console.log(data);
      setDetails(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  // Conditional rendering based on type
  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Details for {details.name || details.aliases?.[0] || "N/A"}</h1>

      {gender !== null && (
        <>
          <p>Name: {details.name}</p>
          <p>Gender: {details.gender}</p>
          <p>Aliases: {details.aliases?.join(", ") || "N/A"}</p>
        </>
      )}

      {authors === "books" && (
        <>
          <p>Title: {details.name}</p>
          <p>Authors: {details.authors?.join(", ") || "N/A"}</p>
          <p>Publisher: {details.publisher}</p>
        </>
      )}

      {coatOfArms === "houses" && (
        <>
          <p>Name: {details.name}</p>
          <p>Coat of Arms: {details.coatOfArms || "N/A"}</p>
          <p>Region: {details.region}</p>
        </>
      )}
    </div>
  );
};

export default DetailsPage;
