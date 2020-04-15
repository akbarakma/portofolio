import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div>
            <h6>About</h6>
            <p className="text-justify">
              Motivated and eager to learn more about Fullstack Developer. Still learning for a good public speaking and excited to work with a team. Looking for a chance to challenge myself, and improve upon my mistake.
              This website used React js and redux-thunk to get suggestions data from a server that i made.
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
  )
};

export default Footer;