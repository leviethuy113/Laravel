import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <div>
        <header className="site-navbar py-4 site-navbar-target" role="banner">
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="site-logo">
                <a href="index.html" className="d-block">
                  <img
                    src="/dist/images/logo.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="mr-auto">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                    <li className="">
                      <Link to="/home">
                        <a className="nav-link text-left">Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/buy">
                        <a className="nav-link text-left">Buy</a>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <a className="nav-link text-left">Sell</a>
                      </Link>
                    </li>
                    <li className="has-children">
                      <a href="services.html" className="nav-link text-left">
                        Services
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="services.html">Sell Items</a>
                        </li>
                        <li>
                          <a href="services.html">Buy Items</a>
                        </li>
                        <li>
                          <a href="services.html">Submit a Bid</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link></Link>
                      <a className="nav-link text-left">Blog</a>
                    </li>
                    <li>
                      <Link to="/about">
                        <a className="nav-link text-left">About</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <a className="nav-link text-left">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="ml-auto">
                <div className="social-wrap">
                  <a href="login.html" className="text-white">
                    Sign In / Register
                  </a>
                  <a
                    href="#"
                    className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
                  >
                    <span
                      className="icon-menu h3 text-white"
                      style={{ position: "relative", top: "7px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <div class="hero-slide owl-carousel site-blocks-cover"> */}
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
