import { Link } from "react-router-dom";
import React from "react";
 export default function Listitem  ({ item }) {
   return (
     <li>
       <Link to={`/details/${item.id}`}>
         {JSON.stringify(item.name || item.aliases)}
       </Link>
     </li>
   );
 };
