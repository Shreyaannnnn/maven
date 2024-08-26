 
import React from "react";

type RelatedTopicsProps = {
  topics: string[];
};

const RelatedTopics: React.FC<RelatedTopicsProps> = ({ topics }) => {
  return (
    <section className="mt-14 max-md:mt-10">
      <h2 className="text-2xl font-bold leading-tight text-neutral-50">
        Explore related topics
      </h2>
      <div className="flex gap-2 mt-4 text-base font-bold leading-tight text-neutral-50">
        {topics.map((topic, index) => (
          <span
            key={index}
            className="px-3.5 py-4 rounded-full border border-solid border-neutral-50"
          >
            {topic}
          </span>
        ))}
      </div>
    </section>
  );
};

export default RelatedTopics;
