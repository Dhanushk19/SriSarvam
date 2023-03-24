import React, { useEffect } from "react";
import { preLoaderAnim } from "../animation/animation";
import "../css/PreLoader.css";
function PreLoader()
{

    useEffect(()=>
    {
        preLoaderAnim();
    },[]);
    return(
        <div className="preloader">
            <div className="texts-container">
                <span>Quality,</span>
                <span>Quantity,</span>
                <span>Trust.</span>
            </div>
        </div>
    )
}

export default PreLoader;