import React from "react";

const AboutSection2: React.FC = () => {
  return (
    <section className="w-full mt-30 lg:mt-50">
      <picture>
        <source
          srcSet="/photos/apply-sounds-familiar.jpg"
          media="(min-width: 600px)"
        />
        <img
          src="/photos/apply-sounds-familiar.jpg"
          alt="team"
          className="w-full h-1779px rounded-lg object-cover"
        />
      </picture>
    </section>
  );
};

export default AboutSection2;
