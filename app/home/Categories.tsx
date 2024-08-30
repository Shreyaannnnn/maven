import React from 'react';
import CategoryCard from './CategoryCard';
import Image from 'next/image';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import bluetick from '../assets/bluetick.svg';
import instagram from '../assets/icons/instagram.svg';
import mail from '../assets/icons/mail.svg';
import bookmark from '../assets/icons/bookmark.svg';
import CategoryBanner from './CategoryBanner';

const Categories: React.FC = () => {
  const categories = [
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/4723eff85485fb6be6938d2441f17e5bf6714dee9d2be1c2b2853fd8e31f326b?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      title: 'Show All',
      count: '13 150 Bloggers',
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/3bcb21d8b8be950e2a2b305c3059ef1e5198b2f00ddb899f90cdecfa149f9c3c?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      title: '',
      count: '',
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/03763ca6fe4392347a52bed11574ae82edd243a25cf9cbc13d47abb7b8341008?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      title: '',
      count: '',
    },
  ];

  return (
    <section className="self-center mt-6 w-screen  md:w-full px-6 py-12 ">
      <div className="flex gap-6 justify-center max-md:flex-col items-center">
        {/* <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76d2ac0586a5dd6b3ef1a9f47dbe1849d045587a749b13acae3ce27d76475989?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
            alt="Category"
            className="object-contain grow shrink-0 max-w-full rounded-none aspect-[0.55] w-[301px] max-md:mt-5"
          />
        </div> */}
        <CategoryBanner
          name={'Gary Van'}
          image={banner1}
          followers={'825k'}
          profession={'Developer'}
          price={'0.04 EDU'}
        />
        <div className="min-w-[320px] relative flex flex-col gap-2 items-center overflow-hidden box-border rounded-xl">
          <Image
            className="object-contain block max-w-full  relative"
            src={banner4}
            alt="banner4"
          />
          <h3 className="text-5xl font-extrabold absolute top-[140px] left-[42px]">
            Show All
          </h3>
          <p className="text-lg absolute top-[190px] left-[42px]">Creators</p>
        </div>

        <CategoryBanner
          name={'Chris Do'}
          image={banner2}
          followers={'561k'}
          profession={'Designer'}
          price={'0.01 EDU'}
        />
        <CategoryBanner
          name={'Stephanie'}
          image={banner3}
          followers={'720k'}
          profession={'Art Director'}
          price={'0.02 EDU'}
        />
        {/* {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full"
          >
            <CategoryCard {...category} />
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default Categories;
