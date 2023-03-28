import "../css/About.css";
import woodimg from "../assets/woodimg.jpg";
import aliveoil from "../assets/transform.jpeg";
import coconut from "../assets/coconut.jpeg";
import castor from "../assets/images2.jpeg";
import ginger from "../assets/Ginger-oil.jpg";
import olives from "../assets/oliveoils.jpg";

function About() {
  return (
    <>
      <h4 className="about">
        <i class="fa-solid fa-circle-info"></i>&nbsp; About
      </h4>
      {/* <div class="container-fluid">
            
            <div className="image">
                <img className="imglogo" src={woodimg}/>
            </div>
            <div className="text">
                <h1 style={{fontWeight:"bold",fontFamily:"italic"}}><q>A traditional is kept alive only by something being added to it</q></h1><br/>
                <h5>We are passionate about providing you with high-quality cooking oils that are not only
                    healthy but also delicious. Our company prides itself on using only the finest ingredients 
                    and the traditional manufacturing technology to ensure that you get the best products possible.</h5>
               
            </div>
        </div>
        <div class="container-fluid">
        <div className="text">
                <h1 style={{fontWeight:"bold",fontFamily:"italic"}}><q>An oil made of love</q></h1><br/>
                <h5>Our cooking oils come in a variety of flavors, including traditional vegetable
                     oil, canola oil, olive oil, and coconut oil. </h5>
            </div>
        <div className="images">
            <img className="imglogos" src={aliveoil} />
        </div>
        </div> */}

      

      <section class="section mt-5">
        
          <div class="row">
            <div class="col-lg-6">
              <div className="image">
                <img className="imglogos" src={aliveoil} />
              </div>
            </div>
            <div class="col-md-6 col-lg-6  d-flex align-items-center mt-4 mt-md-0 pt-3 ">
              <div>
                <p>Align image and text in same line in bootstrap</p>
              </div>
            </div>
          </div>
       
      </section>

      <div className="product">
        <h2>OUR PRODUCT</h2>
      </div>
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img className="imglogos" src={coconut} />
          </a>
          <div class="desc">Coconut Oil</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_forest.jpg">
            <img className="imglogos" src={castor} />
          </a>
          <div class="desc">Castor Oil</div>
        </div>
      </div>
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_lights.jpg">
            <img className="imglogos" src={ginger} />
          </a>
          <div class="desc">Ginger Oil</div>
        </div>
      </div>
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_mountains.jpg">
            <img className="imglogos" src={olives} />
          </a>
          <div class="desc">Olive Oil</div>
        </div>
      </div>

      <div className="foot">
        <h2>
          Thank you for choosing our Cooking Oil Company for all your cooking
          needs. <br />
          We look forward to serving you! :) :)
        </h2>
      </div>
      <div className="footer">
        <i class="fas fa-thumbs-up"></i>
      </div>
      
    </>
  );
}

export default About;
