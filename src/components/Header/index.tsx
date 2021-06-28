import React from "react";

function Header() {
  return (
    <header className="mb-auto mx-auto" style={{ width: "80%" }}>
      <div>
        <h3 className="float-md-start mb-0">Armaan Lala</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <a className="nav-link active" aria-current="page" href="#/">
            Home
          </a>
          <a className="nav-link" href="#/About">
            About
          </a>
          <a className="nav-link" href="#/Projects">
            Projects
          </a>
          <a className="nav-link" href="#/Resume">
            Resume
          </a>
          <a className="nav-link" href="#/Contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
