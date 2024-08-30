import React from 'react';
import CourseCard from './CourseCard';

const CoursesSection: React.FC = () => {
  const courses = [
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/eb936da4840d57dd710789216cd1a1b371767bea2421a28ca748419c6d166bf1?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      title: 'The Complete 2024 Web Development Bootcamp',
      author: 'Dr. Angela Yu',
      rating: 4.0,
      isDark: true,
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/13198bf62495b3d3e010e09c4a8774c46400e67e1e1baec4d574beff7152a2a2?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      title: 'The Complete 2024 Web3 Bootcamp',
      author: 'Vitalik',
      rating: 4.0,
      isDark: true,
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/9d3172fae3abd27a95c89712efa5467765744102841be38ee3b88da90c28c82d?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      title: 'The Complete 2024 Solidity Bootcamp',
      author: 'Nader',
      rating: 4.0,
      isDark: true,
    },
    // {
    //   imageSrc:
    //     'https://cdn.builder.io/api/v1/image/assets/TEMP/9746e0807cb9217030f82320e25cb087f1cc3ac2821ee48f483a28b49f7e9f1f?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
    //   title: 'The Complete 2024 Rust Bootcamp',
    //   author: 'Shreyan',
    //   rating: 4.0,
    //   isDark: true,
    // },
  ];

  return (
    <section className="pt-24 w-[100vw] max-md:mt-10 md:w-full p-8 bg-white px-[15vw]">
      <div className="flex gap-5 max-md:flex-col">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
          >
            <CourseCard {...course} />
          </div>
        ))}
      </div>
      <button className="flex gap-2 justify-center items-center px-10 py-5 mt-16 text-base font-medium tracking-wide leading-loose text-white bg-orange-500 min-h-[61px] rounded-[50px] max-md:px-5 max-md:mt-10">
        <span className="self-stretch my-auto">Show More</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd1bd4757dd6b3c9468394f647ba254ba180d3504199bc7d5c169de8e98b3102?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square fill-white w-[13px]"
        />
      </button>
    </section>
  );
};

export default CoursesSection;
