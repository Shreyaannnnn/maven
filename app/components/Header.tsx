 
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between px-16 py-3 w-full text-base bg-neutral-800 max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/390527af2983f86e76dc4beca709a5c8a09ee94e4e9a18c8283eb14b28e5e0bf?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
        alt="Maven House logo"
        className="object-contain shrink-0 my-auto max-w-full aspect-[2.17] w-[113px]"
      />
      <nav className="flex flex-wrap gap-10 max-md:max-w-full">
        <div className="flex flex-auto gap-9 my-auto text-white">
          <a href="#plans" className="basis-auto">
            Plans & Pricing
          </a>
          <a href="#teach" className="basis-auto">
            Teach On Maven House
          </a>
        </div>
        <button className="gap-2 self-stretch px-6 py-4 font-medium tracking-wide leading-loose text-white bg-orange-500 rounded-[50px] max-md:px-5">
          Connect Wallet
        </button>
      </nav>
    </header>
  );
};

export default Header;
