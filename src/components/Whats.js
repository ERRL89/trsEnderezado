import React from 'react';

const Whats = ({ phoneNumber, message, classStyle, text }) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button className={classStyle} onClick={handleClick}>{text}</button>
  );
};

export default Whats;

