import React from "react";
import Button from "./Button";
import Container from "./Container";

interface SoundsFamiliarTarget {
  buttonTarget?: boolean;
}

const SoundsFamiliar: React.FC<SoundsFamiliarTarget> = ({buttonTarget}) => (
  <Container>
    <div className="mt-33">
      <h2 className="font-new-order text-[41px] xs:text-[54px] text-green font-bold mb-8 text-center xs:text-left xs:mb-16">
        Brzmi znajomo?
      </h2>
      {/* MOBILE + TABLET: do 970px */}
      <div className="flex flex-col items-center md:hidden">
        <div className="w-full max-w-xs rounded-lg overflow-hidden aspect-square mb-6">
          <img
            src="./photos/apply-sounds-familiar.jpg"
            alt="Grupa ludzi na skałach"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-4 w-full max-w-xs mb-4">
          {[
            "Masz 19–25 lat i studiujesz na polskiej uczelni",
            "Działasz lokalnie i wiesz, jak rozwiązywać realne problemy",
            "Chcesz poznać osoby z pierwszej linii polskiego życia publicznego",
            "Szukasz ekipy z całej Polski, która też chce czegoś więcej",
            "Frustruje Cię, jak wygląda dziś polskie życie publiczne i czujesz, że można inaczej",
            "Jesteś osobą empatyczną, zdeterminowaną i skuteczną",
            "Zależy Ci na bliskim kontakcie z czołowymi liderami publicznymi",
          ].map((text, index) => (
            <p
              key={index}
              className="text-center font-calluna text-base text-[var(--color-primary)]"
            >
              {text}
            </p>
          ))}
        </div>
        <Button className="w-[96px] h-[45px] mt-2 bg-[var(--color-accent)] text-white" link={buttonTarget ? "https://wkf.ms/3T3ynat" : "/aplikuj"} blank={buttonTarget ? true : false}>
          Aplikuj
        </Button>
      </div>
      {/* DESKTOP: od 970px wzwyż */}
      <div className="hidden md:grid grid-cols-12 gap-8 xs:gap-12">
        <div className="xs:col-span-4 aspect-square">
          <img
            src="./photos/apply-sounds-familiar.jpg"
            alt="Grupa ludzi na skałach"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="xs:col-span-8 grid grid-cols-1 xs:grid-cols-2 gap-6 xs:gap-x-16 xs:gap-y-8">
          {[
            "Masz 19–25 lat i studiujesz na polskiej uczelni",
            "Działasz lokalnie i wiesz, jak rozwiązywać realne problemy",
            "Chcesz poznać osoby z pierwszej linii polskiego życia publicznego",
            "Szukasz ekipy z całej Polski, która też chce czegoś więcej",
            "Frustruje Cię, jak wygląda dziś polskie życie publiczne i czujesz, że można inaczej",
            "Jesteś osobą empatyczną, zdeterminowaną i skuteczną",
            "Zależy Ci na bliskim kontakcie z czołowymi liderami publicznymi",
          ].map((text, index) => (
            <p key={index} className="font-calluna text-xl">
              {text}
            </p>
          ))}
          <div>
            <Button className="w-[96px] h-[45px] bg-[var(--color-accent)] text-white" link={buttonTarget ? "https://wkf.ms/3T3ynat" : "/aplikuj"} blank={buttonTarget ? true : false}>
              Aplikuj
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default SoundsFamiliar;
