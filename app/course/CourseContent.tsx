 
import React from "react";
import banner1 from '../assets/banner1.jpg'

type SectionProps = {
  title: string;
  lectureCount: number;
  duration: string;
  lectures?: {
    title: string;
    duration: string;
    isPreview: boolean;
  }[];
};

const Section: React.FC<SectionProps> = ({
  title,
  lectureCount,
  duration,
  lectures,
}) => (
  <div className="flex flex-col p-px mt-3 max-w-full rounded-lg border-t border-r border-l border-gray-300 w-[700px]">
    <div className="flex flex-wrap gap-5 justify-between px-6 py-4 w-full bg-orange-500 rounded-lg text-neutral-50 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 text-base font-bold leading-tight">
        {/* <img
          // loading="lazy"
          src={banner1}
          className="object-contain shrink-0 w-5 aspect-square"
          alt=""
        /> */}
        <div className="my-auto basis-auto">{title}</div>
      </div>
      <div className="my-auto text-sm leading-snug">
        {lectureCount} lectures • {duration}
      </div>
    </div>
    {lectures && (
      <div className="flex flex-wrap gap-5 justify-between px-7 py-6 text-sm leading-snug border-t border-gray-300 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-start text-neutral-50">
          {lectures.map((lecture, index) => (
            <div
              key={index}
              className={`flex gap-4 mt-4 ${
                lecture.isPreview ? "text-orange-500" : ""
              }`}
            >
              {/* <img
                loading="lazy"
                src={`http://b.io/ext_${25 + index}-`}
                className="object-contain shrink-0 w-4 aspect-[0.8]"
                alt=""
              /> */}
              <div className="my-auto basis-auto">{lecture.title}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col my-auto whitespace-nowrap">
          {lectures.map((lecture, index) => (
            <div
              key={index}
              className="flex gap-5 justify-between mt-6 max-md:mr-0.5"
            >
              {lecture.isPreview && (
                <div className="text-orange-500">Preview</div>
              )}
              <div className="text-neutral-500">{lecture.duration}</div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

type CourseContentProps = {
  sections: SectionProps[];
};

const CourseContent: React.FC<CourseContentProps> = ({ sections }) => {
  return (
    <section className="mt-7">
      <h2 className="text-2xl font-bold leading-tight text-neutral-50">
        Course content
      </h2>
      <div className="flex flex-wrap gap-5 justify-between mt-9 max-w-full text-sm w-[696px]">
        <div className="leading-snug text-neutral-50">
          {sections.length} sections •{" "}
          {sections.reduce((acc, section) => acc + section.lectureCount, 0)}{" "}
          lectures •{" "}
          {sections.reduce(
            (acc, section) => acc + parseInt(section.duration),
            0
          )}
          m total length
        </div>
        <button className="font-bold leading-tight text-center text-orange-500">
          Expand all sections
        </button>
      </div>
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </section>
  );
};

export default CourseContent;
