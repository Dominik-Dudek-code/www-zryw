import React, { useEffect, useState } from "react";
import picture from '/photos/main-home.jpg';
import arrowDown from '/vectors/arrowDown.svg';
import arrowRounded from '/vectors/arrowRounded.svg';
import Container from "./Container";

const LoadingHeader: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth > 767);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const clipPathValue = "path('M 10,0 L 328,0 A 10,10 0,0,1 338,10 L 338 177 A 10,10 0,0,1 328, 187 L 300,187 A 10,10 0,0,1 290,177 L 290,180 A 10,10 0,0,0 240,180 L 240,177 A 10,10 0,0,1 230,187 L 10,187 A 10,10 0,0,1 0,177 L 0,10 A 10,10 0,0,1 10,0 Z')";

  return (
    <Container>
      <section className="relative xs:mt-8 overflow-hidden rounded-lg w-full">
        <div className="h-full relative w-full xs:h-[672px]">
          <img
            src={picture}
            alt="zryw-main-picture"
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-[40%_35%] rounded-lg"
          />
          <div className="absolute hidden xs:block z-2 inset-0 bg-[linear-gradient(285.13deg,_rgba(0,_0,_0,_0)_0.22%,_rgba(81,_81,_61,_0.2)_100%)] rounded-lg"></div>
        </div>

        <h1 className="z-3 xs:absolute xs:top-[6%] xs:left-[3%] text-green mt-6 xs:mt-0 xs:text-white text-[41px] xs:text-[clamp(4rem,6vw,6rem)] font-new-order leading-[0.95] tracking-[-0.03em] xs:capitalize">
          Budujemy <br className="hidden md:block" /> nowe <br className="hidden md:block"/> kadry
        </h1>

        <div className="relative w-full md:w-[338px] md:h-[187px] md:absolute md:bottom-[6%] md:right-[3%]">
          <div
            className="gap-y-6 md:gap-y-0 z-3 mt-6 w-full h-full md:mt-0 md:bg-white md:rounded-lg md:p-6 flex flex-col justify-between"
            style={isSmallScreen ? { clipPath: clipPathValue } : undefined}
          >
            <p className="text-lg font-calluna">Jesteśmy społecznością państwowców.</p>
            <p className="text-lg font-calluna">Pomagamy młodym osobom wejść w służbę publiczną i życie polityczne.</p>
            <p className="text-lg font-calluna flex">
              Zobacz Więcej
              <img src={arrowRounded} alt="" className="ml-2 md:hidden" />
            </p>
          </div>

          <img
            src={arrowDown}
            alt=""
            className="hidden md:block absolute bottom-0 right-[20%] z-4 w-[12px]"
          />
        </div>
      </section>
    </Container>
  );
};

export default LoadingHeader;
