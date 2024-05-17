import React from "react";
import portrait from "/img/JL2.webp";

export default function About() {
  return (
    <section id="about">
      <div className="picture left">
        <img src={portrait} alt="portrait JulienLEFEBVRE" />
      </div>
      <div id="about-me">
        <h2 className="about-me__title">A propos de moi</h2>
        <h3 className="about-me__introduction">
          Cette reconversion en tant que développeur Web a été l'une des
          meilleures décisions que j'ai prise dans ma vie. De formation
          commercial, j'ai pendant plusieurs années vendu des formations
          professionalisantes à des particuliers comme à des professionnels. Je
          me nourissais du bonheur de ces nouveaux diplomés, qui avaient alors
          toutes les cartes en main pour réaliser leurs rêves. Jusqu'au jour où
          cela n'était plus suffisant. J'ai alors décidé de m'accorder cette
          même chance. J'avais conscience des difficultés que cela représentait,
          mais j'était prêt à relevé ce défis.
        </h3>
        <p>
          Aujourd'hui je valide un diplome de niveau Bac +2 Intégrateur Web /
          développeur Web chez Openclassroom, et en Septembre je continue cette
          aventure à l'école d'Epitech a Lyon pour un master en développement de
          solution digitale. Je suis dans cette optique à la recherche d'une
          entreprise dans laquelle je pourrai apprendre, m'investir, et réussir
          à atteindre les objectifs en collectif. Ce cursus se fera en
          alternance a partir de Janvier 2025 jusqu'à Aout 2027.
        </p>
      </div>
    </section>
  );
}
