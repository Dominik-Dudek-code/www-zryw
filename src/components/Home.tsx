import React from "react";
import LoadingHeader from "./LandingHeader";
import Story from "./Story";
import Description from "./Description";
import Partners from "./Partners";
import SoundsFamiliar from "./SoundsFamiliar";
import Newsletter from "./Newsletter";
import Gallery from "./Gallery";
import Container from "./Container";
import Faq from "./Faq";
import Contact from "./Contact";
import building from "/photos/building.jpg";

const Home: React.FC = () => {
  return (
    <div>
      <LoadingHeader />
      <Container>
        <hr className="mt-20 h-[1px] bg-olive border-0 outline-none hidden xs:block" />
      </Container>

      <Story />
      <Description />
      <Partners />
      <SoundsFamiliar />
      <Container>
        <hr className="mt-38 xs:mt-40 h-[1px] bg-olive border-0 outline-none" />
      </Container>
      <Newsletter />
      <Gallery />
      <Faq />
      <section className="w-full grid grid-cols-10 mt-[120px]">
        <div className="hidden xs:block xs:col-span-1" />
        <div className="col-span-10 xs:col-span-8">
          <Contact text={`Zrywamy ze\nschematami`} src={building} />
        </div>
        <div className="hidden xs:block xs:col-span-1" />
      </section>
    </div>
  );
};

export default Home;
