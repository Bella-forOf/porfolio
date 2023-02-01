import bella from "../images/Bella2.jpg";
import cv from "../documents/CV_Bella_Garcia_Villegas_web_developer__.pdf";

function About() {
  return (
    <section className="aboutSection" id="about-section">
      <img className="aboutSection__image" src={bella} alt="Foto de Bella" />
      <article className="aboutSection__article">
        <h3 className="aboutSection__article--title">Sobre mi</h3>
        <p className="aboutSection__article--text">
          lorem Soy una persona muy proactiva que esta buscando su primera oportunidad en el mundo de la programación después de una completa formación en la que he invertido mucho tiempo ganas e ilusión. He realizado un bootcamp de programación web muy muy completo donde he aprendido mucho mas de lo que llegue a imaginar pero quiero seguir formándome para dar mi mejor versión. He llegado a la conclusión que lo mejor es buscar una empresa donde busquen programadores en formación para afianzar mis conocimientos y elegir la rama en la que me quiero seguir formando. Tengo claro que me fascinan las bases de datos y todo lo que se puede hacer con su gestión. Las APIS, y el lado backend de la programación es el que me parece mas interesante. Creo que esta formación puede ser compatible conmigo aunque me gustaria que nos conociéramos y podamos hablar sobre ello. Gracias
        </p>
        <p className="aboutSection__article--text">
        Soy una persona muy proactiva que esta buscando su primera oportunidad en el mundo de la programación después de una completa formación en la que he invertido mucho tiempo ganas e ilusión. He realizado un bootcamp de programación web muy muy completo donde he aprendido mucho mas de lo que llegue a imaginar pero quiero seguir formándome para dar mi mejor versión. He llegado a la conclusión que lo mejor es buscar una empresa donde busquen programadores en formación para afianzar mis conocimientos y elegir la rama en la que me quiero seguir formando. Tengo claro que me fascinan las bases de datos y todo lo que se puede hacer con su gestión. Las APIS, y el lado backend de la programación es el que me parece mas interesante. Creo que esta formación puede ser compatible conmigo aunque me gustaria que nos conociéramos y podamos hablar sobre ello. Gracias
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