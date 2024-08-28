import React from 'react';

interface CourseCardProps {
  imageSrc: string;
  title: string;
  author: string;
  rating: number;
  isDark?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  imageSrc,
  title,
  author,
  rating,
  isDark = false,
}) => {
  const textColor = isDark ? 'text-orange-500' : 'text-zinc-900';
  const bgColor = isDark ? 'bg-neutral-800' : 'bg-white';
  const borderColor = isDark ? '' : 'border border-orange-500 border-solid';

  return (
    <div
      className={`flex flex-col grow pb-8 w-full rounded-xl ${bgColor} ${borderColor} max-md:mt-3`}
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-full rounded-none aspect-[1.03]"
      />
      <div className="flex flex-col items-start pr-14 pl-2 mt-3.5 w-full max-md:pr-5">
        <h3
          className={`text-base font-semibold leading-5 ${textColor} w-[258px]`}
        >
          {title}
        </h3>
        <div className="flex gap-1.5 mt-2.5">
          <span className="grow text-sm leading-none text-zinc-400">
            Created by :
          </span>
          <span
            className={`text-base font-semibold leading-none basis-auto ${
              isDark ? 'text-white' : 'text-zinc-600'
            }`}
          >
            {author}
          </span>
        </div>
        <div className="flex gap-2.5 mt-3">
          <span
            className={`grow text-base font-semibold leading-none ${
              isDark ? 'text-white' : 'text-zinc-600'
            }`}
          >
            {rating.toFixed(1)}
          </span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                loading="lazy"
                src={`http://b.io/ext_${12 + i * 2}-`}
                alt=""
                className="object-contain shrink-0 w-4 aspect-[0.89]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
