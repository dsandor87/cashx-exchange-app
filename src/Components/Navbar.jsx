/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark d-none d-lg-block"
      style={{ zIndex: "2000" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand nav-link" target="blank" href="#">
          <strong>Exchange App</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="https://sandordesi.com/"
                rel="nofollow"
                target="#"
              >
                Home
              </a>
            </li>
          </ul>

          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/sandor-desi/"
                rel="nofollow"
                target="blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://github.com/dsandor87"
                rel="nofollow"
                target="#"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
