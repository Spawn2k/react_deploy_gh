import React from 'react';

const Footer = (props) => {
  // const {} = props;
  const currentYear = new Date().getFullYear();
  return (
    <footer className="m-todo-footer">
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
};

export default Footer;
