import React from "react";
import Member from "./team/Member";
import NeerajImg from './assets/neeraj.jpeg';
import './App.css';
import './techstack.css';


let Techstack=props=>{
    return(
        <div className="sectionContainer techstackcontainer" id="tek">
            <div className="heading" id="techstackhead">Tech-Stack</div>
            <div className="flex-container section techstack text-center">
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">

                        <div className="col-md-4 col-lg-3 col col-sm-4 col-xs-4 logo"><i className="fab fa-js techicon"></i></div>
                        <div className="col-md-4 col-lg-3 col col-sm-4 col-xs-4 logo"><i className="fab fa-react techicon"></i></div>
                        <div className="col-md-4 col-lg-3 col col-sm-4 col-xs-4 logo"><i className="fab fa-node techicon"></i></div>
                        <div className="col-md-4 col-lg-3 col col-sm-4 col-xs-4 logo"><i className="fab fa-html5 techicon"></i></div>
                        <div className="col-md-4 col-lg-3 col col-sm-4 col-xs-4 logo"><i className="fab fa-java techicon"></i></div>
                        <div className="col-md-4 col-lg-3 col col-sm-4 col-xs-4 logo"><i className="fab fa-wordpress techicon"></i></div>
                        <div className="col-md-4 col-lg-3 col col-sm-4 col-xs-4 logo"><i className="fab fa-css3 techicon"></i></div>
                        <div className="col-md-4 col-lg-3 col col-sm-4 col-xs-4 logo"><i className="fab fa-android techicon"></i></div>
                        <div className="col-md-4 col-lg-3 col col-sm-4 col-xs-4 logo"><i className="fab fa-github techicon"></i></div>
                        <div className="col-md-4 col-lg-3 col col-sm-4 col-xs-4 logo"><i className="fab fa-angular techicon"></i></div>
                        <div className="col-md-4 col-lg-3 col col-sm-4 col-xs-4 logo"><i className="fab fa-python techicon"></i></div>
                        <div className="col-md-4 col-lg-3 col col-sm-4 col-xs-4 logo"><i className="techtext">and many more...</i></div>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default Techstack;