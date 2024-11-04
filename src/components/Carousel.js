import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import "../styles/Carousel.scss";
import Whats from './Whats';
import img1 from "../images/carousel/1.png"
import img2 from "../images/carousel/2.png"
import img3 from "../images/carousel/3.png"
import img4 from "../images/carousel/4.png"
import img5 from "../images/carousel/5.png"

const Carousel = () => {

    const [anos, setAnos] = useState(0);
    const [reparaciones, setReparaciones] = useState(0);
    const [clientes, setClientes] = useState(0);

    let anosMax=20
    let reparacionesMax=1800
    let clientesMax=400

    useEffect(() => {
      const intervalId1 = setInterval(() => {
        if (anos < anosMax) {
          setAnos(anos + 1);
        } else {
          clearInterval(intervalId1);
        }
      }, 10);

      return () => clearInterval(intervalId1);
    }, [anos]);

    useEffect(() => {
        const intervalId2 = setInterval(() => {
          if (reparaciones < reparacionesMax) {
            setReparaciones(reparaciones + 10);
          } else {
            clearInterval(intervalId2);
          }
        }, 5);
  
        return () => clearInterval(intervalId2);
      }, [reparaciones]);

      useEffect(() => {
        const intervalId3 = setInterval(() => {
          if (clientes < clientesMax) {
            setClientes(clientes + 5);
          } else {
            clearInterval(intervalId3);
          }
        }, 10);
  
        return () => clearInterval(intervalId3);
      }, [clientes]);

  return (
    <div className="mb-5 carouselContainer" id="inicio">
        <div className="carouselText">
            <Fade><h1 className="title1 mt-3"><b>TRS Enderezado Y Pintura para automóviles</b></h1></Fade>
            <h2 className="mb-3 title2">"Restauramos tu auto a la perfección, con acabados de alta calidad y una atención al detalle que marcará la diferencia. Devuelve a tu vehículo el brillo y la elegancia que merece."</h2>
            <span className="firstText">En TRS, somos apasionados por los automóviles. Con años de experiencia en la industria, hemos perfeccionado el arte de la restauración. Utilizamos técnicas avanzadas y productos de la más alta calidad para garantizar que tu vehículo quede como nuevo. Cada detalle, desde la preparación de la superficie hasta la aplicación de la pintura, se realiza con la máxima precisión y cuidado. Confía en nosotros para devolverle a tu auto el brillo y la elegancia que merece.</span>
            <Fade><div className="container containerDatosMain mt-4 mb-3">
                <div className="containerDatos">
                    <span className="text-center contadorNum fw-bold" id="anosExp">{"+"+anos}</span><br/>
                    <span className="contadorNumText fw-bold">Años de experiencia</span>
                </div>
                <div className="containerDatos">
                    <span className="contadorNum fw-bold" id="reparaciones">{"+"+reparaciones}</span><br/>
                    <span className="contadorNumText fw-bold">Reparaciones realizadas</span>
                </div>
                <div className="containerDatos">
                    <span className="contadorNum fw-bold" id="clientes">{"+"+clientes}</span><br/>
                    <span className="contadorNumText fw-bold">Clientes satisfechos</span>
                </div>
            </div></Fade>
            
            <Fade cascade="true" direction="left"><div className="mt-4 container containerBtn1">
               <Whats classStyle="col-sm-6 mb-2 fw-bold btn btnCarousel" phoneNumber="528115650144" message="Hola, quiero más información acerca de sus servicios." text="CONTÁCTANOS" />
            </div></Fade>
        </div>
               
        <div className="carouselImages">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner imgBox">
                    <div className="carousel-item active">
                        <center><img src={img1} className="d-block w-100 " alt=""/></center>
                    </div> 
                    <div className="carousel-item">
                        <center><img src={img2} className="d-block w-100 " alt=""/></center>
                    </div> 
                    <div className="carousel-item">
                        <center><img src={img3} className="d-block w-100 " alt=""/></center>
                    </div> 
                    <div className="carousel-item">
                        <center><img src={img4} className="d-block w-100 " alt=""/></center>
                    </div> 
                    <div className="carousel-item">
                        <center><img src={img5} className="d-block w-100 " alt=""/></center>
                    </div> 
                </div>
            </div> 
        </div>
    </div>
  );
};

export default Carousel;
