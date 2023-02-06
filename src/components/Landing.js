
import foto1 from "../images/tumbada1.jpg";
import foto2 from "../images/tumbada2.jpg";
import foto3 from "../images/tumbada3.jpg";

import Header from "./Header";
import Contact from "./Contact";

function Landing() {
    return (
      <section className="landing">
<Header/>
    <div className="photo1">
        <img className="photo1_img" src={foto1} alt="paisaje" />
    </div>
    
    <div className="photo2">
    <img className="photo2_img" src={foto2} alt="paisaje" />
        <div className="photo2_div">
            <p className="photo2_text">
           
Bella García Villegas Junior Web Developer
            </p>
            <p className="photo2_text2">
           
           "Primero resuelve el problema.
                       </p>
                       <p className="photo2_text2">
           
          Entonces escribe el codigo"
                       </p>
                       <p className="photo2_text3">John Jhonson</p>
            <Contact/>
        </div>

    </div>
    <div className="photo3">
    <img className="photo3_img" src={foto3} alt="paisaje" />

    </div>
    
</section>

    );
            }
export default Landing;