import React,{Component} from "react";
import './Footer.css'



class Footer extends Component{
    render() {
        return(
           <div className="footer">
               <span className="center">Made with    <i className="fas fa-heart"></i>     by UdsLabs
                   <p><i className="far fa-copyright"></i>Udslabs 2020</p>
               </span>
           </div>
        );
    }
}

export default Footer