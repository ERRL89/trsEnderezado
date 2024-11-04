import React from "react";
import ImageGallery from "react-image-gallery";
import "../styles/Galery.scss";

const Galery = () => {
  const images1 = [
    {
      original: "https://trsenderezadoypintura.com/galery/1/1.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/1/1.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/1/2.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/1/2.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/1/3.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/1/3.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/1/4.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/1/4.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/1/5.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/1/5.png",
    },
  ];
  const images2 = [
    {
      original: "https://trsenderezadoypintura.com/galery/2/1.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/2/1.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/2/2.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/2/2.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/2/3.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/2/3.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/2/4.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/2/4.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/2/5.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/2/5.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/2/6.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/2/6.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/2/7.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/2/7.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/2/8.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/2/8.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/2/9.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/2/9.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/2/10.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/2/10.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/2/11.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/2/11.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/2/12.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/2/12.png",
    },
  ];
  const images3 = [
    {
      original: "https://trsenderezadoypintura.com/galery/3/1.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/3/1.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/3/2.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/3/2.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/3/3.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/3/3.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/3/4.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/3/4.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/3/5.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/3/5.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/3/6.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/3/6.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/3/7.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/3/7.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/3/8.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/3/8.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/3/9.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/3/9.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/3/10.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/3/10.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/3/11.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/3/11.png",
    },
  ];
  const images4 = [
    {
      original: "https://trsenderezadoypintura.com/galery/4/1.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/4/1.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/4/2.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/4/2.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/4/3.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/4/3.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/4/4.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/4/4.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/4/5.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/4/5.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/4/6.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/4/6.png",
    },
    {
      original: "https://trsenderezadoypintura.com/galery/4/7.png",
      thumbnail: "https://trsenderezadoypintura.com/galery/4/7.png",
    },
  ];

  return (
    <div className="p-3 text-center">
      <h3 className="mt-3 mb-3 fw-bold">Galería de Imágenes</h3>
      <ImageGallery items={images1} />
      <hr />
      <ImageGallery items={images2} />
      <hr />
      <ImageGallery items={images3} />
      <hr />
      <ImageGallery items={images4} />
    </div>
  );
};

export default Galery;
