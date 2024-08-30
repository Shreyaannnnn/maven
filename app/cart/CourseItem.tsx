/**
 * This code was generated by Builder.io.
 */
import React from "react";

const CourseItem: React.FC = () => {
  return (
    <div className="self-stretch py-5 mt-3 w-full border-t border-gray-300 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-wrap grow gap-4 items-start text-xs font-bold leading-tight max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f28e81926bf45564ea8a3d8cd9fa50c408be7bda12cfa7c6b60a95e74d2ddfdb?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
              alt="Course thumbnail"
              className="object-contain shrink-0 max-w-full rounded-lg aspect-[1.74] w-[122px]"
            />
            <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit max-md:max-w-full">
              <h2 className="self-stretch text-base text-zinc-100 max-md:max-w-full">
                Twitter X Growth with AI ChatGPT - Marketing Business Sales
              </h2>
              <p className="mt-2 leading-snug text-zinc-100">
                By Jun Wu - Social Media Influencer
              </p>
              <div className="flex gap-1.5 items-center mt-3.5">
                <span className="self-stretch px-2 py-2 tracking-wide text-white whitespace-nowrap bg-orange-500 rounded-md">
                  Bestseller
                </span>
                <span className="self-stretch my-auto text-sm text-amber-400">
                  4.8
                </span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d342fbeae650de9d4c0720e9a7007377a158ae270dc35027a8642fd933235dbb?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
                  alt="Rating stars"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[5.68] w-[68px]"
                />
                <span className="self-stretch my-auto leading-snug text-neutral-500">
                  (150 ratings)
                </span>
              </div>
              <div className="flex gap-2.5 mt-3 leading-snug text-neutral-500">
                <span className="grow my-auto">3 total hours</span>
                <div className="flex gap-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8f1d3b08ea99cb8cbbd0ea2e598bd8ae6e690972f871c258b35d513edc2f350?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
                    alt=""
                    className="object-contain shrink-0 w-3.5 aspect-square"
                  />
                  <span className="my-auto">31 lectures</span>
                </div>
                <div className="flex gap-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/79638d88dc92b7ec76728140a0f8f89fe50879fe04854400fe58fc1ae50558db?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
                    alt=""
                    className="object-contain shrink-0 w-3.5 aspect-square"
                  />
                  <span className="my-auto">All Levels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start mt-1.5 w-full max-md:mt-10">
            <div className="flex gap-10 items-start ml-3.5 max-md:ml-2.5">
              <div className="flex flex-col mt-1 text-sm leading-snug text-center text-orange-500">
                <button className="self-end">Remove</button>
                <button className="mt-4">Save for Later</button>
              </div>
              <div className="flex flex-col leading-none whitespace-nowrap">
                <div className="flex gap-2.5 text-base font-bold text-orange-500">
                  <span className="my-auto">₹399</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/82cb0f209f2bfdd9d06aad52e0fc2969f07d4dddeb9c7e6b782efa2b501039f1?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
                    alt=""
                    className="object-contain shrink-0 w-4 aspect-square"
                  />
                </div>
                <span className="self-start mt-2.5 text-sm text-neutral-500">
                  ₹799
                </span>
              </div>
            </div>
            <button className="mt-4 text-sm leading-snug text-center text-orange-500">
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
