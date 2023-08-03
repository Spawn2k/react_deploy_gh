import React, { useEffect, useRef, useState } from 'react';

const Modal = (props) => {
  const {
    certificates: { image, name },
    onClose,
  } = props;
  const ref = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [onClose]);

  return (
    <div className="m-modal modal-backdrop">
      <div className="modal-content-wrapper">
        <img ref={ref} className="img" src={image} alt={name} width="200" />
      </div>
    </div>
  );
};

export default Modal;
