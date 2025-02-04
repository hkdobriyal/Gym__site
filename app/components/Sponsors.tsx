import Image from "next/image";
import React from "react";
import img1 from "public/images/sponsors/img-1.png";
import img2 from "public/images/sponsors/img-2.png";
import img3 from "public/images/sponsors/img-3.png";
import img4 from "public/images/sponsors/img-4.png";
import img5 from "public/images/sponsors/img-5.png";

function Sponsors() {
  return (
    <section id="sponsors">
      <div className="p-16 flex flex-col lg:flex-row lg:py-32 justify-center items-center gap-8">
        <Image
          src={img1}
          alt="sponsor 1"
          width={150}
          height={150}
          className="hover:invert duration-300 ease-linear"
        />
        <Image
          src={img2}
          alt="sponsor 2"
          width={150}
          height={150}
          className="hover:invert duration-300 ease-linear"
        />
        <Image
          src={img3}
          alt="sponsor 3"
          width={150}
          height={150}
          className="hover:invert duration-300 ease-linear"
        />
        <Image
          src={img4}
          alt="sponsor 4"
          width={150}
          height={150}
          className="hover:invert duration-300 ease-linear"
        />
        <Image
          src={img5}
          alt="sponsor 5"
          width={150}
          height={150}
          className="hover:invert duration-300 ease-linear"
        />
      </div>
    </section>
  );
}

export default Sponsors;
