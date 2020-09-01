import React from "react";

import Restaurant from "./restaurant";


function RestaurantList(props) {
  return (
    <div>
      {props.restaurants.map(c => <Restaurant key={c.id} name={c.name} ratings={c.ratings} />)}
     </div> 
  ); 
} 

export default RestaurantList;