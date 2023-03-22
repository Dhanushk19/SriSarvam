import "../css/Home.css";
import Carousel from 'react-bootstrap/Carousel';
import group from "../assets/Group.png";
import oil1 from "../assets/oil1.png";
import oil2 from "../assets/oil2.png";
import oil3 from "../assets/oil3.png";
import oil4 from "../assets/oil4.png";
import sunFil from "../assets/SunFil.jpg";
import noprev from "../assets/noaddedprev.jpg";
import adultfree from "../assets/adulterationfree.png";
import natprod from "../assets/natprod.jpg";
import woodp from "../assets/woodp.jpg";
import logo1 from "../assets/logo1b.png";
import Typer from "./typical";
import ScrollToTop from "../components/top.js";
function Home() {
  return (
    <>
      <h4 className="home"><i class="fa fa-home" aria-hidden="true">&nbsp;</i>Home</h4>
      <h6 className="compname"><Typer heading="Sri Sarvam Oils : "
        dataText={[
          "Nature's goodness in every drop.",
          "Pure and unadulterated oil", 
          "The way nature intended it.",
          "Healthy living begins with pure, wood-pressed oil.",
          "Traditionally made, naturally pure."
        ]} /></h6>
      <Carousel className="caromod">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={group}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={oil1}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={oil2}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={oil3}
            alt="Fourth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={oil4}
            alt="Fiftn slide slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="prodfull">
        <h3 className="oprod">Our Products</h3>
        <div class="row" id="oil">
          <div class="col-sm-3" >
            <a href="/products" className="anchor">
              <div class="card1" >
                <div class="card-body">
                  <img src={oil1} alt="Coconut oil" className="sun1" />
                  <h5 class="card-title1" >Coconut Oil</h5>    
                </div>
              
              </div>
            </a>
          </div>
          <div class="col-sm-3">
            <a href="/products" className="anchor">
              <div class="card1">
                <div class="card-body">
                  <img src={oil2} alt="Groundnut Oil" className="sun1" />
                  <h5 class="card-title1">Groundnut Oil</h5>

                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-3">
            <a href="/products" className="anchor">
              <div class="card1">
                <div class="card-body">
                  <div className="img-wrapper">
                  <img src={oil3} alt="Gingelly Oil" className="sun1" />
                  </div>
                  <h5 class="card-title1">Gingelly Oil</h5>

                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-3">
            <a href="/products" className="anchor">
              <div class="card1">
                <div class="card-body">
                  <img src={oil4} alt="Castor oil" className="sun1" />
                  <h5 class="card-title1">Castor oil</h5>

                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <h4 className="Quote1">Quality in Every Drop</h4>


      <div class="row" id="info" >
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <img src={sunFil} alt="SunLight Filteration" className="sun" />
              <h5 class="card-title" >Sunlight Filteration</h5>

            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <img src={noprev} alt="No Preservatives" className="sun" />
              <h5 class="card-title">No Preservatives</h5>

            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <img src={adultfree} alt="Adulteration Free" className="sun" />
              <h5 class="card-title">Adulteration Free</h5>

            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <img src={natprod} alt="Natural Product" className="sun" />
              <h5 class="card-title">No Chemicals</h5>

            </div>
          </div>
        </div>
      </div>

      <div className="adv">
        <h4 className="why">Why use Wood Pressed Oil ?</h4>
        <div className="row">
          <div className="col-sm-6">
            <img src={woodp} alt="woodpress" className="woo"></img>
          </div>
          <div className="col-sm-6">
            <p>Wood pressed oil, also known as cold-pressed oil or chekku oil, is extracted from seeds or nuts using traditional wooden presses.Wood pressed oils are often considered to be more nutrient-rich than oils extracted using modern methods. This is because the wooden press method allows for the retention of natural nutrients and antioxidants.Wood pressed oils are extracted without the use of any chemicals, solvents or heat. This means that the oil is free from any harmful residues that could be left behind from chemical extraction processes.</p>
          </div>
        </div>
      </div>

      <div className="compdetails">
        <img src={logo1} alt="compname" className="comname"></img>
        <div className="row">
          <div className="col-sm-4">
            <h5 className="bottom"> Any Doubts ? :</h5>
            <h6 className="doubt"><i class="fa-solid fa-phone"></i>&nbsp;9788718180</h6>
          </div>
          <div className="col-sm-5">
            <h5 className="bottom">Address :</h5>
            <h6 className="address"><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Sri Vaari Electrical Building ,<br></br> Karur main road ,<br></br> Kalipalayam Post,<br></br>Dharapuram, Tiruppur District,<br></br> Tamil nadu - 638661 .</h6>
          </div>
          <div className="col-sm-3">
            <h5 className="bottom">Email :</h5>
            <h6 className="email"><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;sample@gmail.com</h6>
          </div>
        </div>
      </div>
        <ScrollToTop/>
    </>
  )
}

export default Home;