import React from "react";

interface AboutInfoProps {
  color: string;
  title: string;
  text: string;
}

const AboutInfo: React.FC<AboutInfoProps> = ({ color, title, text }) => (
  <div className="flex-1 flex flex-col items-start h-[330px] w-full">
    <h2
      className={`font-face font-bold mt-[40px] ${color} text-[143px]`}
      style={{ fontWeight: 700 }}
    >
      {title}
    </h2>
    <p className={`font-calluna mt-5 lg:mt-10 text-[21px] pr-[32px] ${color}`}>
      {text}
    </p>
  </div>
);

export default AboutInfo;
