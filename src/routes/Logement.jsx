import { useParams } from "react-router-dom";
import Datas from "../datas/Datas.json";
// import Accordion from "../components/componentelement/Accordion"
import LogementAccordion from "../components/LogementAccordion";
import Title from "../components/Title";
import Carrousel from "../components/Carrousel";
import Host from "../components/Host";
import Rate from "../components/Rate";
import Tags from "../components/Tags";
import Logementerror from "./Logementerror";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Fichelogement() {
  const { id } = useParams();
  const myarticle = Datas.filter((data) => data.id === `${id}`);

  if (myarticle.length !== 0)
    return (
      <>
        <Navigation />
        <div className="main-container">
          {myarticle.map((article, index) => (
            <div className="logement" key={index}>
              <Carrousel article={article} />
              <div className="descriptionwrapper">
                <div className="description1">
                  <Title
                    localisation={article.location}
                    title={article.title}
                  />
                  <Tags taged={article.tags} />
                </div>
                <div className="description2">
                  <Host
                    hostname={article.host.name}
                    hostpicture={article.host.picture}
                  />
                  <Rate starnumber={article.rating} />
                </div>
              </div>
              <LogementAccordion article={article} />
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  else return <Logementerror />;
}
