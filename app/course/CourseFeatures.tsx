 
import React from "react";

type FeatureProps = {
  icon: string;
  text: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, text }) => (
  <div className="flex gap-4">
    <img
      loading="lazy"
      src={icon}
      className="object-contain shrink-0 w-5 aspect-[0.87]"
      alt=""
    />
    <div className="grow shrink my-auto w-44">{text}</div>
  </div>
);

type CourseFeaturesProps = {
  features: FeatureProps[];
};

const CourseFeatures: React.FC<CourseFeaturesProps> = ({ features }) => {
  return (
    <section className="mt-14 text-base leading-snug text-neutral-50 max-md:mt-10">
      <h2 className="text-2xl font-bold leading-tight">
        This course includes:
      </h2>
      <div className="flex flex-wrap gap-10 mt-4 max-w-full w-[574px]">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col flex-1">
            <Feature icon={feature.icon} text={feature.text} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseFeatures;
