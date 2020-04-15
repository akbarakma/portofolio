import React from 'react';
import myImage from '../public/myImage.jpg';

const HomeHeader = (props) => {
  const { scrollToContact } = props;
  return (
    <div style={{ paddingTop: '80px', backgroundColor: 'grey', height: '650px' }}>
      <a href="https://github.com/akbarakma" target="_blank" rel="noopener noreferrer">
        <img style={{ position: 'absolute', top: '0', right: '0', border: '0' }} src="https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" />
      </a>
      <div data-aos="flip-down">
        <img src={ myImage } alt="Akbar Danial Akma" style={{ height: '250px', width: '250px', borderRadius: '50%' }} />
      </div>
      <div data-aos="zoom-in-right">
        <h1 style={{ fontSize: '50px' }} className="mt-4">AKBAR DANIAL AKMA</h1>
      </div>
      <hr style={{ border: 'white 1px solid', width: '600px' }} />
      <div data-aos="zoom-in-left">
        <h3 style={{ color: 'white' }}>Fullstack Javascript Developer</h3>
      </div>
      <div className="text-center mt-3">
        {/* eslint-disable-next-line */}
        <a className="page-scroll" onClick={ scrollToContact }>
          <button type="button" className="btn btn-success shadow" style={{ height: '40px' }}>
          <i className="fas fa-envelope mx-1"></i>
            CONTACT ME
          </button>
        </a>
      </div>
    </div>
  )
};

export default HomeHeader;