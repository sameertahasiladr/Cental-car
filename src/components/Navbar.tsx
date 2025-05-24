import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink to="/" className="navbar-brand p-0">
              <h1 className="display-6 text-primary">
                <i className="fas fa-car-alt me-3"></i>Cental
              </h1>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <NavLink to="/" className="nav-item nav-link" end>
                  Home
                </NavLink>
                <NavLink to="/rental-cars" className="nav-item nav-link">
                  Rental Cars
                </NavLink>
                <NavLink to="/luxury-cars" className="nav-item nav-link">
                  Luxury Cars
                </NavLink>
                <NavLink to="/contact-us" className="nav-item nav-link">
                  Contact
                </NavLink>
          
              </div>
              <NavLink to="/rental-cars" className="btn btn-primary rounded-pill py-2 px-4">
                Get Started
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;