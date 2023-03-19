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

function Home() {
  return (
    <>
      <h4 className="home"><i class="fa fa-home" aria-hidden="true">&nbsp;</i>Home</h4>
      <h2 className="compname">Sri Sarvam oils</h2>
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


      <h4 className="Quote1">Quality in Every Drop</h4>


      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <img src={sunFil} alt="SunLight Filteration" className="sun"/>
              <h5 class="card-title" >Sunlight Filteration</h5>
              
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
            <img src={noprev} alt="No Preservatives" className="sun"/>
              <h5 class="card-title">No Preservatives</h5>
              
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
            <img src={adultfree} alt="Adulteration Free" className="sun"/>
              <h5 class="card-title">Adulteration Free</h5>
              
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
            <img src={natprod} alt="Natural Product" className="sun"/>
              <h5 class="card-title">No Chemicals</h5>
              
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home;