import React from "react";
import { Fade } from "react-awesome-reveal";
import "../styles/Footer.scss";
import facebook from "../images/redes/Caralibro.svg"
import Instagram from "../images/redes/Instagram.svg"
import Linkedin from "../images/redes/Linkedin.svg"
import Tiktok from "../images/redes/Tik tok.svg"
import EsX from "../images/redes/X.svg"
import appStore from "../images/App.svg"
import logo from "../images/logo.svg"

const Footer = () => {

  return (
    <footer id="contacto">
        <div className="containerFooter">

            <div className="column1">
                <a href="./index.php"><img src={logo} alt="Logo Coorporativo Salcedo"/></a>
                <div className="containerTextColumn1">
                    <p>En TRS, somos apasionados de los automóviles y ofrecemos restauraciones excepcionales. Con años de experiencia y productos de alta calidad, devolvemos a tu vehículo su brillo original. Cada detalle se cuida con precisión. Confía en nosotros para que tu auto luzca como nuevo.</p>
                </div>
            </div>

            <div className="column2">
                <div>
                    <p>NOSOTROS</p>
                    <div className="textColumn2">
                        <a href="#inicio"><span>Conócenos</span></a><br/>
                        <a href="#porqueE"><span>¿Porque elegirnos?</span></a><br/>
                    </div>
                </div><br/>
                <div>
                    <p>DATOS DE CONTACTO</p>
                    <div className="textColumn2">
                        <a href="mailto:transforspintura@gmail.com"><span>transforspintura@gmail.com</span></a><br/>
                        <a href="tel:+528115650144"><span>811 5650 144</span></a>
                    </div>
                </div>
            </div>
            
            <div className="column3">
                <div>
                    <p>SERVICIOS</p>
                    <div className="textColumn3">
                        <a href="#servicio1"><span>Pintura Automotriz</span></a><br/>
                        <a href="#servicio2"><span>Pulido de Pintura</span></a><br/><br/>
                        <span className="ubicacionTitle">UBICACIÓN</span><br/>
                        <a href="https://maps.app.goo.gl/gmaUagwWDGdEfW1Z8" ><span id="ubicacion">210 Calle General Ignacio Zaragoza, Santa Catarina, Mexico</span></a><br/>
                        
                    </div>
                </div>
            </div>

            <div className="column4">
                <div>
                    <p>APPS</p>
                    <div>
                        <span>Proximamente</span>
                    </div>
                    <div className="containerImgApp">
                        <img src={appStore} alt=""/>
                    </div>
                </div>
                
                <div className="containerRedes">
                    <Fade cascade="true" direction="left"><a href="https://www.facebook.com/transforspintura"><img src={facebook} alt="Facebook TRS Enderezado y Pintura"/></a></Fade>
                    <Fade cascade="true" direction="left"><a href="https://www.facebook.com/transforspintura"><img src={Instagram} alt="Facebook TRS Enderezado y Pintura"/></a></Fade>
                    <Fade cascade="true" direction="left"><a href="https://www.facebook.com/transforspintura"><img src={Tiktok} alt="Facebook TRS Enderezado y Pintura"/></a></Fade>
                    <Fade cascade="true" direction="left"><a href="https://www.facebook.com/transforspintura"><img src={EsX} alt="Facebook TRS Enderezado y Pintura"/></a></Fade>
                    <Fade cascade="true" direction="left"><a href="https://www.facebook.com/transforspintura"><img src={Linkedin} alt="Facebook TRS Enderezado y Pintura"/></a></Fade>
                </div>
            </div>

        </div>
</footer>
  );
};

export default Footer;

