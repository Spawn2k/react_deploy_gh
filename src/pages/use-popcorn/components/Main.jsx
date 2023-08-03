import React from 'react';

const Main = (props) => {
  const { children } = props;
  return <main className="m-use-popcorn-main main">{children}</main>;
};

export default Main;
