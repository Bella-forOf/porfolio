import linkedIn from "../images/linkedIn_icon.jpg";
import gitHub from "../images/GitHub-Mark.png";
import bella from "../images/bella.png";
function Header() {
  return (
    <>
      <section className="header">
        {/* <h1 className="header__title">Bela Garcia</h1> */}
        
        <nav className="header__nav">
          <a className="header__nav--link" href="#hero-section">
            Inicio
          </a>
          <a className="header__nav--link" href="#about-section">
            Sobre mi
          </a>
          <a className="header__nav--link" href="#projects-section">
            Formacion y Titulos
          </a>
          <a className="header__nav--link" href="#projects-section">
            Proyectos
          </a>
          <a className="header__nav--link" href="#contact-section">
            Contacto
          </a>
          <a className="header__nav--link" href="#contact-section">
            En la actualidad...
          </a>
        </nav>
      </section>
      <section class="hero" id="hero-section">
        {/* <p className="hero__parag">¡Hola!</p> */}
        <h2 className="hero__title"><img className="aboutSection__image" src={bella} alt="Foto de Bella" />
          <span className="span"></span> Bella García Villegas
        </h2>
        
        <p className="hero__parag">Junior Web Developer</p>
        <div className="hero__icons">
          <a href="https://www.linkedin.com/in/bella-garcia-villegas-web-developer/">
            <img
              src={linkedIn}
              alt="LinkedIn Icon"
              className="hero__icons--link"
            />
          </a>
          <a href="https://github.com/bellita85">
            <img src={gitHub} alt="GitHub Icon" className="hero__icons--git" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Header;
