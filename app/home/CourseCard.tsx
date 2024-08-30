import React from 'react';
import starFill from '../assets/icons/star_filled.svg'
import star from '../assets/icons/star.svg'

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
            Created by:
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
            {[...Array(4)].map((_, i) => (
              // <img
              //   key={i}
              //   // loading="lazy"
              //   src={starFill}
              //   alt=""
              //   className="w-4 aspect-[0.89]"
              // />
              <svg key={i} width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.92176 17.5695L6.03785 12.2621L2.29468 8.69238L7.23978 8.22019L9.16288 3.21499L11.086 8.22019L16.0311 8.69238L12.2879 12.2621L13.404 17.5695L9.16288 14.7553L4.92176 17.5695Z" fill="#FF6931"/>
</svg>



            ))}
            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.3075 14.4153L8.47098 12.9799L10.6345 14.4342L10.0678 11.7144L11.9738 9.90119L9.46687 9.65565L8.47098 7.08694L7.47509 9.63676L4.9682 9.8823L6.87413 11.7144L6.3075 14.4153ZM4.22987 17.5695L5.34595 12.2621L1.60278 8.69238L6.54789 8.22019L8.47098 3.21499L10.3941 8.22019L15.3392 8.69238L11.596 12.2621L12.7121 17.5695L8.47098 14.7553L4.22987 17.5695Z" fill="#FF6931"/>
</svg>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
