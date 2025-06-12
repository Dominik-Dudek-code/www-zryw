import React from "react";
import AboutInfo from "./AboutInfo";

const AboutSection1: React.FC = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row min-h-[220px] gap-y-[20px] lg:gap-y-0 lg:gap-x-[20px]">
      <div className="flex-1">
        <AboutInfo
          color="text-[var(--color-primary)]"
          title="zryw"
          text="buduje kadry państwowe zdolne do odpowiedzialnego działania na rzecz dobra wspólnego. Wierzymy, że demokracja wymaga nie tylko instytucji, ale przede wszystkim ludzi: kompetentnych, empatycznych i gotowych do działania."
        />
      </div>
      <div className="flex-1 mt-30 lg:mt-[165px]">
        <AboutInfo
          color="text-[var(--color-accent)]"
          title="zryw"
          text="wychodzi poza technokratyczne przygotowanie do służby, kształtuje liderów zdolnych do samodzielnego myślenia i konstruktywnej współpracy. Wyposażamy młodych w wiedzę, doświadczenie i relacje niezbędne do zaangażowania się w życie publiczne."
        />
      </div>
      <div className="flex-1 mt-30 lg:mt-[330px]">
        <AboutInfo
          color="text-[var(--color-olive)]"
          title="zryw"
          text="to przestrzeń pierwszych kroków w życiu publicznym—dla młodych patriotów i państwowców, którzy chcą kształtować społeczeństwo w rytm wartości obywatelskich."
        />
      </div>
    </section>
  );
};

export default AboutSection1;
