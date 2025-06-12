import React from "react";
import Button from "./Button";
import Container from "./Container";

interface HeroTextProps {
  children: React.ReactNode;
  className?: string;
}

const HeroText: React.FC<HeroTextProps> = ({ children, className = "" }) => (
  <h2 className={`font-new-order font-bold leading-[1.1] ${className}`}>
    {children}
  </h2>
);

const ApplyHero: React.FC = () => {
  return (
    <Container>
      <section className="relative xs:mt-8 overflow-hidden rounded-lg w-full">
        {/* MOBILE: */}
        <div className="block overflow-hidden xs:hidden">
          <picture className="h-[445px]">
            <source
              srcSet="./photos/apply-create.jpg"
              media="(min-width: 395px)"
            />
            <img
              src="./photos/apply-create.jpg"
              alt="Aplikuj na zryw"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </picture>
          <h1 className="font-new-order text-[54px] font-bold text-center mt-6 mb-4 text-[var(--color-primary)] leading-[1]">
            Dołącz do
            <br />
            Zrywu i twórz
            <br />
            nową Polskę
          </h1>
          <Button className="mx-auto block mb-6 bg-[var(--color-accent)] text-white w-[96px] h-[39px]" link="https://wkf.ms/3T3ynat">
            Aplikuj
          </Button>
        </div>

        {/* DESKTOP: */}
        <div className="hidden xs:block h-[672px] relative w-full">
          <img
            src="./photos/apply-create.jpg"
            alt="Aplikuj na zryw"
            className="h-full w-full object-cover object-[40%_35%] rounded-lg shadow-lg"
          />
          {/* Gradient overlay identyczny jak w LandingHeader */}
          <div className="absolute z-2 inset-0 bg-[linear-gradient(285.13deg,_rgba(0,_0,_0,_0)_0.22%,_rgba(81,_81,_61,_0.2)_100%)] rounded-lg"></div>
          <div
            className="h-full w-full grid absolute top-0 left-0 z-3 p-[40px]"
            style={{
              gridTemplateRows: "1fr 1fr 1fr 1fr",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
              gridTemplateAreas: `
                "left left . . . ."
                "left left . . . ."
                ". . . . right right"
                ". . . . right right"
              `,
              height: "100%",
              width: "100%",
            }}
          >
            <div
              className="flex flex-col items-start justify-start p-2 xs:p-4 max-w-[420px] gap-2"
              style={{ gridArea: "left" }}
            >
              <HeroText className="xs:text-[clamp(4rem,6vw,6rem)] whitespace-nowrap leading-tight text-[var(--color-beige)]">
                Aplikuj na
                <br />
                zryw
              </HeroText>
            </div>

            <div
              className="flex flex-col items-end justify-end p-2 xs:p-4 max-w-[520px] gap-2"
              style={{ gridArea: "right" }}
            >
              <div className="flex flex-col items-end">
                <HeroText className="xs:text-[clamp(3rem,6vw,6rem)] text-right leading-tight m-0 text-[var(--color-beige)] whitespace-nowrap">
                  Twórz nową
                </HeroText>
                <div className="flex flex-row items-end w-full gap-2">
                  <HeroText className="xs:text-[clamp(3rem,6vw,6rem)] text-left leading-tight m-0 text-[var(--color-beige)]">
                    Polskę
                  </HeroText>
                  <Button
                    style={{ backgroundColor: "var(--color-beige)" }}
                    className="!text-[var(--color-primary)] text-base self-center w-[96px] h-[39px] ml-auto"
                    link="https://wkf.ms/3T3ynat"
                    blank={true}
                  >
                    Aplikuj
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ApplyHero;
