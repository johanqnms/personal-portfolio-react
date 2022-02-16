import "./header.sass";
import img from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <header>
      <img alt="Johan Quijano Logo" src={img} />
      <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="/">Inicio</a>
              </li>
              <li class="nav-item">
                <a href="/">Features</a>
              </li>
              <li class="nav-item">
                <a href="/">Pricing</a>
              </li>
              <li class="nav-item">
                <a href="/" tabindex="-1" aria-disabled="true">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
