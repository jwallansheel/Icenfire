import React, { useEffect, useState } from "react";
import Listitem from "../components/listitem";
import "./List.css"
const ListPage = () => {
  const [list, setList] = useState({ books: [], characters: [], houses: [] });

  const fetchdata = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/getall`);
      if (!response.ok) {
        throw new Error("Data not found");
      }
      const data = await response.json();
      console.log(data);
      setList(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdata(); 
  }, []);

  return (
    <div>
      <h1>List of Data:</h1>

      <h2 className="text-2xl font-semibold text-black-200 border-b-2 border-gray-600 pb-2 mb-4">
        Books
      </h2>
      <div className="scroll-container">
        <ul className="horizontal-list">
          {list?.books?.map((book, index) => (
            <Listitem key={index} item={book}>
              {book.name}
            </Listitem>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-black-200 border-b-2 border-gray-600 pb-2 mb-4">
        Character{" "}
      </h2>
      <div className="scroll-container">
        <ul className="horizontal-list">
          {list?.characters?.map((character, index) => (
            <Listitem key={index} item={character}>
              {character.name || character.aliases[0]}
            </Listitem>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-black-200 border-b-2 border-gray-600 pb-2 mb-4">
        Houses{" "}
      </h2>
      <div className="scroll-container">
        <ul className="horizontal-list">
          {list?.houses?.map((house, index) => (
            <Listitem key={index} item={house}>
              {house.name || house.region}
            </Listitem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListPage;
