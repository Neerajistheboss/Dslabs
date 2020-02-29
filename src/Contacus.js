import React from "react";
import './App.css';
import './Contactus.css';
import ContactForm from "./ContactForm";


let Contactus=props=>{
    return(
        <div  className="sectionContainer contactcontainer">
            <div className="heading" id="contacthead">CONTACT US</div>
            <div className="section contactus">
                <p className="address">B.I.T,Sindri <br/>
                    City: Dhanbad
                    PIN:828122<br/>
                    Phone: +918434782113
                </p>
                <ContactForm/>
            </div>

        </div>
    );
}

export default Contactus;