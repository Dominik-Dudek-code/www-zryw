import React from "react";
import Container from "./Container";
import "./partners.scss";

const partners: { img: string }[] = [
  { img: "/partners/action.png" },
  { img: "/partners/ttr.png" },
  { img: "/partners/prb.png" },
  { img: "/partners/fundation.png" },
  { img: "/partners/messina.png" },
  { img: "/partners/mentors.png" },
  { img: "/partners/odc.png" },
];

const Partners: React.FC = () => {
  return (
    <>
      <Container>
        <h2 className="font-new-order text-green text-[54px] tracking-[-0.03em] mt-20">Zaufali <br className="xs:hidden" /> nam</h2>
      </Container>
      <section className="h-[128px] xs:h-[190px] mt-9 overflow-hidden xs:mt-25 flex mx-auto">
        <div className="inline-flex gap-x-6 justify-center logos-slide px-3">
          {partners.map(({ img }, i) => (
            <div key={img + `${i} 1`} className="w-[133px] xs:w-[199px] h-[128px] xs:h-[190px] bg-beige border-1 border-beige-b flex justify-center items-center rounded-lg p-3">
              <img key={i} src={img} alt={`partner-${i}`} className="" />
            </div>
          ))}
        </div>
        <div className="inline-flex gap-x-6 justify-center logos-slide px-3">
          {partners.map(({ img }, i) => (
            <div key={img + `${i} 1`} className="w-[133px] xs:w-[199px] h-[128px] xs:h-[190px] bg-beige border-1 border-beige-b flex justify-center items-center rounded-lg p-3">
              <img key={i} src={img} alt={`partner-${i}`} className="" />
            </div>
          ))}
        </div>
        <div className="inline-flex gap-x-6 justify-center logos-slide px-3">
          {partners.map(({ img }, i) => (
            <div key={img + `${i} 1`} className="w-[133px] xs:w-[199px] h-[128px] xs:h-[190px] bg-beige border-1 border-beige-b flex justify-center items-center rounded-lg p-3">
              <img key={i} src={img} alt={`partner-${i}`} className="" />
            </div>
          ))}
        </div>
      </section>
      <Container>
        <div className="flex mt-6 xs:mt-3">
          <p className="ml-auto text-xs xs:text-base font-calluna">Zostań partnerem</p>
        </div>
      </Container>
    </>
  );
};

export default Partners;
