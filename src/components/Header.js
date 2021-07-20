import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="top">
        <span>Put yourself first with a 5-day free trial pass today</span>
        <Link to="/login" >Login</Link>
        <Link to="/register" >Register</Link>
      </div>
      <nav>
        <menu>
          <li><Link to="/" data="HOME">HOME</Link></li>
          <li><Link to="/gallery" data="GALLERY">GALLERY</Link></li>
        </menu>
        <img src="https://png.pngtree.com/template/20191025/ourmid/pngtree-gym-logo-vector-image_323395.jpg" alt="logo" title="baker" className="logo" />
        <menu>
          <li><Link to="/about" data="ABOUT">ABOUT</Link></li>
          <li><Link to="/contact" data="CONTACT">CONTACT</Link></li>
        </menu>
      </nav>
      <div className="hero">
        <h1 class="primary_heading">PUT YOURSELF FIRST</h1>
        <Link to="contact" class="btn btn_light">CONTACT NOW</Link>
      </div>
    </header>
  )
}
