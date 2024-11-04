import React from "react";
import { useMediaQuery } from "react-responsive";
import "../styles/ImgStart.scss";
import logo from "../images/logo2.jpg";

const ImgStart = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <>
      {isMobile && (
        <div className="container imgLogoContainer">
          <img src={logo} alt="" />
        </div>
      )}
    </>
  );
};

export default ImgStart;
