import React from "react";
import { Fade } from "react-awesome-reveal";
import Whats from './Whats';
import "../styles/Services.scss";
import img1 from "../images/services/1.png";
import img2 from "../images/services/2.png";
import img3 from "../images/services/3.png";
import img4 from "../images/services/4.png";
import img5 from "../images/services/5.png";
import img6 from "../images/services/6.png";

const Services = () => {
  const servicios = [
    {
        id: 1,
        imagen: img1,
        titulo: 'Pintura Automotriz',
        texto: 'Nuestro servicio es meticuloso y personalizado, comenzamos con una preparación exhaustiva de la superficie, eliminando cualquier imperfección y asegurando una adherencia perfecta de la pintura. Luego, aplicamos varias capas de pintura de la más alta calidad, utilizando las técnicas más avanzadas para lograr un acabado impecable y duradero. Finalmente, ofrecemos una amplia gama de acabados especiales, como mate, perlado y camaleón, para que puedas personalizar tu vehículo y hacerlo destacar entre la multitud.¡Tu imaginación es nuestro límite!"',
    },
    {
        id: 2,
        imagen: img2,
        titulo: 'Pulido de Pintura',
        texto: 'Devuelve a tu vehículo su brillo original al eliminar arañazos ligeros, manchas y oxidación. Utilizamos técnicas avanzadas y productos de alta calidad para garantizar un acabado impecable. El proceso incluye una inspección inicial, un lavado a fondo, seguido de varias etapas de pulido y la aplicación de selladores y ceras para proteger la pintura. Confía en nosotros para que tu coche luzca como nuevo y mantenga su valor.',
    },
    {
        id: 3,
        imagen: img3,
        titulo: 'Descontaminación de Pintura',
        texto: 'Elimina impurezas como alquitrán, savia y contaminantes industriales que el lavado regular no puede quitar. Utilizamos técnicas avanzadas y productos especializados para asegurar una superficie limpia y lisa. Este proceso mejora el aspecto de tu coche y prepara la pintura para tratamientos posteriores como pulido y encerado. Contáctanos para agendar tu cita y darle a tu auto el cuidado que merece.',
    },
    {
        id: 4,
        imagen: img4,
        titulo: 'Restauración de Automóviles',
        texto: 'Reparamos golpes y rayones en vehículos de todos los años, ya sean viejos o modernos. Nos enfocamos en devolverles su apariencia original mediante un mantenimiento completo. Utilizamos técnicas avanzadas y materiales de alta calidad para evaluar, reparar y proteger tu coche. Contáctanos para transformar tu vehículo en una joya de la carretera.',
    },
    {
        id: 5,
        imagen: img5,
        titulo: 'Reparación de Piezas',
        texto: 'Nos especializmos en restaurar componentes antiguos que son difíciles de conseguir. Utilizamos técnicas avanzadas y materiales de alta calidad para reparar y restaurar estas piezas, dejándolas como nuevas. Ya sea que necesites restaurar partes de un vehículo clásico, nuestro equipo está preparado para devolverles su funcionalidad y apariencia original. No dejes que la escasez de piezas te detenga.',
    },
    {
        id: 6,
        imagen: img6,
        titulo: 'Piezas de Colisión',
        texto: 'Ofrecemos cambio y venta de piezas de colisión, incluyendo puertas, cofre, cajuela, calaveras, faros y más. Contamos con un amplio inventario de piezas nuevas y usadas de alta calidad. Nuestro equipo te asesorará en la selección y se encargará del cambio de manera profesional y eficiente. No dejes que los daños afecten la apariencia de tu vehículo.',
    },
  ];

  return (
    <div id="allServices">
    <h4 className="fw-bold title">NUESTROS SERVICIOS</h4>
    {servicios.map((servicio) => (
      <section className="cursosContainer" id={"servicio"+servicio.id} key={servicio.id}>
          <div className="imgContainer text-center">
            <Fade  duration="1000"><img src={servicio.imagen} alt={servicio.titulo} /></Fade>
          </div>
          <div className="infoCursoContainer">
              <Fade duration="1000"><span className="titleService"><strong>{servicio.titulo}</strong></span></Fade>
              <span className="textService">{servicio.texto}</span>
              
              <div className="btnServiceContainer">
                <Whats classStyle="btn btnService" phoneNumber="528115650144" message="Hola, quiero más información acerca de sus servicios." text="¡Más información!"/>
              </div>
          </div>
      </section>
    ))}
    </div>
  );
};

export default Services;
