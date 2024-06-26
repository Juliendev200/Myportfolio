import React, { useState } from "react";

export const Carrousel = ({ article }) => {
  const album = article.pictures;
  const [slide, setSlide] = useState(0);
  const previousSlide = () => {
    setSlide(slide === 0 ? album.length - 1 : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === album.length - 1 ? 0 : slide + 1);
  };
  if (album.length > 1)
    return (
      <div className="carrousel">
        {album.map((photo, index) => {
          return (
            <img
              src={photo}
              alt={"photo" + `${index}`}
              key={"photokey" + `${index}`}
              className={slide === index ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        {article.websitelink && (
          <a href={article.websitelink}>
            <img
              src="https://juliendev200.github.io/Myportfolio/img/link.png"
              className="link"
            />
          </a>
        )}
        {article.githublink && (
          <a href={article.githublink}>
            <img
              src="https://juliendev200.github.io/Myportfolio/img/github2.png"
              className="github"
            />
          </a>
        )}
        <span onClick={previousSlide} className="arrow_left arrow">
          {" "}
          &#12296;{" "}
        </span>
        <span onClick={nextSlide} className="arrow_right arrow">
          {" "}
          &#12297;{" "}
        </span>
        <span className="indicator">
          {" "}
          {slide + 1}/{album.length}
        </span>
      </div>
    );
  else
    return (
      <div className="carrousel">
        {album.map((photo, index) => {
          return (
            <img
              src={photo}
              alt={"photo" + `${index}`}
              key={"photokey" + `${index}`}
              className={slide === index ? "slide" : "slide slide-hidden"}
            />
          );
        })}
      </div>
    );
};

export default Carrousel;
