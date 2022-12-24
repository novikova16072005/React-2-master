import React from "react";
import "./style.css"

function FooterRight4(){
    return(
        <div className="wrapFR4">
             <h3 className="h3FR4">Contact Us</h3>
             <hr className="hrH3FR4"></hr>
             <p className="AnotherName">Name *</p>
             <input className="input1"></input>
             <p className="Email">Email *</p>
             <input className="input2"></input>
             <input className="input3"></input>
             <div className="wrapForButtons">
               <button className="bSubmit">SUBMIT</button>
               <button className="bReset">RESET</button>
             </div>
             
         
         </div>

    );
}

export default FooterRight4;