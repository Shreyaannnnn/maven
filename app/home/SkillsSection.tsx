import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = [
    'Web Devlopment',
    'Java Script',
    'React JS',
    'Angular',
    'Java',
    'Android Devlopment',
  ];

  return (
    <section className="flex flex-col items-center justify-center px-20 py-24 mt-36 w-full bg-white max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-6xl font-semibold leading-none text-orange-500 max-md:max-w-full max-md:text-4xl">
        All the skills you need in one place
      </h2>
      <p className="self-center mt-8 text-base text-zinc-600 max-md:max-w-full">
        From critical skills to technical topics, Udemy supports your
        professional development.
      </p>
      <div className="flex mt-12 w-full text-sm font-semibold max-w-[1112px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col text-stone-900">
          <div className="self-start">Web Development</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12bd6d16c33bb587872bfb89d54f6d8e1205346e4cfe161bc5a5f5eb266002dd?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
            alt=""
            className="object-contain mt-2.5 aspect-[76.92] w-[152px]"
          />
        </div>
        <div className="flex flex-col grow shrink-0 basis-0 text-zinc-400 w-fit max-md:max-w-full">
          <div className="flex gap-10 self-end max-w-full w-[899px] max-md:mr-1">
            <div>IT Certification</div>
            <div>Leadership</div>
            <div>Data Science</div>
            <div className="grow shrink w-[100px]">Communication</div>
            <div className="grow shrink w-[217px]">
              Business Analytics & Intelligence
            </div>
          </div>
          <div className="shrink-0 mt-2.5 h-0.5 border-2 border-solid opacity-20 bg-neutral-800 border-neutral-800 max-md:max-w-full" />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 mt-5 w-full text-sm tracking-wide leading-7 max-w-[1110px] text-zinc-600 max-md:max-w-full">
        <div className="flex flex-wrap flex-auto gap-6 items-start max-md:max-w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`gap-2 self-stretch py-2 px-5 ${
                index === 0
                  ? 'text-white bg-orange-500'
                  : 'border-2 border-orange-500 border-solid'
              } min-h-[40px] rounded-[52px]`}
            >
              {skill}
            </div>
          ))}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad7122328a1364f748b5846f26ed8bc6e6472112d5d9a87521b8ffd8fbe875ac?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
          alt=""
          className="object-contain shrink-0 self-start aspect-square w-[38px]"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
