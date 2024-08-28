import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="flex flex-col justify-center  mt-32 w-full  px-16  max-md:px-5 max-md:mt-10 max-md:max-w-screen">
      <div className="bg-orange-500 rounded-3xl px-16 py-14 ">
        <h2 className="self-start text-7xl leading-tight font-bold text-black  max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
          Learning focused on <br /> your goals with <br />
          <span className="text-white"> Maven House</span>
        </h2>
        <div className="flex flex-wrap gap-5 justify-between items-start mt-20 w-full text-base font-medium tracking-wide leading-loose text-white max-md:mt-10 max-md:max-w-full">
          <button className="flex gap-2 items-center self-start px-9 py-4 border border-white border-solid bg-white bg-opacity-0 rounded-[50px] max-md:px-5">
            <span className="self-stretch my-auto">
              Start Your Development Journey Now!
            </span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecdcc91ecfb06bbc6a4038146485307ce30b5ba7ca516d2b152fee0d03ca76e0?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square fill-white w-[13px]"
            />
          </button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5370365d774c0297c941fad7e82ec901194689f5df3830f35159d306f28fe8c3?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
            alt=""
            className="object-contain shrink-0 self-end mt-10 w-9 aspect-square fill-white"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
