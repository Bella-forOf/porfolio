// import linkedIn from "../images/linkedIn_icon.jpg";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <section className="header">

<div className="nav-header">

    <div className="nav-header-div">
    <p className="link"><Link title="Home" className="enlace-nav" to="/">Home</Link></p>
    <p className="link"><Link title="Works" className="enlace-nav" to="/Projects" >Works</Link>
    </p>
      </div>
      
    <p className="aboutMe"><Link title="About me" className="enlace-nav" to="/about">About me</Link></p>
   

</div>
</section>
      {/* <section className="headerr">
       
        
        <nav className="headerr__nav">
        <Link className="headerr__nav--link" to="/">
            Inicio ||
          </Link>
          <Link className="headerr__nav--link" to="/about">
            Sobre mi  ||
          </Link>
         
          <Link className="headerr__nav--link" to="/Projects">
            Proyectos ||
          </Link>
          <Link className="headerr__nav--link" to="/contact">
            Contacto
          </Link>
         
        </nav>
        </section> */}
      
      
</>
  );
}

export default Header;
