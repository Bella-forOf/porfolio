import anime from "../images/mujer.jpg";
// import anonymous from "../images/anonymous_proxy.png";
// import awesome from "../images/awesome_profile_cards.png";
// import harry from "../images/harry_potter.png";
// import inheriteCode from "../images/inherit_code.png";
// import adalabers from "../images/web_colaborativa_adalabers.png";
// import gameJs from "../images/rock_paper_scissors.png";
// import freelancer from "../images/web_freelancer.png";
// import tshirtStore from "../images/tshirtstore1.png";

function Projects() {
  return (
    <section className="projects" id="projects-section">
      <h3 className="projects__title">proyectos</h3>
      <p className="projects__text">
        
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
       
      </div>
    </section>
  );
}

export default Projects;