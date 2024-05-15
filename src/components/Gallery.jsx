import React, { useEffect, useState } from "react";
import Datas from "../datas/Datas.json";
import Card from "./Card";

export default function Gallery() {
  return (
    <>
      <h2>My portfolio</h2>
      <div className="gallery">
        {Datas.map((logement, i) => (
          <Card key={i} logement={logement} />
        ))}
      </div>
    </>
  );
}
