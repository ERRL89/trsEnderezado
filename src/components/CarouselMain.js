import React from 'react';
import { useMediaQuery } from 'react-responsive';
import "../styles/CarouselMain.scss";
import fondo from "../images/fondo.png"


const CarouselMain = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  return (  
    <div className="imgFondoContainer">
            {isMobile && <img src={fondo} alt="Transfors Enderezado y Pintura Piedras Negras"/>}
       </div>
  );
};

export default CarouselMain;
