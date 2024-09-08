import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.css";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#a04c74", color: "white" }}
      >
        <div className="container-fluid">
          {/* Logo and Navbar title with spacing */}
          <a className="navbar-brand d-flex align-items-center" href="#" style={{ color: "white" }}>
            <Image
              src="/1.png" // Path to your logo image
              alt="Logo"
              width={50} // Set the width of the logo
              height={50} // Set the height of the logo
              className="d-inline-block align-text-top"
            />
            {/* Adding a 10px space between logo and title */}
            <span style={{ marginLeft: "10px" }}>Navbar</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {/* Align the links to the right */}
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: "white" }}>
                Home
              </a>
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Features
              </a>
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Pricing
              </a>
              <a className="nav-link disabled" aria-disabled="true" style={{ color: "white" }}>
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
