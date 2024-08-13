import React, { useState } from "react";
import "./Header.css";
import cart from "../../assets/cart.png";
import user from "../../assets/user.png";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleNavToggle = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <header className="header">
        <div className="container row">
          <div className="nav-container">
            <button
              onClick={handleNavToggle}
              className="nav-toggle"
              aria-label="open-navigation"
            >
              <span className="hamburger"></span>
            </button>
            <a className="header-link" href="/">
              <h1 className="header-title">GadgetGrove</h1>
            </a>
          </div>

          <nav className={`nav ${isNavVisible ? "nav--visible" : ""}`}>
            <ul className="nav-list">
              <li className="nav-items">
                <a href="/cart" className="nav-link">
                  <img src={cart} className="shopping-cart" alt="cart-logo" />
                  Cart
                </a>
              </li>
              <li className="nav-items">
                <a href="/signin" className="nav-link">
                  <img src={user} className="shopping-cart" alt="user-logo" />
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
