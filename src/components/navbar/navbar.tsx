"use client";
import { useState, useEffect } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import NavItem from "./nav-item";
const Logo = () => {
  return (
    <div>
      <a href="/#home">
        <span className="bg-pink-gradient inline-block text-transparent bg-clip-text">
          D
        </span>
        iego
      </a>
    </div>
  );
};

export default function Navbar() {
  const [atTop, setAtTop] = useState(true);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const openCloseMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div data-at-top={atTop}>
      <nav
        className={`fixed w-full flex justify-between px-4 md:px-8 py-2 items-center text-xl font-bold 
          ${!atTop && "bg-cls-background top-0"} 
          ${atTop && "bg-transparent"}`}
      >
        <Logo />
        <div className="hidden lg:flex space-x-12">
          <NavItem path="/#about" title="About" />
          <NavItem path="/#projects" title="Projects" />
          <NavItem path="/#contact" title="Contact" />
        </div>

        <div
          onClick={openCloseMobileMenu}
          className="text-center lg:hidden rounded-lg bg-transparent hover:cursor-pointer"
        >
          <IoMenu className={"text-cls-foreground w-7 h-7"} />
        </div>
      </nav>
      {openMobileMenu && (
        <>
          <div
            className="w-screen h-screen z-10 bg-[rgba(0,0,0,0.8)] fixed top-0 left-0"
            onClick={openCloseMobileMenu}
          />
          <div className="fixed flex flex-col items-center w-full min-h-1/2 z-20 bg-cls-background text-lg font-bold animate-slideIn">
            <div className="flex justify-between items-center w-full px-4 py-2 text-xl shadow-black shadow-sm">
              <Logo />
              <IoClose
                className="w-7 h-7 hover:cursor-pointer"
                onClick={openCloseMobileMenu}
              />
            </div>
            <NavItem
              path="/#home"
              title="Home"
              isMobile
              onClick={openCloseMobileMenu}
            />
            <NavItem
              path="/#about"
              title="About"
              isMobile
              onClick={openCloseMobileMenu}
            />
            <NavItem
              path="/#projects"
              title="Projects"
              isMobile
              onClick={openCloseMobileMenu}
            />
            <NavItem
              path="/#contact"
              title="Contact"
              isMobile
              onClick={openCloseMobileMenu}
            />
          </div>
        </>
      )}
    </div>
  );
}
