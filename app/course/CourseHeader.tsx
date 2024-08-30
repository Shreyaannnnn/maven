 
import React from "react";

type CourseHeaderProps = {
  Name: string;
  Description: string;
  rating: number;
  ratingCount: number;
  studentCount: number;
  lastUpdated: string;
  createdBy: string;
};

const CourseHeader: React.FC<CourseHeaderProps> = ({
  Name,
  Description,
  rating,
  ratingCount,
  studentCount,
  lastUpdated,
  createdBy,
}) => {
  return (
    <header className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
      <h1 className="self-stretch text-2xl font-semibold text-orange-500 max-md:mr-2.5 max-md:max-w-full">
        {Name}
      </h1>
      <p className="mt-3 text-xl font-light text-white max-md:max-w-full">
        {Description}
      </p>
      {/* <div className="flex gap-2 items-start mt-6">
        <span className="grow self-stretch text-sm font-bold text-amber-400">
          {rating.toFixed(1)}
        </span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1f44c85547329625a557a82eefb6fbb64b68c02a12cfbf6dea8ce1203b0d40b?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
              className="object-contain shrink-0 w-4 aspect-square"
              alt=""
            />
          ))}
        </div>
        <div className="flex gap-2 text-sm">
          <span className="grow font-semibold text-orange-500">
            ({ratingCount.toLocaleString()} ratings)
          </span>
          <span className="font-light text-white basis-auto">
            {studentCount.toLocaleString()} students
          </span>
        </div>
      </div> */}
      <div className="flex gap-1.5 mt-3 text-sm">
        <span className="grow font-light text-white">Created by</span>
        <span className="font-semibold text-orange-500">{createdBy}</span>
      </div>
      <time
        className="mt-6 text-sm font-light text-white"
        dateTime={lastUpdated}
      >
        Last updated {lastUpdated}
      </time>
    </header>
  );
};

export default CourseHeader;
