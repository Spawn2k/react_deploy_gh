import React from 'react';

const About = (props) => {
  const { about } = props;
  return (
    <div ref={about} id="about" className="m-about">
      {/* <p>Hi, ich heiße Tuan und bin junior front end developer.</p> */}
      <p>
        Was mich an diesen Beruf zu reizt, ist einfach der Entstehungsprozess, sprich das Planen und das Umsetzten von
        Projekten. Das man als Frontend Developer aus dem Nichts nur mit Code schöne Apps bauen kann.
      </p>
      <p>
        Es macht mir super viel Spaß täglich neue Lösungsansätze zu entdecken und die in meinen Projekten zu
        integrieren, damit die Anwendung stabiler und cleaner wird.
      </p>
      <p>
        Ich habe bei der Firma GFN eine Weiterbildung in den Kursen Webdesign, JavaScript, PHP und MySQL absolviert und
        erfolgreich bestanden.
      </p>
      <p>Danach habe ich mich mit React intensiv beschäftigt und konnte einige Projekte mit React umsetzten</p>
    </div>
  );
};

export default About;
