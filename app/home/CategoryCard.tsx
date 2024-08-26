 
import React from "react";

interface CategoryCardProps {
  imageSrc: string;
  title: string;
  count: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageSrc,
  title,
  count,
}) => {
  return (
    <div className="flex relative flex-col items-start px-10 py-11 w-full aspect-[0.662] max-md:px-5 max-md:mt-5">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-cover absolute inset-0 size-full"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab8d01ffa43cfa56a0a656983a6a8d25ba00cf56dcdd3530715ad20fd7eaac62?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
        alt=""
        className="object-contain w-12 aspect-square"
      />
      <h2 className="relative mt-3.5 text-6xl font-semibold leading-none text-white max-md:text-4xl">
        {title}
      </h2>
      <p className="relative mt-1.5 text-2xl text-white leading-[50px]">
        {count}
      </p>
      <div className="flex relative gap-3.5 items-center mt-56 max-md:mt-10">
        <div className="flex shrink-0 self-stretch my-auto w-12 h-12 rounded-full bg-zinc-300" />
        <div className="flex shrink-0 self-stretch rounded-full bg-zinc-300 h-[70px] w-[70px]" />
        <div className="flex shrink-0 self-stretch my-auto w-9 h-9 rounded-full bg-zinc-300" />
      </div>
    </div>
  );
};

export default CategoryCard;
