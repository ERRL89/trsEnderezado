import React from "react";
import Whats from "./Whats";
import { Fade } from "react-awesome-reveal";
import "../styles/Header.scss";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navBarCustom bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <img className="imgLogo" src={logo} alt="Logo Corporativo Salcedo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#inicio">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#porqueE">
                  ¿Por qué elegirnos?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#allServices">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="galery">
                  Galeria
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Fade cascade="true" direction="left">
                <Whats
                  classStyle="btn btnContactanos"
                  message="Hola, quiero más información."
                  text="Contáctanos"
                />
              </Fade>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
