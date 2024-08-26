 
import React from "react";

const GrowthSection: React.FC = () => {
  return (
    <section className="flex flex-col self-end mt-32 mr-11 w-full max-w-[1298px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <h2 className="self-end text-6xl font-semibold text-orange-500 leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
        Accelerate growth — <span className="text-white">for you or </span>{" "}
        <br />
        <span className="text-white">your organization</span>
      </h2>
      <p className="self-start mt-12 ml-16 text-base text-white max-md:mt-10 max-md:max-w-full">
        Continuing from where we left off: Reach goals faster with one of our
        plans or programs. Try one free today or contact sales to learn more.
      </p>
    </section>
  );
};

export default GrowthSection;
