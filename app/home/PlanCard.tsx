import React from 'react';

interface PlanFeature {
  icon: string;
  text: string;
}

interface PlanCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: PlanFeature[];
  isPersonal?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  subtitle,
  price,
  features,
  isPersonal = false,
}) => {
  const bgColor = isPersonal ? 'bg-white' : 'bg-zinc-300';
  const textColor = isPersonal ? 'text-orange-500' : 'text-orange-500';

  return (
    <div
      className={`flex flex-col grow  pb-32 w-[25vw]  rounded-lg ${bgColor} border-t-8 border-t-orange-500  max-md:mt-5 mx-0 `}
    >
      <div className="flex flex-col items-start w-full text-base  ">
        <div className="w-full bg-[#D9D9D9] pl-2 py-2">
          <h3 className={`font-bold leading-5 ${textColor}`}>{title}</h3>
          <p className="text-xs leading-loose text-zinc-600">{subtitle}</p>
        </div>
        <div className="w-full flex flex-col pl-2">
          <p className={`font-semibold leading-5 ${textColor} mt-3`}>{price}</p>
          <p className="text-xs leading-loose text-zinc-600">
            Billed annually. Cancel anytime.
          </p>
          <button className="self-center flex gap-2 justify-center items-center self-end py-3 px-8  mt-7 font-medium tracking-wide leading-loose text-white bg-orange-500 min-h-[53px] rounded-[50px] max-md:px-5">
            <span className="self-stretch mx-auto my-auto">
              Start Subscription
            </span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c30d8a7da1fe9b8eb2a26776654588ce9c053c2b88215b295ac6b72bbf81b0?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square fill-white w-[13px]"
            />
          </button>
        </div>
      </div>
      <div className="w-full pl-2">
        <ul className="flex flex-col items-start mt-5 max-w-full text-xs leading-loose text-zinc-600  max-md:ml-2.5">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2.5 mt-2.5">
              <img
                loading="lazy"
                src={feature.icon}
                alt=""
                className="object-contain shrink-0 aspect-square w-[18px]"
              />
              <span className="basis-auto">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
