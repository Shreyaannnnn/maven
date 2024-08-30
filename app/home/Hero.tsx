 
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center mt-14 text-white max-md:mt-10 max-md:max-w-full">
      <h1 className="text-7xl font-semibold text-center max-md:max-w-full max-md:text-4xl">
        Connect with Content <br/> <span className="text-orange-500">Creators</span>{" "}
        in Your <span className="text-orange-500">Niche</span>
      </h1>
      <form className="flex flex-wrap gap-10 self-center py-2 pr-2 pl-7 mt-6 max-w-full rounded-3xl bg-neutral-700 w-[605px] max-md:pl-5">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          className="flex-grow my-auto text-2xl bg-transparent text-zinc-300 outline-none"
        />
        <div className="flex flex-1 gap-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0add80cf0b1eae7380c3941d594bfb4cca54c7f188f15be500c16fca0ef01e7c?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
            alt=""
            className="object-contain shrink-0 my-auto aspect-[0.72] w-[23px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2e4af1611cdd312396c2d0a60ce6ae28b4cd630271d5ce09af61f4ed8823ca6?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
            alt="User avatar"
            className="object-contain shrink-0 w-10 rounded-full aspect-square"
          />
        </div>
      </form>
    </section>
  );
};

export default Hero;
