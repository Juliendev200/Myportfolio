import React, { useEffect, useState } from "react";
import Datas from "../datas/Datas.json";
import Card from "./Card";

export default function Gallery() {
  return (
    <section id="myportfolio" className="lilcontainer">
      <h2>My portfolio</h2>
      <div className="gallery">
        {Datas.map((website, i) => (
          <Card key={i} website={website} />
        ))}
      </div>
    </section>
  );
}
