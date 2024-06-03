import React from "react";
import AproposDatas from "../datas/AproposDatas.json";
import Accordion from "./Accordion";

export default function AproposCollapse() {
  {
    return (
      <section className="memyselfandI">
        <h2>Me, myself, and I</h2>
        <div className="apropos">
          {AproposDatas.map((propos, i) => (
            <Accordion label={propos.label} content={propos.content} key={i} />
          ))}
        </div>
      </section>
    );
  }
}
