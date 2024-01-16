import "./Navbar.css";
import navs from "@/assets/img/Logo.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid mr-lg-3 ml-lg-5">
          <a className="navbar-brand ml-lg-5" href="#">
            <img src={navs} alt="Bootstrap" width={70} height={70} />
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon" />
            <span className="toggler-icon" />
            <span className="toggler-icon" />
          </button>
          <div className="collapse navbar-collapse p-2  m-2" id="navbarNav">
            <ul className="nav ms-auto nav-pills custom-pills">
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#hobby">
                  Hobby
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#skill">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      ;
    </>
  );
};
