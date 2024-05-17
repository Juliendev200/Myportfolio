import Accordion from "./Accordion";

const Accordionwrap = ({ article }) => {
  const technologies = article.equipments;
  return (
    <div className="logement-accordion">
      <Accordion label="Description" content={article.description} />
      <Accordion
        label="Technologies"
        content={technologies.map((technologie, index) => (
          <p key={index}>{technologie}</p>
        ))}
      />
    </div>
  );
};

export default Accordionwrap;
