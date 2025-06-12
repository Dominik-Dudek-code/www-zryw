import React, { useState, useEffect } from "react";

interface AboutWhyProps {
  title: string;
  text: string;
  bgColor: string;
  textColor: string;
  arrowColor?: string;
}

const AboutWhy: React.FC<AboutWhyProps> = ({
  title,
  text,
  bgColor,
  textColor,
  arrowColor = "#222",
}) => {
  const [open, setOpen] = useState(false);
  const [renderContent, setRenderContent] = useState(false);

  useEffect(() => {
    if (open) {
      setRenderContent(true);
    } else {
      const timer = setTimeout(() => setRenderContent(false), 340);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div
      className="w-full max-w-[609px] relative cursor-pointer select-none transition-all duration-500 overflow-hidden"
      style={{ height: open ? "220px" : "145px" }}
      onClick={() => setOpen((prev) => !prev)}
    >
      {/* Ukryte svg z responsywnym clipPath */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="clip" clipPathUnits="objectBoundingBox">
            <path d="
              M 0.02,0
              L 0.67,0
              A 0.02 0.07 0 0 1 0.69,0.06
              L 0.69,0.06
              A 0.02 0.084 0 0 0 0.79,0.06
              L 0.79,0.06
              A 0.02 0.07 0 0 1 0.81,0
              L 0.98,0
              A 0.02 0.07 0 0 1 1,0.06
              L 1,0.94
              A 0.02 0.07 0 0 1 0.98,1
              L 0.02,1
              A 0.02 0.07 0 0 1 0,0.94
              L 0,0.06
              A 0.02 0.07 0 0 1 0.02,0
              Z
            " />
          </clipPath>
        </defs>
      </svg>

      {/* Element z clip-path */}
      <div
        className={`flex items-center pl-[40px] w-full ${bgColor}`}
        style={{
          clipPath: "url(#clip)",
          height: "145px",
          transition: "height 0.5s",
          color: textColor,
        }}
      >
        <h3 className="font-calluna text-white text-[54px]">{title}</h3>
      </div>

      {/* Strzałka */}
      <div
        className="absolute top-0 right-[26%] z-10 flex items-center justify-center transition-transform duration-500 -translate-x-[-8.5px]"
        style={{
          color: arrowColor,
          transform: open ? "rotate(-180deg)" : "rotate(0deg)",
        }}
      >
        <svg
          width="17"
          height="33"
          viewBox="0 0 13 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.05 0.5V14.875H0.25L6.322 23.5L12.25 14.875H7.45V0.5H5.05Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Tekst pokazany po kliknięciu */}
      {renderContent && (
        <div
          className={`w-full flex justify-center ${bgColor} mt-[-9px] px-3 pt-[4px] pb-2 rounded-b-lg transition-all duration-500 ease-in-out`}
          style={{
            maxHeight: open ? "300px" : "0px",
            overflow: "hidden",
          }}
        >
          <p className={`font-calluna text-white text-base text-center ${textColor}`}>
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutWhy;
