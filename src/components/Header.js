// import linkedIn from "../images/linkedIn_icon.jpg";
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
      
      <>
      <section className="profile-card">
            <div className="header2">
              
             <a target="_blank" href="#">
                <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="hoverZoomLink"/>
              </a> 
              <h1>
                      Bella García
                    </h1>
          
              
              <h2>
                     Junior Web Developer
                    </h2>
          
            </div>
          
           
            <div className="profile-bio">
          
              <p>
              Destinada a reinventarme y descubirr mi pasion por la programcion. Este camino me permite dar lo mejor de mi sin ponerme limites. Siempre dispuesta a seguir ampliando conocimientos
              </p>
          <p>&lt;&gt;Primero resuelve el problema. Entonces, escribe el codigo"</p>
          <p>John Johnson &lt;/ &gt;</p>
            </div>
          
            
            <ul className="profile-social-links">
              <li>
                <a target="_blank" href="x"
                // "https://www.facebook.com/Jaci-Tech-114514443296902"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="x"
                // "https://www.instagram.com/stories/highlights/17879839960658479/?hl=es-la"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="x"
                // "https://www.instagram.com/stories/highlights/17843695007222386/?hl=es-la"
                >
                  <i className="fa fa-cubes"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="x"
                // "https://thedistractedengineer.000webhostapp.com/"
                >
                 
                  <i className="fa fa-desktop"></i>
                </a>
              </li>
            </ul>
          </section>
</>
</>
  );
}

export default Header;
