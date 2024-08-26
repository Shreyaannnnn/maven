 
import React from 'react';
import CourseHeader from './CourseHeader';
import RelatedTopics from './RelatedTopics';
import CourseFeatures from './CourseFeatures';
import CourseContent from './CourseContent';
import InstructorInfo from './InstructorInfo';
import CourseReviews from './CourseReviews';
import RelatedCourses from './RelatedCourses';
import Footer from '../components/Footer';
import Header from '../components/Header';

const WebDevelopmentCourse: React.FC = () => {
  const courseHeaderData = {
    title: "Internet and Web Development Fundamentals",
    subtitle: "Learn how the Internet Works and Setup a Testing & Production Web Server",
    rating: 4.7,
    ratingCount: 1719,
    studentCount: 172644,
    lastUpdated: "4/2021",
    createdBy: "YouAccel"
  };

  const relatedTopics = ["Web Development", "Development"];

  const courseFeatures = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d33d4edcdfefc9ed5b85a1f2b0cc43212e4ce7566917162fabff53fb0f60282?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f", text: "4 hours on-demand video" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/23f1842caa49b4f15f3862d877ff91786162d95f6473fb3200d4fdf394f307f8?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f", text: "1 downloadable resource" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7dee8d94d1f446163032b11cb11608be16ce7fa4465cbdba9e250c4d15263afa?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f", text: "Access on mobile and TV" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4eb46791ee41faf908b6cf0954d633e63d297a8bc0cd16d13637a83597ea5f8b?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f", text: "Certificate of completion" }
  ];

  const courseSections = [
    {
      title: "How the Internet Works",
      lectureCount: 7,
      duration: "30min",
      lectures: [
        { title: "The Internet Overview", duration: "05:25", isPreview: true },
        { title: "The HTTP Protocol", duration: "03:33", isPreview: true },
        { title: "The HTTPS Protocol", duration: "03:11", isPreview: true },
        { title: "The SMTP Protocol", duration: "04:42", isPreview: false },
        { title: "Outbound Mail Delivery", duration: "02:08", isPreview: false },
        { title: "Network Basics - LAN and WAN", duration: "05:56", isPreview: false },
        { title: "Network Ports and Firewalls", duration: "05:01", isPreview: false }
      ]
    }
    // Add more sections here
  ];

  const instructorInfo = {
    name: "YouAccel Training",
    description: "8+ Million Enrollments, 70k+ Reviews. Register Today.",
    rating: 4.3,
    reviewCount: 90374,
    studentCount: 1834144,
    courseCount: 135,
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/91f3d566e165c5e6d13b64fe10df2c77bd61e01f3cc3ecac9231952d33424594?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
  };

  const courseReviews = [
    {
      name: "Md. Golam A.",
      avatar: "MA",
      rating: 5,
      date: "a month ago",
      content: "yes it's good for me."
    },
    {
      name: "Nidal D.",
      avatar: "ND",
      rating: 5,
      date: "a month ago",
      content: "Parfait je recommande"
    }
    // Add more reviews here
  ];

  const relatedCourses = [
    {
      title: "HTML, CSS, & JavaScript - Certification Course for Beginners",
      instructor: "YouAccel Training",
      rating: 4.2,
      reviewCount: 9313,
      duration: "5.5",
      lastUpdated: "8/2024",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a30cb5659e20bc62f38bdd67181ebd340ebbf6fd431a0b2dd5e5acc49f731d3?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f",
      price: "Current price"
    },
    {
      title: "Web Development Masterclass - Online Certification Course",
      instructor: "YouAccel Training",
      rating: 4.4,
      reviewCount: 9898,
      duration: "26",
      lastUpdated: "8/2024",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3881aba02e975c8814ec6d77e8b5b6429f2ae483bf9122f1afb628ec2813d40c?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f",
      price: "Current price"
    },
    {
      title: "Adobe Lightroom Masterclass - Beginner to Expert",
      instructor: "YouAccel Training",
      rating: 4.1,
      reviewCount: 2320,
      duration: "8",
      lastUpdated: "7/2023",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a01dc4f8315d2e4dd26d486838719151a19580820bd272674d56952646bc3ae?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f",
      price: "Current price"
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-neutral-800 pb-[20px] ">
      <Header />
      <main className="flex flex-col items-start self-center mt-14 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
        <nav className="flex gap-3.5 text-xl leading-tight" aria-label="Breadcrumb">
          <a href="#development" className="grow text-gray-200">Development</a>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/54bda22312d74656bc85a7879c419cd1f14c980fc07c2455d04753c66f76ae10?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 w-6 aspect-square" alt="" />
          <a href="#web-development" className="text-orange-500 basis-auto">Web Development</a>
        </nav>
        <div className="mt-14 w-full max-w-[1204px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <CourseHeader {...courseHeaderData} />
            <RelatedTopics topics={relatedTopics} />
            <CourseFeatures features={courseFeatures} />
            <CourseContent sections={courseSections} />
            <InstructorInfo {...instructorInfo} />
            <CourseReviews reviews={courseReviews} />
            <RelatedCourses courses={relatedCourses} />
          </div>
          <aside className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col pb-6 mx-auto w-full bg-white rounded-lg border-b border-gray-300 shadow-[0px_2px_4px_rgba(0,0,0,0.08)] max-md:mt-10">
              <div className="flex overflow-hidden relative flex-col w-full text-base font-bold leading-tight text-center text-white rounded-lg aspect-[1.78]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9757c5f8107537cf6005432daf7040f2a9cbc1ee56bfc3e3051ad9b73020283b?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-cover absolute inset-0 size-full" alt="Course preview" />
                <div className="flex relative flex-col items-center px-16 pt-16 pb-5 rounded-lg border border-gray-300 border-solid max-md:px-5">
                  <div className="flex flex-col max-w-full w-[135px]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bf0175933746f46b30874393bd832659d2a27d508f584fefc6ded998d35714b?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain self-center w-16 rounded-lg aspect-square" alt="Play button" />
                    <div className="mt-8">Preview this course</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 text-base font-bold leading-tight text-center whitespace-nowrap bg-white bg-opacity-0">
                <div className="px-16 py-5 border-b-2 border-zinc-800 text-zinc-800 max-md:px-5">Personal</div>
                <div className="grow shrink my-auto text-neutral-500 w-[83px]">Teams</div>
              </div>
              <div className="flex flex-col px-6 mt-5 w-full max-md:px-5">
                <div className="flex gap-3.5 items-center self-start text-base leading-none text-zinc-800">
                  <div className="grow self-stretch text-2xl font-bold">$10.99</div>
                  <div className="self-stretch my-auto text-neutral-500">$49.99</div>
                  <div className="self-stretch my-auto">78% off</div>
                </div>
                <div className="flex gap-1 self-start mt-2.5 text-sm font-bold leading-snug text-red-700">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ddae6cb66e75c7771790b311f4e167e70ee358dcae0720a841ed654f3bd1360?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 self-start w-4 aspect-square" alt="" />
                  <div className="basis-auto">5 days left at this price!</div>
                </div>
                <button className="px-16 py-5 mt-5 text-base font-bold leading-tight text-center text-white bg-orange-500 rounded-lg max-md:px-5">
                  Add to cart
                </button>
                <p className="self-center mt-5 text-xs leading-snug text-center text-neutral-500">
                  30-Day Money-Back Guarantee
                </p>
                <div className="flex gap-6 mt-3 w-full max-md:mr-1.5 max-md:ml-1.5">
                  <button className="grow self-end mt-7 text-sm font-bold leading-tight text-center text-zinc-800">
                    Share
                  </button>
                  <div className="flex gap-px items-start">
                    <div className="flex flex-col self-start">
                      <p className="self-end text-xs leading-snug text-center text-neutral-500">
                        Full Lifetime Access
                      </p>
                      <button className="self-start mt-4 text-sm font-bold leading-tight text-zinc-800">
                        Gift this course
                      </button>
                    </div>
                    <button className="self-end mt-7 text-sm font-bold leading-tight text-center text-zinc-800">
                      Apply Coupon
                    </button>
                  </div>
                </div>
                <div className="flex gap-5 justify-between py-px pr-px pl-2.5 mt-5 w-full leading-snug border border-gray-300 border-dashed text-neutral-500">
                  <div className="flex gap-2 my-auto">
                    <div className="flex flex-col">
                      <div className="text-sm font-bold">SKILLS4SALEA</div>
                      <div className="self-start mt-2.5 text-xs">Udemy coupon</div>
                    </div>
                    <div className="self-start text-xs">is applied</div>
                  </div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a82233551e6308f8492386a88adcf9598a8d6563df3ea0eb3e19b5a624c593b0?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 w-11 aspect-[0.92]" alt="Checkmark" />
                </div>
                <form className="flex mt-2 w-full text-sm">
                  <div className="flex gap-4 items-start pb-3 bg-white rounded-lg border-t border-b border-l border-zinc-800">
                    <label htmlFor="coupon-input" className="font-bold leading-4 text-zinc-800">
                      Apply<br />coupon
                    </label>
                    <input
                      type="text"
                      id="coupon-input"
                      placeholder="Enter Coupon"
                      className="mt-4 basis-auto text-neutral-500 bg-transparent border-none focus:outline-none"
                    />
                  </div>
                  <button type="submit" className="px-6 py-3.5 font-bold leading-tight text-center text-white whitespace-nowrap rounded-none bg-zinc-800 max-md:px-5">
                    Apply
                  </button>
                </form>
                <div className="flex gap-2.5 items-start mt-6 text-xs leading-snug text-center whitespace-nowrap text-neutral-500">
                  <div className="flex shrink-0 h-px border-b border-gray-300 w-[132px]" />
                  <div className="self-stretch">or</div>
                  <div className="flex shrink-0 h-px border-b border-gray-300 w-[132px]" />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-normal leading-7 text-zinc-800">
                  Subscribe to Udemy's top<br />courses
                </h3>
                <p className="mt-2.5 mr-6 text-sm leading-5 text-zinc-800 max-md:mr-2.5">
                  Get this course, plus 11,000+ of our top-rated courses, with Personal Plan.
                </p>
                <button className="px-14 py-4 mt-5 text-base font-bold leading-tight text-center rounded-lg border border-solid border-zinc-800 text-zinc-800 max-md:px-5">
                  Try Personal Plan for free
                </button>
                <p className="self-center mt-2.5 text-xs leading-snug text-center text-neutral-500">
                  Starting at $20.00 per month after trial
                </p>
                <p className="self-center mt-4 text-xs leading-snug text-center text-orange-500">
                  Cancel anytime
                </p>
              </div>
            </div>
          </aside>
        </div>
        </div>

        <section className="flex flex-col px-4 py-5 mt-9 max-w-full rounded-lg border border-gray-300 border-solid w-[700px]">
          <h2 className="self-start text-base font-bold leading-tight text-neutral-50">
            Top companies offer this course to their employees
          </h2>
          <p className="flex flex-wrap gap-5 mt-2 mr-6 text-sm leading-snug max-md:mr-2.5">
            <span className="flex-auto text-neutral-500 max-md:max-w-full">
              This course was selected for our collection of top-rated courses trusted by businesses worldwide.
            </span>
            <a href="#learn-more" className="text-orange-500">Learn more</a>
          </p>
          <div className="flex flex-wrap gap-5 justify-between mt-7 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/923f993eaed1f95d5a4334fc2bd0feace4a8d08455c70ad4d2a98b0ddf3e63e8?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 max-w-full aspect-[3.03] w-[115px]" alt="Company logo 1" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b8117caa6b051217bea5550facaa9439b10612ecaab0deae497c64ca3b0dc61?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 w-11 aspect-[1.16]" alt="Company logo 2" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/69f1359f95eabddc0ab9a00e834180b6d54d7de9cee538999f11240fbaf46bad?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 aspect-[1.76] w-[67px]" alt="Company logo 3" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7269cff25da926b4b577335f19cd538e734b0f179290ba889c82bb771c462777?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 max-w-full aspect-[3.03] w-[115px]" alt="Company logo 4" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/394500536416d44ee65480bb9e0374c008f721b2c5cf59e3548800ab14c3b474?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 max-w-full aspect-[3.03] w-[115px]" alt="Company logo 5" />
          </div>
        </section>
      </main>
      <section className="flex flex-col self-center px-16 py-14 mt-16 ml-6 w-full bg-orange-500 rounded-3xl max-w-[1131px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h2 className="self-start text-6xl font-semibold text-white leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
          Learning focused on your goals with <span className="text-white">Maven House</span>
        </h2>
        <div className="flex flex-wrap gap-5 justify-between items-start mt-20 w-full text-base font-medium tracking-wide leading-loose text-white max-md:mt-10 max-md:max-w-full">
          <a href="#start-journey" className="flex gap-2 items-center self-start px-9 py-4 border border-white border-solid bg-white bg-opacity-0 rounded-[50px] max-md:px-5">
            <span className="self-stretch my-auto">Start Your Development Journey Now!</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e5f78730830935a6dc874cf4bd87efbae252d2b05056dcaafb2d6478a2378c?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 self-stretch my-auto aspect-square fill-white w-[13px]" alt="" />
          </a>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2c748fdcee4794963f29aef40a9f0f33c4953c42b1e16be1e6ff3f6ecbaeae4?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f" className="object-contain shrink-0 self-end mt-10 w-9 aspect-square fill-white" alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WebDevelopmentCourse;