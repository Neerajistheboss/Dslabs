import React from "react";
import './Navbar.css';

let Navbar=props=>{
    return(
        <div className="navconatiner shadow">
            <nav className="navbar fixedTop navbar-fixed navbar-dark bg-dark navbar-expand-lg">
                <a className="navbar-brand" href="#home">UDSlabs</a>
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon" data-toggle="collapse" data-target="#navbarMenu"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                        <li className="nav-item"><a href="#techstack" className="nav-link">Technologies</a></li>
                        <li className="nav-item"><a href="#pricing" className="nav-link">Pricing</a></li>
                        <li className="nav-item"><a href="#ourteam" className="nav-link">Team</a></li>
                        <li className="nav-item"><a href="#contactus" className="nav-link">Contact</a></li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;