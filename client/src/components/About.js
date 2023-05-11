import "../css/About.css";
import Typer from "./typical";
import woodp from "../assets/woodp.jpg";
import logo1 from "../assets/logo1b.png";
import ScrollToTop from "../components/top.js";
import Whatsapp from "./Whatsapp";
function About() {
  return (
    <>
    <h4 className="about">
        <i class="fa-solid fa-circle-info"></i>&nbsp; About
      </h4>
    <div className="aboutback">

    
      
      <div className="compname">
      <Typer heading="Sri Sarvam Oils : "
        dataText={[
          "Nature's goodness in every drop.",
          "Pure and unadulterated oil", 
          "The way nature intended it.",
          "Healthy living begins with pure, wood-pressed oil.",
          "Traditionally made, naturally pure."
        ]} />
      </div>
      <div className="adv">
        <h4 className="why">Why use Wood Pressed Oil ?</h4>
        <div className="row">
          <div className="col-md-6">
            <img src={woodp} alt="woodpress" className="woo"></img>
          </div>
          <div className="col-md-6">
            <p>Wood pressed oil, also known as cold-pressed oil or chekku oil, is extracted from seeds or nuts using traditional wooden presses.Wood pressed oils are often considered to be more nutrient-rich than oils extracted using modern methods. This is because the wooden press method allows for the retention of natural nutrients and antioxidants.Wood pressed oils are extracted without the use of any chemicals, solvents or heat. This means that the oil is free from any harmful residues that could be left behind from chemical extraction processes.</p>
          </div>
        </div>
      </div>
      <div className="aboutcont container">
          <p>
          We are passionate about providing you with high-quality cooking oils that are not only healthy but also delicious. Our company prides itself on using only the finest ingredients and the latest manufacturing technology to ensure that you get the best products possible.
          </p>
          <br>
          </br>
          <p>
          Our cooking oils come in a variety of flavors.
          
          </p>
          <ul className="ul">
            <li>Coconut Oil</li>
            <li>Groundnut Oil</li>
            <li>Gingelly Oil</li>
            <li>Castor Oil</li>
          </ul>
          <br></br>
         
         <p>We are committed to providing excellent customer service and making sure that our customers are satisfied with their purchases. If you have any questions, comments, or concerns, please do not hesitate to contact us.</p>
         <br></br>
          <h5 style={{textAlign:"center"}}>Thank you for choosing us!</h5>
      </div>
      <div className="backimg2">
      <div className="compdetails text-center">
        <img src={logo1} alt="compname" className="comname"></img>
        <div className="row text-center">
          <div className="col-md-4">
            <h5 className="bottom"> Any Doubts ? :</h5>
            <h6 className="doubt"><i class="fa-solid fa-phone"></i>&nbsp;9788718180</h6>
          </div>
          <div className="col-md-4">
            <h5 className="bottom">Address :</h5>
            <h6 className="address"><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Sri Vaari Electrical Building,<br></br> Karur main road,<br></br> Kalipalayam Post,<br></br>Dharapuram, Tiruppur District,<br></br> Tamil nadu - 638661.</h6>
          </div>
          <div className="col-md-4">
            <h5 className="bottom">Email :</h5>
            <h6 className="email"><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;srisarvamoils@gmail.com</h6>
          </div>
        </div>
      </div>
      </div>

      </div>
      <Whatsapp/>
      <ScrollToTop/>

        
</>
    )

}

export default About;
