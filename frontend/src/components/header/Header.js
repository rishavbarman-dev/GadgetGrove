import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="row container">
          <h1 className="header-title">GadgetGrove</h1>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-items">
                <a href="/cart" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6e7278"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-shopping-cart"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                  Cart
                </a>
              </li>
              <li className="nav-items">
                <a href="/signin" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6e7278"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-user"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
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
