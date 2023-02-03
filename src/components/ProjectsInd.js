import anime from "../images/mujer.jpg";
function ProjectsInd() {
    return (
        <section className="projects" id="projects-section">
      <h3 className="projects__title">proyectos</h3>
      
      
      <div className="containerArticle">
      <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Rock, Paper & Scissors"
          />
          <h4 className="projects__article--name">La Joya producciones </h4>
          <p className="projects__article--description">
            Creación y mantenimiento Web (2017 - 2020). Usando WordPress y Vimeo. 
          </p>
          <a href="https://github.com/Bella-forOf/Juego-fuerzas-JuegoDeTronos">
            <button className="projects__article--button">Demo</button>
          </a>
         
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Rock, Paper & Scissors"
          />
          <h4 className="projects__article--name">Adopta un perrito</h4>
          <p className="projects__article--description">
            Diseño de landing para web de adopciones de perro. 
          </p>
         <p> Tecnologias aplicadas: || HTML-CSS - SASS ||  </p>
          <a href="https://github.com/Bella-forOf/Juego-fuerzas-JuegoDeTronos">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Bella-forOf/Juego-fuerzas-JuegoDeTronos">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Rock, Paper & Scissors"
          />
          <h4 className="projects__article--name">Juego Fuerzas del Bien - Mal</h4>
          <p className="projects__article--description">
            Interesante juego donde eliges con que equipo vas a combatir y al alzar se erigirá el contrincante. ¿Quién ganará?
          </p>
         <p> Tecnologias aplicadas: || HTML-CSS - SASS || JavaScript || </p>
          <a href="https://github.com/Bella-forOf/Juego-fuerzas-JuegoDeTronos">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Bella-forOf/Juego-fuerzas-JuegoDeTronos">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Rock, Paper & Scissors"
          />
          <h4 className="projects__article--name">Breaking Bad</h4>
          <p className="projects__article--description">
            Buscador de personajes de esta conocida serie, podras buscarlos por nombre y añadirlos a tu lista de favoritos.
          </p>
         <p> Tecnologias aplicadas: || HTML-CSS - SASS || JavaScript || </p>
          <a href="https://bella-forof.github.io/Breaking_Bad_listado_personajes/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Bella-forOf/Breaking_Bad_listado_personajes">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Rock, Paper & Scissors"
          />
          <h4 className="projects__article--name">Breaking Bad</h4>
          <p className="projects__article--description">
            Buscador de personajes de esta conocida serie, podras buscarlos por nombre y añadirlos a tu lista de favoritos.
          </p>
         <p> Tecnologias aplicadas: || HTML-CSS - SASS || JavaScript || </p>
          <a href="https://bella-forof.github.io/Breaking_Bad_listado_personajes/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Bella-forOf/Breaking_Bad_listado_personajes">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        
      </div>
    </section>
  );
}
export default ProjectsInd;