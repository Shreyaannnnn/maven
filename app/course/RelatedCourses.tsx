import React from 'react';

type CourseCardProps = {
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  duration: string;
  lastUpdated: string;
  imageSrc: string;
  price: string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  rating,
  reviewCount,
  duration,
  lastUpdated,
  imageSrc,
  price,
}) => (
  <div className="flex flex-col items-start">
    <div className="flex overflow-hidden flex-col grow justify-center p-px w-full rounded-lg border border-gray-300 border-solid bg-neutral-50 max-md:mt-4">
      <img
        loading="lazy"
        src={imageSrc}
        className="object-contain w-full aspect-[1.78]"
        alt={title}
      />
    </div>
    <h3 className="self-stretch text-base font-bold leading-5 text-neutral-50 mt-2">
      {title}
    </h3>
    <p className="mt-1.5 text-xs leading-snug text-neutral-500">{instructor}</p>
    <div className="flex gap-1 mt-1.5 whitespace-nowrap">
      <span className="text-sm font-bold leading-tight text-yellow-950">
        {rating}
      </span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87159c6a93c322a960b0ef7a28380e2a1a2331405aff42e0f661e28f5e15481c?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
        className="object-contain shrink-0 self-start aspect-[4.37] w-[70px]"
        alt={`${rating} stars`}
      />
      <span className="text-xs leading-snug text-neutral-500">
        ({reviewCount.toLocaleString()})
      </span>
    </div>
    <div className="flex gap-1 mt-1.5 text-xs leading-snug text-neutral-500">
      <span>{duration} total hours</span>
      <span className="text-xs leading-loose">•</span>
      <span>Updated {lastUpdated}</span>
    </div>
    <div className="mt-1.5 text-base font-bold leading-none text-neutral-50">
      {price}
    </div>
  </div>
);

type RelatedCoursesProps = {
  courses: CourseCardProps[];
};

const RelatedCourses: React.FC<RelatedCoursesProps> = ({ courses }) => {
  return (
    <section className="mt-9">
      <h2 className="flex gap-2 text-2xl font-bold leading-tight">
        <span className="text-neutral-50">More Courses by</span>
        <span className="text-orange-500 basis-auto">YouAccel Training</span>
      </h2>
      <div className="mt-4 max-w-full w-[700px]">
        <div className="flex gap-5 max-md:flex-col">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCourses;
