import React from 'react';
import './card.css';


const Card=props=>{
    let imgSrc=props.imgSrc;
    return(
        <div className="card text-center">
            <div className="overflow">
                {
                    (props.imgSrc==="noimg")
                        ?<i className={`${props.icon} cardimg`}></i>
                        :<img src={imgSrc} alt="Service" className="card-img-top"/>
                }

            </div>
            <div className="card-body text-dark">
                <h4 className="card-title text-center">{props.title}</h4>
                <p className="card-text text-secondary">{props.info}</p>
                <a  className="ourbtn1 text-center" href="#">Know More</a>
            </div>
        </div>

    );
};
export default Card;