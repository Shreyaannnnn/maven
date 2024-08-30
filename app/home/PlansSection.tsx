import React from 'react';
import PlanCard from './PlanCard';

const PlansSection: React.FC = () => {
  const personalPlanFeatures = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/765285beb354d5825b1410d13cf3853b5613517c784d70b933592276d816f123?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Access to 11,000+ top courses',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6379f41cf2e8be09892484f56a25d6ebb1b4e28d04d12fe53abcc9af8e0343e?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Certification preparation',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/067970ed8a5147d9ec292a5b0dd198a44dc082b70f9b753e834faecdce59d0af?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Access to 11,000+ top courses.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/808d97fac375a4c354b24e05dcb32be4702a8a6d1044834d31b203f0edac0aa7?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Goal-focused recommendations',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ac7ff701144d3d3e6e85d92fbb69625e2fe0a2392cd8557c5c9b59559bdd2ab2?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'AI-powered coding exercises',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fc540886d1825e1c1397288f01194dae1fc5d8eac5b630659abf8a0a890002ea?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Analytics and adoption reports',
    },
  ];

  const teamPlanFeatures = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3a9b9ebccd3723bf27ea5627513a3c1467238e6614b749ea395f5444fd334064?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Access to 11,000+ top courses.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cbc55de88e89130ce74c90ae76f7a5f06bab699a5a98863e08daa0907738c11d?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Certification preparation',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3a9b9ebccd3723bf27ea5627513a3c1467238e6614b749ea395f5444fd334064?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Access to 11,000+ top courses.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0709c4b84489eb1aa7fe74fb942334f0b42266bbc80b4485c0ee50a949fe1be0?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Goal-focused recommendations',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/57bd81dd163c944bb8c3aeb014306bb2156b949e3dcf2ffebdcc0aede13af1ff?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'AI-powered coding exercises',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bd92127a3fb552fb8616c9096e16f10315ce50777a0a125ea01b64b21e28b5cf?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Advanced analytics and insights',
    },
  ];

  const enterprisePlanFeatures = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3a9b9ebccd3723bf27ea5627513a3c1467238e6614b749ea395f5444fd334064?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Access to 11,000+ top courses.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cbc55de88e89130ce74c90ae76f7a5f06bab699a5a98863e08daa0907738c11d?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Certification preparation',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/57bd81dd163c944bb8c3aeb014306bb2156b949e3dcf2ffebdcc0aede13af1ff?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'AI-powered coding exercises',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0709c4b84489eb1aa7fe74fb942334f0b42266bbc80b4485c0ee50a949fe1be0?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Goal-focused recommendations',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8a7b2b62a2f9a8e3aab669e9bda739baf851f0114cc20fd8f7bfadafb01c6fc8?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Strategic implementation services with add-on',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bd92127a3fb552fb8616c9096e16f10315ce50777a0a125ea01b64b21e28b5cf?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Advanced analytics and insights',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/085bfeb66dc1ca42a842b3fa771a3d590bd57cf9c003c9ad56504ce240b37acd?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Dedicated customer success team',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1d1eb9a7243c8d5e2cc630f0393b6bd8017ce134a855a111bd37fd85a37efed?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'International course featuring 15 languages',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3f8a447f45ea8f54f04a8e283034255b4eadc1d0d8fc4c75ca2fc4a16f42c166?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Customizable content',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dbe877f5d88e56b45735542d53d291e270c47122b073afc6c791dd8638f6298f?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f',
      text: 'Hands-on tech training with add-on',
    },
  ];

  return (
    <section id='plans' className="self-center p-0 mt-20 w-full  max-md:mt-10 max-md:max-w-full ">
      <div className="flex justify-center gap-5 max-md:flex-col ">
        <div className="flex flex-col  max-md:ml-0 max-md:w-full rounded-xl ">
          <PlanCard
            title="Personal Plan"
            subtitle="For you"
            price="Starting at $7 per month"
            features={personalPlanFeatures}
            isPersonal={true}
          />
        </div>

        <div className="flex flex-col  max-md:ml-0 max-md:w-full rounded-xl bg-red-400">
          <PlanCard
            title="Team Plan"
            subtitle="For Your Team"
            price="Starting at $10 per month"
            features={teamPlanFeatures}
            isPersonal={true}
          />
        </div>

        <div className="flex flex-col  max-md:ml-0 max-md:w-full rounded-xl bg-red-400">
          <PlanCard
            title="Enterprise Plan"
            subtitle="For Your Whole Organisation"
            price="Starting at $14 per month"
            features={enterprisePlanFeatures}
            isPersonal={true}
          />
        </div>
        {/* <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-1 w-full max-md:mt-4 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 text-xs leading-loose text-zinc-600 max-md:max-w-full">
              <div className="flex flex-col flex-1 grow shrink-0 items-start pt-3 pr-20 pb-6 pl-2.5 basis-0 bg-zinc-300 w-fit max-md:pr-5">
                <h3 className="text-base font-semibold leading-none text-orange-500">
                  Team Plan
                </h3>
                <p className="mt-1">For your team</p>
                <p className="mt-3 ml-3 max-md:ml-2.5">Individual</p>
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 items-start pt-2.5 pr-20 pb-4 pl-4 basis-0 bg-zinc-300 w-fit max-md:pr-5">
                <h3 className="text-base font-semibold leading-none text-orange-500">
                  Enterprise Plan
                </h3>
                <p>For your whole organization</p>
                <div className="flex gap-0.5 mt-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/52309915fb87ce2b58d776c982e8404aaf1c7d837b15f34847ac7ad6950e3b53?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
                    alt=""
                    className="object-contain shrink-0 self-start mt-1.5 aspect-square w-[9px]"
                  />
                  <p className="basis-auto">More than 20 people</p>
                </div>
              </div>
            </div>
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <PlanCard
                    title="Team Plan"
                    subtitle="For your team"
                    price="Starting at $9 per month"
                    features={personalPlanFeatures}
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <PlanCard
                    title="Enterprise Plan"
                    subtitle="For your whole organization"
                    price="Starting at $9 per month"
                    features={enterprisePlanFeatures}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PlansSection;
