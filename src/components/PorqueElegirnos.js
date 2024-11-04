import React from "react";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";
import "../styles/PorqueElegirnos.scss";
import id1 from "../images/identificadores/1.svg";
import id2 from "../images/identificadores/2.svg";
import id3 from "../images/identificadores/3.svg";
import id4 from "../images/identificadores/4.svg";
import id5 from "../images/identificadores/5.svg";

const PorqueElegirnos = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  let velFade = 2000;

  const tarjetas = [
    {
        id: 1,
        imagen: id1,
        titulo: 'Experiencia y Maestría',
        texto: 'Con 20 años de experiencia en la industria automotriz, hemos perfeccionado el arte de la restauración. Nuestro equipo de técnicos altamente capacitados te garantiza resultados impecables.',
    },
    {
        id: 2,
        imagen: id2,
        titulo: 'Calidad Garantizada',
        texto: ' Utilizamos productos de la más alta calidad y las últimas tecnologías para asegurar que tu vehículo quede como nuevo. Ofrecemos una garantía en todos nuestros trabajos para tu tranquilidad.',
    },
    {
        id: 3,
        imagen: id3,
        titulo: 'Atención al Detalle',
        texto: 'Cada vehículo es único y merece un trato especial. Ofrecemos un servicio personalizado, adaptándonos a tus necesidades y gustos. La atención al detalle es nuestra prioridad.',
    },
    {
        id: 4,
        imagen: id4,
        titulo: 'Servicio Integral',
        texto: 'Más que un taller, somos tu socio en el cuidado de tu vehículo. Ofrecemos un servicio integral que incluye desde el enderezado y pintura hasta el detallado y pulido.',
    },
    {
        id: 5,
        imagen: id5,
        titulo: 'Compromiso con el Cliente',
        texto: ' Nuestra prioridad es tu satisfacción. Nos esforzamos por brindarte un servicio excepcional y una experiencia positiva. Tu confianza es nuestro mayor activo.',
    },
  ];

  return (
    <section className="bg-body-tertiary text-center" id="porqueE">
      <center>
        <Fade>
          <h4 className="mt-5 fw-bold fs-3 firstText">
            ¿POR QUÉ ELEGIRNOS?
          </h4>
        </Fade>
      </center>
      <div className="containerCards">
            {tarjetas.map((tarjeta) => (
                <div key={tarjeta.id} className="containerCard text-center">
                    {isMobile && (
                        <Fade duration={velFade}>
                            <img className="imgCard" src={tarjeta.imagen} alt={tarjeta.titulo} />
                            <div className="containerCardText">
                                <p className="firstText fw-bold">{tarjeta.titulo}</p>
                                <p className="textIdentificador">{tarjeta.texto}</p>
                            </div>
                        </Fade>
                    )}
                    {!isMobile && (
                        <div>
                            <img className="imgCard" src={tarjeta.imagen} alt={tarjeta.titulo} />
                            <div className="containerCardText">
                                <p className="firstText fw-bold">{tarjeta.titulo}</p>
                                <p className="textIdentificador">{tarjeta.texto}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
      </div>
      <br/><br/><br/>
    </section>
  );
};

export default PorqueElegirnos;
