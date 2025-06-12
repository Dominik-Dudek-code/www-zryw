import React from "react";
import photo1 from '/photos/talking.jpg';
import photo2 from '/photos/apply-sounds-familiar.jpg';
import Container from "./Container";

interface CardData {
  img: string;
  alt: string;
  text: string;
}

const cards: CardData[] = [
  {
    img: photo1,
    alt: "talking-people",
    text: "Organizujemy zrywy. To trzydniowe zjazdy w różnych zakątkach Polski, w trakcie których uczestnicy poznają się z systemem politycznym i jego funkcjonowaniem.",
  },
  {
    img: photo2,
    alt: "sitting-people",
    text: "Łączymy podopiecznych, praktyków i decydentów politycznych. Naszą siłą jest jakość i relacyjność.",
  },
];

const Story: React.FC = () => {
  return (
    <Container>
      <section className="mt-20 xs:mt-5 flex justify-between flex-col xs:flex-row xs:gap-x-4 xs:flex-wrap">
          <h2 className="xs:w-[364px] text-2xl xs:text-[32px] font-new-order leading-[130%] xs:leading-[110%] xs:tracking-[-0.015em] text-green xs:pb-10 whitespace-normal">
              Budujemy środowisko, które pozwala studentom stawiać pierwsze kroki w służbie publicznej.
          </h2>
          {cards.map(({ img, alt, text }, idx) => (
            <div key={idx} className="flex flex-col xs:flex-1 xs:min-w-[200px] xs:max-w-[330px] mt-10 xs:mt-0">
              <img src={img} alt={alt} className="rounded-lg object-cover h-[252px] object-[50%_23%]"/>
              <p className="font-calluna text-lg mt-6 leading-[130%] tracking-[-0.015em]">{text}</p>
            </div>
          ))}
      </section>
    </Container>
    
  );
};

export default Story;
