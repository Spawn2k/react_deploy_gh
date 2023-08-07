import React, { useEffect, useState } from 'react';
import certificates from '../../data/certificates';
import Modal from './components/Modal';
import Header from './components/Header';
import About from './components/About';
import Certificate from './components/Certificate';
import Card from './components/Card';
import HomeBtn from './components/HomeBtn';
import OnScrollHome from './components/OnScrollHome';
import projekts from '../../data/projekts';
import { useTitle } from '../../hooks/useTitle';

const HomePage = (props) => {
  // const {} = props;
  const [showModal, setShowModal] = useState(false);
  const [certificatesIndex, setCertificatesIndex] = useState(0);
  const [onScrollShow, setOnScrollShow] = useState(false);
  const [mediaQuery, setMediaQuery] = useState(false);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    const scroll = () => {
      currentScrollPosition = window.pageYOffset;
      if (previousScrollPosition - currentScrollPosition < 0) {
        // console.log('ok');
        setOnScrollShow(true);
      }

      previousScrollPosition = currentScrollPosition;
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  useEffect(() => {
    if (onScrollShow) {
      setTimeout(() => {
        setOnScrollShow(false);
      }, 6000);
    }

    return () => {};
  }, [onScrollShow]);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;
    const mql = window.matchMedia('(max-width: 1000px)');

    const scroll = () => {
      currentScrollPosition = window.pageYOffset;
      if (previousScrollPosition - currentScrollPosition < 0) {
        setOnScrollShow(true);
      }

      previousScrollPosition = currentScrollPosition;
    };
    const onChange = (e) => {
      const matches = e.matches;
      if (!matches) {
        window.removeEventListener('scroll', scroll);
        setMediaQuery(false);
      }
      if (matches) {
        setMediaQuery(true);
      }
    };

    if (mediaQuery) {
      window.addEventListener('scroll', scroll);
    }

    if (mql.matches) {
      window.addEventListener('scroll', scroll);
      setOnScrollShow(false);
      setMediaQuery(true);
    }

    if (!mql.matches) {
      window.removeEventListener('scroll', scroll);
      setMediaQuery(false);
    }

    mql.addEventListener('change', onChange);

    return () => {
      window.removeEventListener('scroll', scroll);
      mql.removeEventListener('change', onChange);
    };
  }, [mediaQuery]);

  useEffect(() => {
    const pageIcon = document.querySelector('link[rel~="icon"]');
    pageIcon.href = 'assets/icon/react.svg';

    document.title = 'Homepage';
    document.title.ic;
    return () => {
      document.title = '';
    };
  }, []);

  return (
    <div className="homepage">
      <main className="m-home-page-main">
        {showModal && (
          <Modal
            certificates={certificates[certificatesIndex]}
            onClose={() => setShowModal(false)}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}

        <section className="section-left">
          <Header mediaQuery={mediaQuery} onScrollShow={onScrollShow} />
        </section>

        <section className="section-right">
          <About />
          <div className="certificate-container" id="certificate">
            {certificates.map((certificate, idx) => (
              <Certificate
                index={idx}
                setShowModal={setShowModal}
                key={idx}
                certificate={certificate}
                setCertificatesIndex={setCertificatesIndex}
              />
            ))}
          </div>

          <ul id="projects" className="card-list">
            {projekts.map((projekt, idx) => (
              <Card key={idx} projekt={projekt} />
            ))}
          </ul>
        </section>

        {onScrollShow && <OnScrollHome onScrollShow={onScrollShow} />}
      </main>
    </div>
  );
};

export default HomePage;
