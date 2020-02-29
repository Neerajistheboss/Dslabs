import React from 'react';
import logo from './logo.svg';
import './App.css';
import Services from './Services';
import Pricing from "./Pricing";
import OurTeam from "./OurTeam";
import Navbar from './Navbar.js' ;
import Contactus from "./Contacus";
import Techstack from "./techstack";
import Footer from "./Footer";

function App() {
  return (
      <div className="App">
        <Navbar />
        <section id="services" className="check"><Services/></section>
        <section id="techstack" className="check"><Techstack/></section>
        <section id="pricing" className="check"><Pricing /></section>
        <section id="ourteam" className="check"><OurTeam/></section>
        <section id="contactus" className="check"><Contactus/></section>
        <section className="check"><Footer /></section>
    </div>
  );
}

export default App;
