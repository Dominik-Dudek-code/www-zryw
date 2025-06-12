import React, { useEffect, useState } from "react";
import logo from "/logo/logo-outline.png";
import { NavLink, useLocation } from "react-router-dom";
import Container from "./Container";

const Footer: React.FC = () => {
    const [isWide, setIsWide] = useState(window.innerWidth >= 768);
      const location = useLocation();

    const handleNavClick = (path: string) => (e: React.MouseEvent) => {
        if (location.pathname === path) {
            e.preventDefault();
        } else {
            window.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        const handleResize = () => setIsWide(window.innerWidth >= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const data = {
        NIP: '7011177639',
        '': '',
        'E-mail': 'kontakt@fundacjazryw.pl',
        REGON: '527088981',
        Telefon: '+48 575 934 017',
        KRS: '0001072883',
    }

  return (
    <footer className="min-h-footer-mobile xs:min-h-footer bg-green mt-20">
        <Container>
            <section className="w-full flex xs:flex-row flex-col justify-between mt-7 xs:mt-12">
            <div className="w-auto">
                <div className="flex justify-between flex-wrap xs:grid xs:grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-x-8 gap-y-4 xs:gap-x-40 xs:gap-y-12">
                    <NavLink to='/' onClick={handleNavClick('/')}>
                        <p className='font-calluna text-xl text-white whitespace-nowrap'>Strona główna</p>
                    </NavLink>
                    <NavLink to='/o-nas' onClick={handleNavClick('/o-nas')}>
                        <p className='font-calluna text-xl text-white whitespace-nowrap'>O nas</p>
                    </NavLink>
                    <NavLink to='/aplikuj' onClick={handleNavClick('/aplikuj')}>
                        <p className='font-calluna text-xl text-white whitespace-nowrap'>Aplikuj</p>
                    </NavLink>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-6 xs:gap-y-12 mt-6 xs:mt-12 xs:pb-10">
                    {Object.entries(data).map(([key, value]) => {
                        if (key === '' && !isWide) {
                            return null;
                        }

                        return (
                            <div
                                key={key}
                                className={key === '' ? "hidden xs:block" : ""}
                            >
                                <div className="font-calluna text-base text-white">{key}</div>
                                <div className="font-calluna text-base text-white whitespace-nowrap">{value}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="pb-[5%] w-auto xs:max-w-[65%] xs:p-0">
                <img src={logo} alt="" className="object-cover xs:w-auto mt-6 xs:mt-0"/>
            </div>
        </section>
        </Container>
    </footer>
  );
};

export default Footer;
