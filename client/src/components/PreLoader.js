import React, { useEffect } from "react";
import { preLoaderAnim } from "../animation/animation";
import "../css/PreLoader.css";
import logo1 from "../assets/logo1b.png";
function PreLoader()
{

    useEffect(()=>
    {
        preLoaderAnim();
    },[]);
    return(
        <div className="preloader">
            <div className="texts-container">
                <img src={logo1} alt="logo" width="65%" height="80%"></img>
                
            </div>
        </div>
    )
}

export default PreLoader;