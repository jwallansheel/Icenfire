import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CardItem from "./listitem";

const DetailsPage = () => {
  const location = useLocation();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5000/api/get?url=${url}`);
      if (!response.ok) {
        throw new Error("Data not found");
      }
      const data = await response.json();
      setDetails(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const url = queryParams.get("url");

    if (url) {
      fetchData(url);
    }
  }, [location.search]);

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading data...</p>;
  }

  if (!details) {
    return (
      <p className="text-center text-red-500">
        No details found for the provided URL.
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-5 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-5 text-center">
        {details?.name || details?.aliases?.[0] || "N/A"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Character Details</h2>
          <p>Name: {details.name || "N/A"}</p>
          <p>Gender: {details.gender || "N/A"}</p>
          <p>Culture: {details.culture || "N/A"}</p>
          <p>Born: {details.born || "N/A"}</p>
          <p>Died: {details.died || "N/A"}</p>
          <p>Aliases: {details.aliases?.join(", ") || "N/A"}</p>
          <p>Titles: {details.titles?.join(", ") || "N/A"}</p>
          <p>
            Allegiances:{" "}
            {details?.allegiances?.length > 0
              ? details.allegiances.join(", ")
              : "None"}
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Books</h2>
          {details.books && details.books.length > 0 ? (
            details.books.map((bookUrl, index) => (
              <CardItem key={index} item={bookUrl} />
            ))
          ) : (
            <p>None</p>
          )}
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">POV Books</h2>
          {details.povBooks && details.povBooks.length > 0 ? (
            details.povBooks.map((povBookUrl, index) => (
              <CardItem key={index} item={povBookUrl} />
            ))
          ) : (
            <p>None</p>
          )}
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">TV Series</h2>
          <p>
            {details.tvSeries?.length > 0
              ? details.tvSeries.join(", ")
              : "None"}
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Played By</h2>
          <p>{details.playedBy?.join(", ") || "N/A"}</p>
        </div>
      </div>

      {details.authors && (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-5">
          <h2 className="text-xl font-semibold">Book Details</h2>
          <p>Title: {details.name}</p>
          <p>ISBN: {details.isbn || "N/A"}</p>
          <p>Authors: {details.authors?.join(", ") || "N/A"}</p>
          <p>Publisher: {details.publisher || "N/A"}</p>
          <p>Country: {details.country || "N/A"}</p>
          <p>Media Type: {details.mediaType || "N/A"}</p>
          <p>Number of Pages: {details.numberOfPages || "N/A"}</p>
          <p>
            Released: {new Date(details.released).toLocaleDateString() || "N/A"}
          </p>
        </div>
      )}

      {details.coatOfArms && (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-5">
          <h2 className="text-xl font-semibold">House Details</h2>
          <p>Coat of Arms: {details.coatOfArms || "N/A"}</p>
          <p>Region: {details.region || "N/A"}</p>
          <p>Words: {details.words || "N/A"}</p>
          <p>Founded: {details.founded || "N/A"}</p>
          <p>
            Current Lord:{" "}
            {details.currentLord ? (
              <a
                href={details.currentLord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Current Lord
              </a>
            ) : (
              "None"
            )}
          </p>
        </div>
      )}

      {details.type &&
        details.type !== "books" &&
        details.type !== "houses" && (
          <p className="text-red-400 text-center mt-5">
            Details for this type ({details.type}) are not yet implemented.
          </p>
        )}

      <Outlet />
    </div>
  );
};

export default DetailsPage;
