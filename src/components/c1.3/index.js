import React from "react";
import Comp1 from "../c1.2"
import "./style.css"

function All(){
    return(
        <div className="wrap">
            <div className="wrap1">
         <Comp1 />
         <Comp1 />
         </div>
         <div className="wrap2">
         <Comp1 />
         <Comp1 />
         </div>
         
         


         </div>

    );
}

export default All;