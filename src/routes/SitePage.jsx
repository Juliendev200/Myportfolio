import { useParams } from "react-router-dom";
import Datas from "../datas/Datas.json";
import Title from "../components/Title";
import Carrousel from "../components/Carrousel";
import Crafter from "../components/Crafter";
import Rate from "../components/Rate";
import Tags from "../components/Tags";
import IdSiteError from "./IdSiteError";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Accordionwrap from "../components/Accordionwrap";

export default function SitePage() {
  const { id } = useParams();
  const myarticle = Datas.filter((data) => data.id === `${id}`);

  if (myarticle.length !== 0)
    return (
      <>
        <Navigation />
        <div className="main-container">
          {myarticle.map((article, index) => (
            <div className="website" key={index}>
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
                  <Crafter
                    craftername={article.crafter.name}
                    crafterpicture={article.crafter.picture}
                  />
                  <Rate starnumber={article.rating} />
                </div>
              </div>
              <Accordionwrap article={article} />
            </div>
          ))}
        </div>

        <Footer />
      </>
    );
  else return <IdSiteError />;
}
