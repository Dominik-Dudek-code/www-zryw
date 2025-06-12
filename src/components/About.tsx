import React from "react";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import photoApply from "/photos/apply-create.jpg";
import Container from "./Container";
import Crew from "./Crew";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";
import AboutSection3 from "./AboutSection3";

const About: React.FC = () => {
  return (
    <>
      <Container>
        <AboutSection1 />
        <AboutSection2 />
        <AboutSection3 />
      </Container>
      <Crew />
      <Contact text="Aplikuj na zryw" src={photoApply} className="mt-42" />
      <Gallery />
      <Newsletter />
    </>
  );
};

export default About;
