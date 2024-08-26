 
import React from 'react';

type ReviewProps = {
  name: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
};

const Review: React.FC<ReviewProps> = ({ name, avatar, rating, date, content }) => (
  <div className="flex flex-col items-start py-7 w-full border-t border-gray-300 max-md:mt-8">
    <div className="flex gap-5 justify-between self-stretch w-full font-bold">
      <div className="flex gap-4 self-start">
        <div className="px-2 w-10 h-10 text-base leading-none text-white whitespace-nowrap rounded-3xl bg-neutral-50">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="flex flex-col my-auto leading-tight">
          <div className="self-start text-base text-neutral-50">{name}</div>
          <div className="self-end mt-3 text-xs tracking-wide text-neutral-500">{date}</div>
        </div>
      </div>
      <img loading="lazy" src={`http://b.io/ext_${72 + rating}-`} className="object-contain shrink-0 w-12 aspect-square" alt={`${rating} stars`} />
    </div>
    <p className="mt-5 text-base leading-snug text-neutral-50">{content}</p>
    <div className="flex gap-2 mt-4">
      <div className="grow my-auto text-xs leading-snug text-neutral-500">Helpful?</div>
      <div className="flex gap-1">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b36e4a8b7c3f831f24c78593fcd2f94eeb946e1f473fa7f93c7b379cc1e798b0?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 aspect-square w-[34px]" alt="Thumbs up" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c447f34727706fdedc932bccca345376f2ffadd1a4a9ec854b14848644b19012?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 aspect-square w-[34px]" alt="Thumbs down" />
      </div>
    </div>
  </div>
);

type CourseReviewsProps = {
  reviews: ReviewProps[];
};

const CourseReviews: React.FC<CourseReviewsProps> = ({ reviews }) => {
  return (
    <section className="mt-14 max-md:mt-10">
      <h2 className="flex gap-5 text-2xl font-bold leading-tight text-neutral-50">
        <div className="flex gap-1">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/715f0ed3d467d298f6d88f9ef361be2c7829066e17adc03ac69dd7373e4110c1?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 self-start w-6 aspect-square" alt="" />
          <span>4.7 course rating</span>
        </div>
        <div className="flex gap-1 self-start mt-1">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9571542992c0697ee316843b3c88093c983d4fbd2a148fff10462128b3619388?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 self-start w-4 aspect-square" alt="" />
          <span>2K ratings</span>
        </div>
      </h2>
      <div className="mt-6 max-w-full w-[700px]">
        <div className="flex gap-5 max-md:flex-col">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <Review {...review} />
            </div>
          ))}
        </div>
      </div>
      <button className="px-4 py-4 mt-6 text-sm font-bold leading-tight text-center border border-solid border-neutral-50 text-neutral-50 w-full">
        Show all reviews
      </button>
    </section>
  );
};

export default CourseReviews;