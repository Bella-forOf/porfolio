import anime from "../images/mujer.jpg";
function ProjectsTeam() {
    return (
        <section className="projects" id="projects-section">
      <h3 className="projects__title">proyectos</h3>
      <p className="projects__text">
        equipo
      </p>
      <div className="containerArticle">
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Harry Potter"
          />
          <h4 className="projects__article--name">Proyectos personales</h4>
          <p className="projects__article--description">
          || HTML-CSS - SASS || JavaScript – React - APIs || Node JS - Express || SQlite ||
          </p>
         
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Inherite Code"
          />
          <h4 className="projects__article--name">Proyectos en equipo</h4>
          <p className="projects__article--description">
          || HTML-CSS - SASS || JavaScript – React - APIs || Node JS - Express || SQlite ||
          </p>
         
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Anime Series"
          />
          <h4 className="projects__article--name">Anime Series</h4>
          <p className="projects__article--description">
            Poyecto individual. Buscador de series de Anime, creado con HTML,
            SASS y JavaScript
          </p>
          <a href="https://begodpo.github.io/anime-series/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/anime-series">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Awesome Profile-Cards"
          />
          <h4 className="projects__article--name">Awesome Profile Cards</h4>
          <p className="projects__article--description">
            Proyecto en equipo. Web para crear tarjetas de visita
            personalizadas, con HTML, SASS y JavaScript.
          </p>
          <a href="http://beta.adalab.es/project-promo-o-module-2-team-5/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/awesome-profile-cards">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Rock, Paper & Scissors"
          />
          <h4 className="projects__article--name">Rock, Paper & Scissors</h4>
          <p className="projects__article--description">
            Proyecto individual. Juego de Piedra, Papel y Tijeras, creado con
            HTML, CSS y JavaScript.
          </p>
          <a href="https://begodpo.github.io/rock-paper-scissors/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/rock-paper-scissors">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Web Colaborativa"
          />
          <h4 className="projects__article--name">
            Web Colaborativa Adalabers
          </h4>
          <p className="projects__article--description">
            Proyecto en equipo. Web colaborativa creada con HTML, CSS y SASS.
            Responsive.
          </p>
          <a href="http://beta.adalab.es/project-promo-o-module-1-team-7/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/web-colaborativa-adalabers">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Anonymous Proxy"
          />
          <h4 className="projects__article--name">Anonymous Proxy</h4>
          <p className="projects__article--description">
            Proyecto individual. Web responsive, creada con HTML, CSS y SASS
          </p>
          <a href="https://begodpo.github.io/anonymous-proxy/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/anonymous-proxy">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Web Freelancer"
          />
          <h4 className="projects__article--name">Web Freelancer</h4>
          <p className="projects__article--description">
            Proyecto individual. Web responsive, creada con HTML y CSS
          </p>
          <a href="https://webfreelancerbego.netlify.app/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="#">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Front-End Store"
          />
          <h4 className="projects__article--name">Front-End Store</h4>
          <p className="projects__article--description">
            Proyecto individual. Web responsive, creada con HTML y CSS
          </p>
          <a href="https://tshirtstore1.netlify.app/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="#">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
      </div>
    </section>
  );
}
export default ProjectsTeam;