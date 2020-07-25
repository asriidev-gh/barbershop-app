import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <a href="/" className="navbar-brand">
      Brand
    </a>
    <button
      type="button"
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ml-auto">
        <a href="/" className="nav-item nav-link active">
          Home
        </a>
        <a href="/" className="nav-item nav-link">
          About
        </a>
        <a href="/" className="nav-item nav-link">
          Products
        </a>
      </div>
      {/* <form className="form-inline ml-auto">
                <input type="text" className="form-control mr-sm-2" placeholder="Search">
                <button type="submit" className="btn btn-outline-light">Search</button>
            </form> */}
    </div>
  </nav>
);

export default Navbar;
