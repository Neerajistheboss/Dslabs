import React,{Component} from "react";
import Card from "./card/card";
import Mobile from './assets/cardapp.png'
import Website from './assets/cardweb4.png'
import Game from './assets/cardgame2.png'
import './App.css';
import './Services.css';



class Services extends Component{
    render() {
        return(
            <div id="Services" className="sectionContainer servicescontainer">
                <div className="heading " id="servicehead">SERVICES</div>
                <div className="services flex-container section">

                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-6 col-lg-4  col-sm-12 col-xs-12"><Card title="MOBILE APP" info="" imgSrc={Mobile}/></div>
                            <div className="col-md-6 col-lg-4  col-sm-12 col-xs-12"><Card title="WEBSITE" info="" imgSrc={Website}/></div>
                            <div className="col-md-6 col-lg-4  col-sm-12 col-xs-12"><Card title="GAME"  info="" imgSrc={Game}/></div>

                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Services