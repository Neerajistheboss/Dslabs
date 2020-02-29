import React from "react";
import Member from "./team/Member";
import NeerajImg from './assets/neeraj.jpeg';
import './App.css';
import './OurTeam.css';


let OurTeam=props=>{
    return(
        <div className="sectionContainer ourteamcontainer">
        <div className="heading" id="ourteamhead">OUR TEAM</div>
        <div className="flex-container section ourteam">
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6 col-lg-4  col-sm-12 col-xs-12"><Member memImg={NeerajImg} name="Neeraj"/></div>
                    <div className="col-md-6 col-lg-4  col-sm-12 col-xs-12"><Member memImg={NeerajImg} name="Neeraj" /></div>
                    <div className="col-md-6 col-lg-4  col-sm-12 col-xs-12"><Member memImg={NeerajImg} name="Neeraj" /></div>
                    <div className="col-md-6 col-lg-4  col-sm-12 col-xs-12"><Member memImg={NeerajImg} name="Neeraj" /></div>
                    <div className="col-md-6 col-lg-4  col-sm-12 col-xs-12"><Member memImg={NeerajImg} name="Neeraj" /></div>
                    <div className="col-md-6 col-lg-4  col-sm-12 col-xs-12"><Member memImg={NeerajImg} name="Neeraj" /></div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default OurTeam;