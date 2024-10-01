import React from "react";
import { Button } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa"; 

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 main-header-wrapper">
      <div className="container">
        <a className="navbar-brand" href="#">
          MNTN
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Equipment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <a className="nav-link text-white" href="#">
            <FaUserCircle size={24} /> Account
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
