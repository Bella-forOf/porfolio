import bella from "../images/bella.png";
import cv from "../documents/CV_Bella_Garcia_Villegas_web_developer__.pdf";

function About() {
  return (
    <section className="aboutSection" id="about-section">
      <img className="aboutSection__image" src={bella} alt="Foto de Bella" />
      <article className="aboutSection__article">
        <h3 className="aboutSection__article--title">Sobre mi</h3>
        <p className="aboutSection__article--text">
          x
        </p>
        <p className="aboutSection__article--text">
          x
        </p>
        <p className="aboutSection__article--text">
         x
        </p>
        <a href={cv} download="CV_Bella_Garcia_Villegas_web_developer__.pdf">
          <button className="aboutSection__article--button">
            Descargar CV
          </button>
        </a>
      </article>
    </section>
  );
}

export default About;