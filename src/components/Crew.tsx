import React, { useRef, useState, useEffect } from "react";
import people from "../assets/people.json";
import Container from "./Container";
import twitter from "/vectors/twitter.png";
import linkedin from "/vectors/linkedin.png";
import arrowRight from '/vectors/arrowRight.svg';

const tileWidth = 312;

const Crew: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = people.length - 1;

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const clampedIndex = Math.min(Math.max(index, 0), maxIndex);
    setCurrentIndex(clampedIndex);
    scrollRef.current.scrollTo({
      left: clampedIndex * tileWidth,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => scrollToIndex(currentIndex - 1);
  const scrollRight = () => scrollToIndex(currentIndex + 1);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollLeft = scrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / tileWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    const node = scrollRef.current;
    if (node) {
      node.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (node) node.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex]);

  return (
    <Container className="mt-38">
      <div className="flex items-center justify-between">
        <h2 className="font-new-order text-5xl text-green">Zespół</h2>

        <div className="ml-auto w-[100px] flex justify-between xs:hidden">
          <button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            aria-label="Poprzedni"
          >
            <img src={arrowRight} alt="left" />
          </button>
          <button
            onClick={scrollRight}
            disabled={currentIndex === maxIndex}
            aria-label="Następny"
          >
            <img src={arrowRight} alt="right" className="rotate-180" />
          </button>
        </div>
      </div>

      <section
        ref={scrollRef}
        className="mt-20 flex xs:flex-wrap gap-x-8 gap-y-16 xs:justify-center overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {people.map((person) => (
          <div
            key={person.name}
            className="flex flex-col max-w-[280px] h-[536px] xs:max-w-[306px] xs:h-[560px] justify-between scroll-snap-align-start"
            style={{ flex: "0 0 auto" }}
          >
            <div>
              <img
                src={person.img}
                alt={person.img}
                className="max-w-[301px] xs:max-w-[306px] rounded-lg"
              />
              <p className="mt-6 text-xl text-green font-new-order">
                {person.name}
              </p>
              {person.title && (
                <p className="font-calluna text-base text-brown">{person.title}</p>
              )}
            </div>
            <p className="font-calluna text-base text-brown leading-[150%]">
              {person.description}
            </p>
            <div className="flex gap-x-4">
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin-logo" />
              </a>
              <a href={person.twitter} target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter-logo" />
              </a>
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default Crew;
