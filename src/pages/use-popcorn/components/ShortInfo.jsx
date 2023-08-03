import React from 'react';

const ShortInfo = (props) => {
  const { emoji, info } = props;
  return (
    <p>
      <span>{emoji}</span>
      <span>{info}</span>
    </p>
  );
};

export default ShortInfo;
