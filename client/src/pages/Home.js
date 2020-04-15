import React from 'react';
import myImage from '../public/myImage.jpg';
import jinxLogo from '../public/jinx-logo.jpeg';
import kanbanLogo from '../public/kanban-logo.jpeg';

const Home = () => {
  return (
    <>
      <div style={{ paddingTop: '80px', backgroundColor: 'grey', height: '720px' }}>
        <a href="https://github.com/akbarakma" target="_blank" rel="noopener noreferrer">
          <img style={{ position: 'absolute', top: '0', right: '0', border: '0' }} src="https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" />
        </a>
        <img src={ myImage } alt="Akbar Danial Akma" style={{ height: '250px', width: '250px', borderRadius: '50%' }} />
        <h1 style={{ fontSize: '50px' }} className="mt-4">AKBAR DANIAL AKMA</h1>
        <hr style={{ border: 'white 1px solid', width: '600px' }} />
        <h3>Fullstack Javascript Developer</h3>
        <div className="text-center mt-3">
          <a className="page-scroll" href="#contact">
            <button type="button" className="btn btn-success shadow" style={{ height: '40px' }}>
            <i className="fas fa-envelope mx-1"></i>
              CONTACT ME
            </button>
          </a>
        </div>
      </div>
      <div style={{ paddingTop: '20px', height: '740px', backgroundColor: '#fc7703' }}>
        <h1>My Latest Project</h1>
        <div className="my-4" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <div className="card mb-3 shadow my-4" style={{ maxWidth: '650px', padding: '10px' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={ jinxLogo } className="card-img" alt="JinxPedia" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title"><a href="https://jinxpedia-1585158679117.firebaseapp.com/" target="_blank" rel="noopener noreferrer">JinxPedia</a></h3>
                  <h5 className="card-text text-success">BackEnd and FrontEnd Developer</h5>
                  <p className="card-text">E-Commerce for outwear catalog made with Vue.js as FrontEnd and PostgreSQL as BackEnd. This is a personal project as I'm using all catalog from <a href="http://jinx.com" target="_blank" rel="noopener noreferrer">jinx.com</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 shadow mt-4" style={{ maxWidth: '650px', padding: '10px' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={ kanbanLogo } className="card-img" alt="Kanban" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title"><a href="https://project-kanban-d2173.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Kanban</a></h3>
                  <h5 className="card-text text-success">BackEnd and FrontEnd Developer</h5>
                  <p className="card-text">Kanban website for tracking progress made with Vue.js as FrontEnd and PostgreSQL as BackEnd. This is a personal project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3>See All Project ...</h3>
      </div>
    </>
  )
};

export default Home;
