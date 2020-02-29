import React from "react";
import './Member.css';
const Member=props=>{
    let memberImg=props.memImg;
    return(
        <div className="member text-center">
            <img src={memberImg} alt="member" className="photo card-img-top"  />
            <h4>{props.name}</h4>
        </div>
    )
}
export default Member;