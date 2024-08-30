import Image from 'next/image';
import React from 'react';
import banner1 from '../assets/banner1.jpg';
import bluetick from '../assets/bluetick.svg';
import instagram from '../assets/icons/instagram.svg';
import tiktok from '../assets/icons/tiktok.svg';
import youtube from '../assets/icons/youtube.svg';
import mail from '../assets/icons/mail.svg';
import bookmark from '../assets/icons/bookmark.svg';
import Link from 'next/link';


type CategoryBannerProps = {
  name: any;
  image: any;
  followers: any;
  profession: any;
  price: any;
};

const CategoryBanner = ({
  name,
  image,
  followers,
  profession,
  price,
}: CategoryBannerProps) => {
  return (
    <div className="hero-banner flex flex-col gap-2 items-center p-[25px] rounded-[2.3rem] bg-white ">
      <div className="bg-[#FF990033] rounded-[2rem]">
        <Link href='course'>
        <Image
          src={image}
          alt="banner1"
          width={246}
          height={212}
          className="rounded-3xl object-contain"
        />
        </Link>
      </div>

      <Link href='course' className="info w-full flex items-center justify-between">
      {/* <div className="info w-full flex items-center justify-between"> */}
        <div>
          <h3 className="text-black font-bold text-xl flex gap-2 ">
            {name}
            <Image src={bluetick} alt="bluetick" width={25} height={25} />
          </h3>

          {/* <p className="text-gray-500 text-md">{profession}</p> */}
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl text-black font-extrabold">{followers}</h3>
          <span className="text-gray-500 text-md">Followers</span>
        </div>
      {/* </div> */}
      </Link>


      <hr className=" mt-2 h-[5px] w-full text-gray-600" />
      <div className="flex flex-col justify-between items-center w-full h-full">
        <div className="social w-full flex gap-4 justify-between items-center ">
          <div className="flex gap-1">
            <Image
              className=" border-2 w-[40px] h-[40px] border-gray-300 p-2 rounded-lg"
              src={instagram}
              width={35}
              height={35}
              alt="instagram"
            />
            <Image
              className=" border-2 w-[40px] h-[40px] border-gray-300 p-2 rounded-lg"
              src={tiktok}
              width={35}
              height={35}
              alt="instagram"
            />
            <Image
              className=" border-2 w-[40px] h-[40px] border-gray-300 p-2 rounded-lg"
              src={youtube}
              width={35}
              height={35}
              alt="instagram"
            />
          </div>
          <p className="px-3 py-2 bg-green-100/55 text-green-600 font-semibold rounded-3xl">
            {profession}
          </p>
        </div>

        <div className="w-full">
          <div className="w-full flex justify-between mb-2">
            <p className="text-gray-400 text-lg">Coaching Price</p>
            <span className="text-black text-xl font-bold">{price}</span>
          </div>
          <div className="w-full flex gap-1 justify-between items-center">
            <div className="flex gap-1">
              <Image
                className="p-2 rounded-xl border-[3px] w-[35px] h-[35px] border-gray-300"
                src={mail}
                alt="mail"
                width={40}
                height={40}
              />
              <Image
                className="p-2 rounded-xl border-[3px] w-[35px] h-[35px] border-gray-300"
                src={bookmark}
                alt="mail"
                width={35}
                height={20}
              />
            </div>
            <button className="bg-orange-400 rounded-lg px-4 py-1 flex flex-nowrap">
              <a href="/course" className="text-white text-lg">
                Hire Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
