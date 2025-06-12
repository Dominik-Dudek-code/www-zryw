import React from "react";
import Container from "./Container";
import Button from "./Button";

interface QuestionsData {
  title: string;
  text: string;
}

const questions: QuestionsData[] = [
  {
    title: "Czy mogę aplikować jeśli nie spełniam kryteria wiekowego 20-25 lat?",
    text: "Przymujemy zgłoszenia tylko od osób pełnoletnich. Naszą główną grupą docelową są osoby w wieku pomiędzy 19 a 25 lat, jednak jeśli uważasz, że ten program jest dla Ciebie, nie zdyskwalifikujemy Cię jedynie ze względu na wiek.",
  },
  {
    title: "Jestem studentem zagranicznej uczelni. Czy mogę aplikować?",
    text: "Tak. Nasze programy są przeznaczone dla osób, które chcą służyć Polsce. Ten program pewnie nie jest dla Ciebie jeśli przez najbliższe 5 lat planujesz pozostać poza krajem. Jeśli jednak planujesz powrót do Polski po studiach czy pracy za granicą, to nasze programy mogą być dla Ciebie dobrym miejscem rozwoju i kształtowania swojej działalności w Polsce.",
  },
  {
    title: "Czy udział w programie jest odpłatny?",
    text: "Udział w naszych programach jest darmowy. Pokrywamy koszty transportu, wyżywienia oraz zakwaterowania.",
  },
  {
    title: "Co to jest reguła Chatham House?",
    text: "Ta reguła oznacza, że uczestnicy spotkania mają swobodę w używaniu otrzymanych informacji, ale bez możliwości ujawniania danych osobowych oraz afiliacji zarówno mówców, jak i pozostałych uczestników. Celem tej reguły jest poruszanie kontrowersyjnych problemów bez ryzyka, że opinia publiczna pozna nazwisko lub przynależność organizacyjną osoby, która wygłasza te opinie.",
  },
];

const Faq: React.FC = () => {
  return (
    <Container>
      <section className="mt-20 xs:mt-30">
        <h2 className="font-new-order text-[54px] leading-[1.2] text-green">
          Masz pytania? <br /> My mamy odpowiedzi
        </h2>
        <div className="mt-10 xs:mt-20">
          {questions.map((question, index) => (
            <div key={`${index}` + question.title}>
              <hr className="mt-10 xs:mt-12 h-[1px] bg-olive border-0 outline-none" />
              <div className="mt-6 flex flex-wrap gap-y-6 flex-col xs:flex-row">
                <h3 className="font-new-order text-base text-green xs:w-[30%] pr-4">
                  {question.title}
                </h3>
                <p className="font-calluna text-base xs:w-[70%] leading-[1.5]">
                  {question.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="mt-10 xs:mt-20 font-new-order text-3xl text-green">
          Masz inne pytanie?
        </h3>
        <div className="mt-4">
          <p className="hidden xs:block">
            Napisz do nas na{" "}
            <a className="underline" href="mailto:rekrutacja@fundacjazryw.pl">rekrutacja@fundacjazryw.pl</a>
          </p>
          <p className="block xs:hidden">Napisz do Nas, z chęcią odpowiemy</p>
        </div>

        <Button className="block xs:hidden mt-6 bg-green w-[103px] h-[48px]" link="/aplikuj">Kontakt</Button>
      </section>
    </Container>
  );
};

export default Faq;
