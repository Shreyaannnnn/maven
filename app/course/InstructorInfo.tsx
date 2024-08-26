 
import React from "react";

type InstructorInfoProps = {
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  studentCount: number;
  courseCount: number;
  avatarSrc: string;
};

const InstructorInfo: React.FC<InstructorInfoProps> = ({
  name,
  description,
  rating,
  reviewCount,
  studentCount,
  courseCount,
  avatarSrc,
}) => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold leading-tight text-neutral-50">
        Instructor
      </h2>
      <h3 className="mt-6 text-xl font-bold leading-tight text-orange-500">
        {name}
      </h3>
      <p className="mt-2.5 text-base leading-snug text-neutral-500">
        {description}
      </p>
      <div className="flex gap-4 mt-2.5 text-sm leading-snug text-neutral-50">
        <img
          loading="lazy"
          src={avatarSrc}
          className="object-contain shrink-0 w-28 max-w-full aspect-square"
          alt={`${name}'s avatar`}
        />
        <div className="flex flex-col items-start my-auto">
          <div className="flex gap-4 self-stretch">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1cbd5fb81a9699e6048ea261467122788928841a18b9b492031471b63a9f088?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
              className="object-contain shrink-0 w-4 aspect-[0.84]"
              alt=""
            />
            <div className="grow shrink my-auto w-[116px]">
              {rating} Instructor Rating
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ef603a9f0667f05a8398b97ba6bd115824bb313fe552c03592a1d6bce8b180c?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
              className="object-contain shrink-0 w-4 aspect-[0.8]"
              alt=""
            />
            <div className="my-auto">
              {reviewCount.toLocaleString()} Reviews
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d2f63c7cabff58069151dca8d642edd41869c30ca5d6c775e702c901f28eef2?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
              className="object-contain shrink-0 w-4 aspect-[0.8]"
              alt=""
            />
            <div className="my-auto basis-auto">
              {studentCount.toLocaleString()} Students
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3011ba258447ded771ea26bb5aec0a6cd8969b939c01bfa6364af7b9fab7368?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
              className="object-contain shrink-0 w-4 aspect-[0.84]"
              alt=""
            />
            <div className="my-auto">{courseCount} Courses</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorInfo;
