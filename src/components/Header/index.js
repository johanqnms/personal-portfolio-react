import React, { useRef } from "react";
import "./header.sass";
import img from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const HomepageLink = useRef(null);
  const inicioLink = useRef(null);
  const experienciaLink = useRef(null);
  const FrontendLink = useRef(null);
  const BackendLink = useRef(null);
  const CloudLink = useRef(null);
  const PortfolioLink = useRef(null);
  const contactoLink = useRef(null);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid ">
        <Link to="/" ref={HomepageLink}>
          {" "}
          <img alt="Johan Quijano Logo" height="140" src={img} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" ref={inicioLink}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" ref={experienciaLink}>
                Experiencia
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                ref={PortfolioLink}
              >
                Portafolio
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    to="/"
                    className="dropdown-item"
                    href="#"
                    ref={FrontendLink}
                  >
                    Frontend
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="dropdown-item"
                    href="#"
                    ref={BackendLink}
                  >
                    Backend
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/"
                    className="dropdown-item"
                    href="#"
                    ref={CloudLink}
                  >
                    Cloud
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" ref={contactoLink}>
                Contacto
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder=""
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
