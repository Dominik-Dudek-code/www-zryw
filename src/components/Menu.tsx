import React, { MouseEventHandler, useEffect } from "react";
import logo from "/logo/logo.png";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import closeIcon from "/vectors/close.png";
import Button from "./Button";
import logoOutline from "/logo/logo-outline.png";
import { motion } from "framer-motion";

interface props {
  close: () => void;
  handleNavClick: (
    path: string
  ) => MouseEventHandler<HTMLAnchorElement> | undefined;
}

const Modal: React.FC<props> = ({ handleNavClick, close }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="bg-green fixed top-0 bottom-0 left-0 right-0 flex flex-col z-50"
    >
      <Container className="flex flex-col flex-grow bg-green">
        <nav className="w-full h-16 xs:h-24 flex justify-between items-center">
          <NavLink to="/" aria-label="Go to home" onClick={handleNavClick("/")}>
            <img
              src={logo}
              alt="zryw-logo"
              className="w-9 filter invert brightness-1"
            />
          </NavLink>

          <button aria-label="Zamknij menu" onClick={close} className="mr-1.5">
            <img src={closeIcon} alt="burger-icon" />
          </button>
        </nav>
        <div className="flex flex-col flex-grow-1 max-h-[250px] justify-between gap-6 items-center mt-8 pb-10">
          <NavLink to="/" aria-label="Go to home" onClick={handleNavClick("/")}>
            <p className="text-white font-calluna text-3xl">Strona główna</p>
          </NavLink>
          <NavLink
            to="/o-nas"
            aria-label="Go to home"
            onClick={handleNavClick("/o-nas")}
          >
            <p className="text-white font-calluna text-3xl">O nas</p>
          </NavLink>
            <Button className="bg-accent w-[96px] h-[45px]" link="/aplikuj" aria-label="Go to home" onClick={handleNavClick("/aplikuj")}>
              Aplikuj
            </Button>
        </div>
        <img src={logoOutline} alt="" className="mt-auto pb-4" />
      </Container>
    </motion.div>
  );
};

export default Modal;
