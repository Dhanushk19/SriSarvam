import "../css/Contact.css";
import Top from "../components/top";
import Whatsapp from "./Whatsapp";
function Contact()
{
    return(
        <>
        <h4 className="contact"><i class="fa-solid fa-phone"></i>&nbsp; Contact</h4>
        <div className="contactback">
        <div className="cont">
            <h4 className="title">Contact Details</h4>
            <div>
                <h5 className="add">Address : </h5>
                <p className="addc">Sri Vaari Electrical Building, Karur Main Road, Kalipalayam Post, near Agaram Public School, Dharapuram, Tamil Nadu - 638661</p>
            </div>
            <div>
                <h5 className="add">Whatsapp : </h5>
                <p className="addp">9788718180</p>
            </div>
            <div>
                <h5 className="add">Phone : </h5>
                <p className="addp">9788718180</p>
            </div>
            <div>
                <h5 className="add">Email : </h5>
                <p className="addc">srisarvamoils@gmail.com</p>
            </div>
            <div>
                <h5 className="add">Store Open : </h5>
                <p className="addc">8 A.M - 8 P.M , Mon - Sat</p>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7343287209046!2d77.55785721462236!3d10.754946792336034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9bff3bc7e53db%3A0x16ee73dee6c13b8e!2sSri%20Sarvam%20Oils!5e0!3m2!1sen!2sin!4v1679411663456!5m2!1sen!2sin"   styles={{border:'0'}} className="map"  loading="lazy"  title="Sri sarvam"></iframe>
        </div>
        <Whatsapp/>
       <Top/>
        </>
    )
}
export default Contact;