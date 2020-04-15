import React from 'react';
import jinxLogo from '../public/jinx-logo.jpeg';
import kanbanLogo from '../public/kanban-logo.jpeg';
import todosLogo from '../public/todos-logo.png';

const LatestProject = () => {
  return (
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
  )
};

export default LatestProject;