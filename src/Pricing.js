import React,{Component} from "react";
import Card from "./card/card";
import PriceImg from './assets/price.png';
import './App.css';
import './Pricing.css';


class Pricing extends Component{
    render() {
        return(
            <div className="sectionContainer pricingcontainer">
            <div className="heading" id="pricinghead">PRICING</div>
            <div className="pricing flex-container section">

                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">

                        <div className="col-md-6 col-lg-4  col-sm-12 col-xs-12"><Card title="Basic"   imgSrc="noimg" icon="fas fa-rupee-sign" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor doloremque earum exercitationem illum magni minus nesciunt officia ratione voluptas."/></div>
                        <div className="col-md-6 col-lg-4  col-sm-12 col-xs-12"><Card title="Premium" imgSrc="noimg" icon="fas fa-rupee-sign" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor doloremque earum exercitationem illum magni minus nesciunt officia ratione voluptas."/></div>
                        <div className="col-md-6 col-lg-4  col-sm-12 col-xs-12"><Card title="Deluxe"  imgSrc="noimg" icon="fas fa-rupee-sign" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor doloremque earum exercitationem illum magni minus nesciunt officia ratione voluptas."/></div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Pricing