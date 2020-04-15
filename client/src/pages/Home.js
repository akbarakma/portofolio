import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import myImage from '../public/myImage.jpg';
import jinxLogo from '../public/jinx-logo.jpeg';
import kanbanLogo from '../public/kanban-logo.jpeg';
import todosLogo from '../public/todos-logo.png';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const contact = useRef(null);
  const scrollToContact = () => scrollToRef(contact);
  const suggestionMessage = useSelector(state => state);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const sendSuggestion = async (event) => {
    event.preventDefault();
    const { data } = await axios.post('http://localhost:3000', {
      name,
      message
    });
    dispatch({
      type: 'ADD_MESSAGE',
      payload: data
    })
  };
  return (
    <>
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
      <div style={{ paddingTop: '20px', height: '1000px', backgroundColor: '#fc7703', position: 'relative' }}>
        <h1>My Latest Project</h1>
        <div className="my-4" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <div data-aos="fade-right">
          <div className="card mb-3 shadow my-4" style={{ maxWidth: '700px', padding: '10px' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={ jinxLogo } style={{ height: '230px', width: '230px' }} className="card-img" alt="JinxPedia" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title"><a href="https://jinxpedia-1585158679117.firebaseapp.com/" target="_blank" rel="noopener noreferrer">JinxPedia</a></h3>
                  <h5 className="card-text text-success">BackEnd and FrontEnd Developer</h5>
                  <p className="card-text">E-Commerce for outwear catalog made with Vue.js as FrontEnd and PostgreSQL as BackEnd. This is a personal project as I'm using all catalog from <a href="http://jinx.com" target="_blank" rel="noopener noreferrer">jinx.com</a></p>
                  <p class="card-text"><small class="text-muted">API Documentation: <a href="https://github.com/akbarakma/e-commerce">https://github.com/akbarakma/e-commerce</a></small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="card mb-3 shadow mt-4" style={{ maxWidth: '700px', padding: '10px' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={ kanbanLogo } style={{ height: '230px', width: '230px' }} className="card-img" alt="Kanban" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title"><a href="https://project-kanban-d2173.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Kanban</a></h3>
                  <h5 className="card-text text-success">BackEnd and FrontEnd Developer</h5>
                  <p className="card-text">Kanban website for tracking progress made with Vue.js as FrontEnd and PostgreSQL as BackEnd. This is a personal project.</p>
                  <p class="card-text"><small class="text-muted">API Documentation: <a href="https://github.com/akbarakma/kanban">https://github.com/akbarakma/kanban</a></small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="card mb-3 shadow mt-4" style={{ maxWidth: '700px', padding: '10px' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={ todosLogo } style={{ height: '230px', width: '230px' }} className="card-img" alt="Kanban" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title"><a href="https://fancy-todos-1583339599206.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Fancy Todos</a></h3>
                  <h5 className="card-text text-success">BackEnd and FrontEnd Developer</h5>
                  <p className="card-text">My first Fullstack Website, made with Vue.js as FrontEnd and PostgreSQL as BackEnd. This is a personal project.</p>
                  <p class="card-text"><small class="text-muted">API Documentation: <a href="https://github.com/akbarakma/fancy-todo">https://github.com/akbarakma/fancy-todo</a></small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div style={{ paddingTop: '40px', height: '650px', backgroundColor: 'grey', position: 'relative' }} ref={ contact }>
        <h1>Contact Me</h1>
        <div data-aos="zoom-in">
          <form action="https://formsubmit.co/e6f6109e5b40194c0098e716488385bf" method="POST" style={{ width: '500px', margin: 'auto', marginTop: '20px' }}>
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-group">
              <h4>Your Name</h4>
              <input type="text" name="name" className="form-control" />
            </div>
            <div className="form-group">
              <h4>Your Email Address</h4>
              <input type="email" name="email" className="form-control" />
            </div>
            <div className="form-group">
              <h4>Your Message</h4>
              <textarea className="form-control" name="message" rows="3"></textarea>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-success shadow" style={{ height: '40px' }}>
              <i className="fas fa-envelope mx-1"></i>
                CONTACT ME
              </button>
            </div>
          </form>
        </div>
        <div style={{ marginTop: '10px' }}>
          <h2>Or Using My Social Media</h2>
          <ul className="social-icons">
            <li><a href="https://www.instagram.com/akbarakma/"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/akbar-akma-519526189/"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://github.com/akbarakma"><i className="fab fa-github"></i></a></li>
          </ul>
        </div>
      </div>
      <div style={{ paddingTop: '40px', height: '1000px', backgroundColor: '#fc7703' }}>
        <h1>Send a suggestions for this Website !!!</h1>
        <form onSubmit={ sendSuggestion } style={{ width: '500px', margin: 'auto', marginTop: '20px', marginBottom: '20px' }}>
          <div className="form-group">
            <h4>Your Name</h4>
            <input onChange={ (e) => setName(e.target.value) } type="text" className="form-control" />
          </div>
          <div className="form-group">
            <h4>Your Suggestions</h4>
            <textarea onChange={ (e) => setMessage(e.target.value) } className="form-control" rows="3"></textarea>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-success shadow" style={{ height: '40px' }}>
            <i className="fas fa-envelope mx-1"></i>
              Send This Suggestions
            </button>
          </div>
        </form>
        <h2>All of Your Suggestions</h2>
        <div style={{ height: '500px', overflow: 'auto', maxWidth: '900px', margin: 'auto' }}>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody style={{ overflowY: 'scroll' }}>
              { suggestionMessage && suggestionMessage.map(x => {
                return (
                  <tr key={ x.id }>
                    <td> { x.name } </td>
                    <td> { x.message } </td>
                  </tr>
                )
              }) }
            </tbody>
          </table>
        </div>
      </div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div>
              <h6>About</h6>
              <p className="text-justify">
                Motivated and eager to learn more about Fullstack Developer. Still learning for a good public speaking and excited to work with a team. Looking for a chance to challenge myself, and improve upon my mistake.
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by Akbar Akma
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a href="https://www.instagram.com/akbarakma/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/akbar-akma-519526189/"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://github.com/akbarakma"><i className="fab fa-github"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
};

export default Home;
