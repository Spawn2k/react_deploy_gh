import React from 'react';

const Certificate = (props) => {
  const {
    cert,
    index,
    setShowModal,
    setCertificatesIndex,
    certificate: { icon, image, name },
  } = props;

  const handleClick = (e) => {
    setShowModal(true);
    setCertificatesIndex(index);
  };
  return (
    <div ref={cert} onClick={handleClick} className="test">
      <figure>
        <img src={image} alt="" width="100" />
      </figure>
      <figcaption>
        <p className="certificate-title">{name}</p>
        <p className="certificate-icon">{icon}</p>
      </figcaption>
    </div>
  );
};

export default Certificate;
