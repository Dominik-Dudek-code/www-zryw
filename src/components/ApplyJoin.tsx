import React from "react";
import Container from "./Container";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
}) => (
  <h2 className={`font-new-order text-4xl font-bold ${className}`}>
    {children}
  </h2>
);

const ApplyJoin: React.FC = () => {
  const joinItems = [
    {
      title: "Poznać politykę od kuchni",
      description:
        "Dajemy dostęp do osób z pierwszej linii życia publicznego i ich doświadczenia od kuchni poprzez spotkania w zamkniętej formule Chatham House.",
    },
    {
      title: "Mieć wsparcie osób z doświadczeniem",
      description:
        "Nasi mentorzy pomogą Ci rozwinąć skrzydła i zdobyć nowe umiejętności",
    },
    {
      title: "Dołączyć do społeczności pełnej pasji",
      description:
        "Poznaj ludzi, którzy tak jak Ty chcą zmieniać Polskę na lepsze",
    },
  ];

  return (
    <Container>
      <section className="pt-32">
        <div>
          <SectionTitle className="text-center mb-12 xs:mb-24 text-[41px] xs:text-[54px]">
            Dołącz do nas jeśli chcesz
          </SectionTitle>
          {/* MOBILE:*/}
          <div className="flex flex-col items-center gap-8 xs:hidden">
            {joinItems.map((item, index) => (
              <div key={index} className="w-full max-w-xs text-center">
                <h3 className="font-new-order text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="font-calluna text-xl opacity-80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          {/* DESKTOP:*/}
          <div className="hidden xs:flex gap-16 flex-wrap justify-between">
            {joinItems.map((item, index) => (
              <div key={index} className="max-w-[282px]">
                <h3 className="font-new-order text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="font-calluna text-xl opacity-80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ApplyJoin;
