import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ website }) => {
  return (
    <NavLink to={`/website/${website.id}`} className="card">
      <img src={website.cover} alt={"image de " + website.title} />
      <h3> {website.title} </h3>
    </NavLink>
  );
};

export default Card;
