import React from 'react';

const Section = (props) => {
  const { children } = props;
  return <section className="box">{children}</section>;
};

export default Section;
