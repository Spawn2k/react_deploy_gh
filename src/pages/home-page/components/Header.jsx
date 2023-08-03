import React from 'react';
import Nav from './Nav';

const Header = (props) => {
  const { onScrollShow, mediaQuery } = props;

  return (
    <header className="m-header">
      <h1>Nguyen Duy Tuan</h1>
      <h3>Junior Developer</h3>
      <p className="headline-info">
        Ein frischer Junior Developer der seine Leidenschaft fürs programmieren entdeckt.
        {/* Mein motte das mich antreibt.
        "Jede Leistung fängt mit der Entscheidung an, es zu versuchen." */}
      </p>
      {/* {test && <p>hello Wolrd</p>} */}

      {!mediaQuery && <Nav />}
      {mediaQuery && onScrollShow && <Nav mediaQuery={mediaQuery} onScrollShow={onScrollShow} />}
    </header>
  );
};

export default Header;
