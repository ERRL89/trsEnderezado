import React from "react";
import callToAction from "../images/callToAction.svg";
import "../styles/Call.scss";

const Call = () => {
  const whats = () => {
    const phoneNumber = "528115650144"; 
    const message = "Hola, me gustaría obtener más información de sus servicios.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <div className="callContainer" onClick={whats}>
      <img className="callImg" src={callToAction} alt="Contacto"></img>
    </div>
  );
};

export default Call;

