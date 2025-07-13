import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
    <div className="logo">
      <NavLink to= "/">
          <img src="assets/logo.png" alt="Aki Logo" />
      </NavLink>
    </div>
      <nav className="nav">
        <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          About
        </NavLink>
        <NavLink to="/partnership" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          Recycle with us
        </NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
