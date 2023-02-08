import foto1 from "../images/horizontal1.jpg";
import foto2 from "../images/horizontal2.jpg";
import foto3 from "../images/horizontal3.jpg";
import foto4 from "../images/vertical1.jpg";
import foto5 from "../images/vertical2.jpg";
import foto6 from "../images/vertical3.jpg";
import cv from "../documents/CV_Bella_Garcia_Villegas_web_developer__.pdf";
import Header from "./Header";

import linkedIn from "../images/linkedin.png";
import gitHub from "../images/github.png";
import email from "../images/email.png";
function About() {
  return (
    <>
    <section className="about">
      
<Header/>
    <div className="about_photo1">
        <img className="about_photo1_img" src={foto1} alt="paisajee" />
    </div>
    
    <div className="about_photo2">
    <img className="about_photo2_img" src={foto2} alt="paisaje" />
        <div className="about_photo2_div">
            <p className="about_photo2_div_textAbout">
            Muy proactiva y siempre en constante evolución. Mis mas de 15 años de experiencia laboral en diferentes sectores me permiten dar un enfoque maduro y eficiente. Me considero una persona muy organizada y resolutiva. 
            </p>
        </div>

    </div>
    <div className="about_photo3">
    <img className="about_photo3_img" src={foto3} alt="paisaje" />
    
    </div>
    <div className="about_photo1">
        <img className="about_photo1_img" src={foto6} alt="paisaje" />
    </div>

    <div className="about_photo2">
    <img className="about_photo2_img" src={foto5} alt="paisaje" />
        <div className="about_photo2_div">
            
            <ul className="about_photo2_div_text">
                <li>// HTML-CSS //</li>
                <li>// JavaScript - React //</li>
                <li>// Node JS - Express //</li>
                <li> // SQlite //</li>
                <li>// Git - Github //</li>
                <li>// Agile - Scrum // </li>
               </ul> 
               <ul className="about_photo2_div_text2">
                <li>- Inteligencia emocional -</li>
                <li>- Resolucion de problemas -</li>
                <li>- Colaboración  -</li>
                <li>- Gestión del tiempo -</li>
                <li>- Liderazgo -</li>
                <li>- Empatia -</li>
               </ul> 
           
            
        </div>

    </div>
    <div className="about_photo3">
    <img className="about_photo3_img" src={foto4} alt="paisaje" />
    
    </div>
    <a className="button" href={cv} download="CV_Bella_Garcia_Villegas_web_developer__.pdf">
<button className="about_button">
  Descargar CV
</button> </a>
<section className="contact">
      
      <div className="links-container_about">
        <a href="mailto:bellagarcia1985@gmail.com">
          <img className="contact__icon--about" src={email} alt="email icon" />
        </a>
        <a href="https://github.com/Bella-forOf">
          <img className="contact__icon--about" src={gitHub} alt="gitHub icon" />
        </a>
        <a href="https://www.linkedin.com/in/bella-garcia-villegas-web-developer/">
          <img className="contact__icon--about" src={linkedIn} alt="linkedIn icon" />
        </a>
      
      </div>
    </section>
</section>
    </>
  );
}

export default About;
