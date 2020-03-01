import React,{Component} from "react";
import HeaderImg from "./assets/header-image.png";
import './App.css';
import './Intro.css';


class Intro extends Component{
    render() {
        return(
            <div className="intro">
                <img className="headerImg" src={HeaderImg} alt="Header Image"/>
                <div className="text-center companyname">UdsLabs</div>
                <div className="text-center tagline">We create solutions</div>
            </div>
        );
    }
}

export default Intro