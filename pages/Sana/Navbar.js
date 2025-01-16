import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.css";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#D4AF37", color: "#800020" }}
      >
        <div className="container-fluid">
          {/* Logo and Navbar title with spacing */}
         
            <Image
              src="/1.png" // Path to your logo image
              alt="Logo"
              width={50} // Set the width of the logo
              height={50} // Set the height of the logo
              className="d-inline-block align-text-top"
            />
            {/* Adding a 10px space between logo and title */}
            <span style={{ marginLeft: "10px" }}><Link
                className="nav-link"
                href="/"
                to="/"
                style={{ color: "white" }}
              >
                Sana's World
              </Link></span>
          
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
              
              <Link
                className="nav-link"
                href="/Sana/ExclusiveCollections"
                to="/ExclusiveCollections"
                style={{ color: "white" }}
              >
                Exclusive Collections
              </Link>
              <Link
                className="nav-link"
                href="/Sana/Contact"
                to="/Contact"
                style={{ color: "white" }}
              >
                Contact
              </Link>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
