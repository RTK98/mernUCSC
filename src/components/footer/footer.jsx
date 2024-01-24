import React from "react";
import './footer.css';

function Footer() {
    return (
        <div>
        <footer className="row row-cols-5 py-5 my-5 border-top">
          <div className="col">
            <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <svg className="bi me-2" width="40" height="32"></svg>
            </a>
            <p className="text-muted">&copy; 2023</p>
          </div>
      
          <div className="col">
      
          </div>
      
          <div className="col">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="home" className="nav-link p-0 text-muted">Home</a></li>
            </ul>
          </div>
      
          <div className="col">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="home" className="nav-link p-0 text-muted">Home</a></li>
            </ul>
          </div>
      
          <div className="col">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="home" className="nav-link p-0 text-muted">Home</a></li>
            </ul>
          </div>
        </footer>
      </div>

    );
}
export default Footer;