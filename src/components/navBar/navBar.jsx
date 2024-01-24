import React,{useState} from "react";
import './navBar.css';
import Logo from '../../assets/img/logo.png';

function NavBar() {
  return (
    <div>
      <div className="navBar container-fluid">
      <img src={Logo} alt="logo" className="logo" />
      <h2 className="shopName">Salon Sampath</h2>
        <ul className="navBarUl">
            <li><a className="active" href="#home">HOME</a></li>
            <li><a className="" href="#bookings">SERVICES</a></li>
            <li><a className="" href="#bookings">GALLERY</a></li>
            <li><a className="" href="#bookings">BOOKINGS</a></li>
            <li><a className="" href="#about">ABOUT</a></li>
            <li><a className="" href="#contact">CONTACT</a></li>
            <li><a className="" href="#login">LOGIN</a></li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
