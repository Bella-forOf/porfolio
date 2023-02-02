import anime from "../images/mujer.jpg";

import { Link } from 'react-router-dom';
function Projects() {
  return (
    <section className="projects" id="projects-section">
      <h3 className="projects__title">proyectos</h3>
      <p className="projects__text">
        
      </p>
      <div className="containerArticle">
      <Link to="/projects-individual" className="n">
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
        </Link>
        <Link to="/projects-teams" className="n">
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
        </Link>
      </div>
    </section>
  );
}

export default Projects;