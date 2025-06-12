import React from "react";

const gallery: { img: string }[] = [
  { img: "/photos/apply-to-zryw.jpg" },
  { img: "/photos/pizza.jpg" },
  { img: "/photos/black-and-white.jpg" },
  { img: "/photos/outside.jpg" },
  { img: "/photos/company.jpg" },
  { img: "/photos/apply-create.jpg" },
];

const Gallery: React.FC = () => {
  return (
    <section className="mt-25 w-full max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid grid-cols-2 xs:grid-cols-3 gap-1 xs:gap-1.5 md:gap-3">
        {gallery.map((picture) => (
          <div
            key={picture.img}
            className="rounded-lg overflow-hidden h-[clamp(157px,25vw,383px)] overflow-hidden w-full"
          >
            <img
              src={picture.img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
