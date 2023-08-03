import React from 'react';

const Loader = (props) => {
  const { bgColor = '', borderColor = '#5eead4' } = props;
  return (
    <div style={{ backgroundColor: bgColor }} className="loading-wraper">
      <div className="loading">
        <div style={{ borderColor: borderColor }} className="inner one"></div>
        <div style={{ borderColor: borderColor }} className="inner two"></div>
        <div style={{ borderColor: borderColor }} className="inner three"></div>
      </div>
    </div>
  );
};

export default Loader;
