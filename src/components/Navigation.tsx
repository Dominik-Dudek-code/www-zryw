import { NavLink, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import logo from "/logo/logo.png";
import burger from "/burger/burger.png";
import Container from './Container';
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleModal = () => setIsOpen(prev => !prev);
  const closeModal = () => setIsOpen(false);

  const handleNavClick = (path: string) => (e: React.MouseEvent) => {
    if (location.pathname === path) {
      e.preventDefault();
      closeModal();
    } else {
      window.scrollTo(0, 0);
      toggleModal();
    }
  };

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false); // scroll down
      } else {
        setShowNav(true); // scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50 transition-transform duration-400 bg-background
        ${showNav ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <Container>
        <nav className="w-full h-16 xs:h-24 flex justify-between items-center">
          <NavLink to='/' aria-label="Go to home" className='hover:scale-110 transition-all duration-300'>
            <img src={logo} alt="zryw-logo" className='w-9'/>
          </NavLink>
          
          <div className='hidden xs:flex justify-between items-center'>
            <NavLink to='/o-nas' className='mr-12'>
              <p className='font-calluna text-xl text-black hover:text-[23px] transition-all duration-300'>O nas</p>
            </NavLink>

            <NavLink
              to="/aplikuj"
              className="w-24 h-11 bg-green rounded-full flex justify-center items-center 
                        hover:bg-green/90 transition-colors duration-300"
            >
              <p className="font-calluna text-xl text-white hover:text-[23px] transition-all duration-300 block w-full h-full flex items-center justify-center">
                Aplikuj
              </p>
            </NavLink>

          </div>

          <div className='xs:hidden'>
            <button 
              aria-label="Otwórz menu"
              onClick={toggleModal}
              className='w-9 h-9 bg-green flex justify-center items-center rounded-full'
            >
              <img src={burger} alt="burger-icon" />
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <Menu
              close={closeModal}
              handleNavClick={handleNavClick}
            />
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default Navigation;
