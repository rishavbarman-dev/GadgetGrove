import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toogleMobileMenuOpen = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="bg-[#33393d] h-28 flex items-center px-4">
        <div className="flex-grow">
          <a href="/">
            <header className="text-white text-2xl">GadgetGrove</header>
          </a>
        </div>
        <div className="lg:flex md:flex space-x-7 hidden">
          <li className="list-none text-white text-lg">
            <a href="/cart">
              <i className="fas fa-shopping-cart cursor-pointer"></i>
              <span className="ml-1 cursor-pointer">Cart</span>
            </a>
          </li>
          <li className="list-none text-white text-lg">
            <a href="/signin">
              <i className="fas fa-user cursor-pointer"></i>
              <span className="ml-1 cursor-pointer">Sign In</span>
            </a>
          </li>
        </div>
        <div
          className="threeLines p-2 cursor-pointer md:hidden"
          onClick={toogleMobileMenuOpen}
        >
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
        </div>
      </div>

      <div>
        <nav className="bg-[#33373d]">
          {isMobileMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <a
                  href="/cart"
                  className="block rounded-md hover:bg-gray-700 px-3 py-2 text-base font-medium text-white"
                  aria-current="page"
                >
                  <i className="fas fa-shopping-cart"></i>
                  <span className="ml-1">Cart</span>
                </a>
                <a
                  href="/signin"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <i className="fas fa-user"></i>
                  <span className="ml-1">Sign In</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
