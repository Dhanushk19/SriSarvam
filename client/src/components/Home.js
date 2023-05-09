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
import logo1 from "../assets/logo1b.png";
import ScrollToTop from "../components/top.js";
import PreLoader from "./PreLoader";
// import Header from "../components/Navbar1"
function Home() {
  return (
    <>
    <PreLoader/>
    {/* <Header/> */}
      <h4 className="home"><i class="fa fa-home" aria-hidden="true">&nbsp;</i>Home</h4>
      <div className="backimg1">      
      <h6 className="compname">
        <img className="imgstyling" src={logo1} alt="logo"></img>
      </h6>
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
    
      </div>
      
      <div className="imgback2">
      <div className="fullprod">
        <h4>&nbsp;</h4>
      <h3 className="oprod">Our Products</h3>
       <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="/products" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src={oil1} alt="Coconut oil" className="sun1" />
        </div>

        <div class="ag-courses-item_date-box">
          <span class="ag-courses-item_date">
            Coconut Oil
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="/products" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src={oil2} alt="Groundnut Oil" className="sun1" />
        </div>

        <div class="ag-courses-item_date-box">
          <span class="ag-courses-item_date">
            Groundnut oil
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="/products" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src={oil3} alt="Gingelly Oil" className="sun1" />
        </div>

        <div class="ag-courses-item_date-box">
        
          <span class="ag-courses-item_date">
            Gingelly Oil
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="/products" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src={oil4} alt="Castor oil" className="sun1" />
          
        </div>

        <div class="ag-courses-item_date-box">
          
          <span class="ag-courses-item_date">
            Castor Oil
          </span>
        </div>
      </a>
    </div>
    <div class="ag-courses_item">
      <a href="/products" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src={group} alt="Castor oil" className="sun1" />
          
        </div>

        <div class="ag-courses-item_date-box">
          
          <span class="ag-courses-item_date">
            And Many Combo Packs
          </span>
        </div>
      </a>
    </div>
    </div>
    </div>
</div>
</div>
       
      <h4 className="Quote1">Quality in Every Drop</h4>

    <div className="backimg3">
      <div class="row" id="info" >
        <div class="col-sm-3">
          <div class="card3">
            <div class="card-body">
              <img src={sunFil} alt="SunLight Filteration" className="sun" />
              <h5 class="card-title" >Sunlight Filteration</h5>

            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card3">
            <div class="card-body">
              <img src={noprev} alt="No Preservatives" className="sun" />
              <h5 class="card-title">No Preservatives</h5>

            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card3">
            <div class="card-body">
              <img src={adultfree} alt="Adulteration Free" className="sun" />
              <h5 class="card-title">Adulteration Free</h5>

            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card3">
            <div class="card-body">
              <img src={natprod} alt="Natural Product" className="sun" />
              <h5 class="card-title">No Chemicals</h5>

            </div>
          </div>
        </div>
      </div>
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
      
        <ScrollToTop/>
    </>
  )
}

export default Home;