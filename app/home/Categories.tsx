 
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories: React.FC = () => {
  const categories = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4723eff85485fb6be6938d2441f17e5bf6714dee9d2be1c2b2853fd8e31f326b?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f",
      title: "Show All",
      count: "13 150 Bloggers",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3bcb21d8b8be950e2a2b305c3059ef1e5198b2f00ddb899f90cdecfa149f9c3c?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f",
      title: "",
      count: "",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/03763ca6fe4392347a52bed11574ae82edd243a25cf9cbc13d47abb7b8341008?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f",
      title: "",
      count: "",
    },
  ];

  return (
    <section className="self-center mt-6 w-full max-w-[1319px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76d2ac0586a5dd6b3ef1a9f47dbe1849d045587a749b13acae3ce27d76475989?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
            alt="Category"
            className="object-contain grow shrink-0 max-w-full rounded-none aspect-[0.55] w-[301px] max-md:mt-5"
          />
        </div>
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full"
          >
            <CategoryCard {...category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
