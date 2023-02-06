import foto1 from "../images/horizontal1.jpg";
import foto2 from "../images/horizontal2.jpg";
import foto3 from "../images/horizontal3.jpg";
// import foto1 from "../images/tumbada1.jpg";
// import foto1 from "../images/tumbada1.jpg";
// import foto1 from "../images/tumbada1.jpg";
import cv from "../documents/CV_Bella_Garcia_Villegas_web_developer__.pdf";
import Header from "./Header";
import Contact from "./Contact";
function About() {
  return (
    <>
    <section className="about">
      
<Header/>
    <div className="about_photo1">
        <img className="about_photo1_img" src={foto1} alt="paisaje" />
    </div>
    
    <div className="about_photo2">
    <img className="about_photo2_img" src={foto2} alt="paisaje" />
        <div className="about_photo2_div">
            <p className="about_photo3_div_text">
            Muy proactiva y siempre en constante evolución. Mis mas de 15 años de experiencia laboral en diferentes sectores me permiten dar un enfoque maduro y eficiente. Me considero una persona muy organizada y resolutiva. 
            </p>
        </div>

    </div>
    <div className="about_photo3">
    <img className="about_photo3_img" src={foto3} alt="paisaje" />
    
    </div>
    <div className="about_photo1">
        <img className="about_photo1_img" src={foto3} alt="paisaje" />
    </div>

    <div className="about_photo2">
    <img className="about_photo2_img" src={foto2} alt="paisaje" />
        <div className="about_photo3_div">
            <p className="about_photo3_div_text">
skill
            </p>
        </div>

    </div>
    <div className="about_photo3">
    <img className="about_photo3_img" src={foto1} alt="paisaje" />
    
    </div>
    <a href={cv} download="CV_Bella_Garcia_Villegas_web_developer__.pdf">
<button className="about_button">
  Descargar CV
</button> </a>
   <Contact/>
</section>
    </>
  );
}

export default About;
