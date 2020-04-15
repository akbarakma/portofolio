import React from 'react';

const ContactMe = (props) => {
  const { contact } = props;
  return (
    <div style={{ paddingTop: '40px', height: '650px', backgroundColor: 'grey', position: 'relative' }} ref={ contact }>
      <h1>Contact Me</h1>
      <div data-aos="zoom-in">
        <form action="https://formsubmit.co/e6f6109e5b40194c0098e716488385bf" method="POST" style={{ width: '500px', margin: 'auto', marginTop: '20px' }}>
          <input type="hidden" name="_captcha" value="false" />
          <div className="form-group">
            <h4>Your Name</h4>
            <input required type="text" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <h4>Your Email Address</h4>
            <input required type="email" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <h4>Your Message</h4>
            <textarea required className="form-control" name="message" rows="3"></textarea>
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
  )
};

export default ContactMe;