import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Listitem from "../components/listitem";

const ListPage = () => {
      const [list, setList] = useState([]);

      const fetchdata = async () => {
        try {
          let databooks = await fetch(
            "https://anapioficeandfire.com/api/books"
          );
          let datachar = await fetch(
            "https://anapioficeandfire.com/api/characters"
          );
          let datahouse = await fetch(
            "https://anapioficeandfire.com/api/houses"
          );

          let books = await databooks.json();
          let characters = await datachar.json();
          let houses = await datahouse.json();

          let data = [...books, ...characters, ...houses];

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
      <ul>
        {list.map((item, index) => (
          <Listitem key={index} item={item}>
            <Link to={`/details/${item.id}`} >
              {JSON.stringify(item.name || item.aliases)}
            </Link>
          </Listitem>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
