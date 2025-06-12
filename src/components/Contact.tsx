import React from "react";
import Button from "./Button";

interface ContactProps {
  text: string;
  src?: string;
  className?: string;
  aspect?: string;
  target?: boolean;
}

const Contact: React.FC<ContactProps> = ({
  text,
  src = "./photos/apply-to-zryw.jpg",
  className,
  target
}) => (
  <section className="w-full grid grid-cols-10">
    <div className="hidden xs:block xs:col-span-1" />
    <div className="col-span-10 xs:col-span-8">
      <div
        className={`relative w-full max-w-[1100px] aspect-[1100/697] mx-auto rounded-[2px] overflow-hidden bg-[var(--color-background)] ${
          className ? className : ""
        }`}
      >
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover rounded-[2px]"
          style={{ aspectRatio: "1100/697" }}
        />
        <div className="absolute top-0 left-0 w-full flex flex-col items-center mt-6 xs:mt-10">
          <h2 className="font-['New_Order'] text-white text-[32px] leading-[1] xs:text-[clamp(2.5rem,6vw,5rem)] font-bold text-center drop-shadow-md whitespace-pre-line">
            {text === "Aplikuj na zryw" ? (
              <>
                Aplikuj na
                <br />
                zryw
              </>
            ) : (
              text
            )}
          </h2>
        </div>
        {/* Biała figura z buttonem */}
        <div className="flex absolute left-1/2 bottom-0 -translate-x-1/2 w-[161px] h-[106px] xs:w-[40%] xs:max-w-[220px] xs:h-[35%] xs:max-h-[152px] bg-[var(--color-background)] rounded-t-full shadow-md justify-center items-center z-10 xs:rounded-t-full xs:bottom-0 xs:left-1/2 xs:-translate-x-1/2">
          <Button className="w-[60%] max-w-[92px] h-[45%] max-h-[45px] bg-accent" link={target ? "https://wkf.ms/3T3ynat" : "/aplikuj"} blank={target ? true : false}>Aplikuj</Button>
        </div>
      </div>
    </div>
    <div className="hidden xs:block xs:col-span-1" />
  </section>
);

export default Contact;
