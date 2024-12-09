import React from "react";
import Image from "next/image";

const CompanyLogo = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-20 pt-14 px-4">
      <div className="flex justify-center items-center">
        <Image src="/Logo (3).png" alt="Zaphier" width={85} height={85} />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (4).png"
          alt="Pipe Drive"
          width={107}
          height={109}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (5).png"
          alt="Cib Bank"
          width={135}
          height={135}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (6).png"
          alt="Company"
          width={63}
          height={65}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (7).png"
          alt="Burnt"
          width={98}
          height={101}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (8).png"
          alt="Panda"
          width={113}
          height={115}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image src="/Logo (9).png" alt="Moz" width={84} height={87} />
      </div>
    </div>
  );
};

export default CompanyLogo;
