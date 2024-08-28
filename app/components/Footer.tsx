import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="self-center mt-44 w-full px-8 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start text-base leading-7 text-white max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d207f585eb3de904da400ed87cc3c31a5ab6233f4f3188f743fc1e3cc58deb7?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
              className="object-contain max-w-full aspect-[2.17] w-[161px]"
              alt="Maven House Logo"
            />
            <h3 className="mt-4 text-base font-semibold text-orange-500">
              Stay Inspired with ArtVibe
            </h3>
            <p className="self-stretch mt-1.5 max-md:max-w-full">
              Get exclusive access to our latest works, creative trends, and
              tips delivered straight to your inbox.
            </p>
            <hr className="shrink-0 mt-10 max-w-full h-0 bg-white border border-white border-solid opacity-20 w-[370px]" />
            <address className="mt-3.5 leading-loose not-italic">
              123 Creativity Ave, Art District, NY, 10001
            </address>
          </div>
        </div>
        <nav className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-base leading-8 max-md:mt-10">
            <h3 className="self-start font-bold text-orange-500">
              Quick Links
            </h3>
            <ul className="mt-3 text-white list-none p-0">
              <li>
                <a href="#about" className="text-white no-underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white no-underline">
                  Plan & Pricing
                </a>
              </li>
              <li>
                <a href="#teach" className="text-white no-underline">
                  Teach On Maven House
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-white no-underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-white no-underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#cookie" className="text-white no-underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full text-base leading-8 text-white max-md:mt-10">
            <h3 className="font-bold text-orange-500">
              Subscribe and Stay Updated!
            </h3>
            <form className="w-full mt-7">
              <label htmlFor="email-input" className="opacity-60 sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email-input"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white border-solid mt-2.5 pb-2.5 text-white placeholder-white placeholder-opacity-60 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="flex gap-2 justify-center items-center px-10 py-4 mt-7 font-medium tracking-wide leading-loose whitespace-nowrap bg-orange-500 rounded-[50px] max-md:px-5"
              >
                <span className="self-stretch my-auto">Subscribe</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2f9de37cdc8b88b195f0c96c76f78c91ba03f5a25d63b53e99aa9cb16111651?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square fill-white w-[13px]"
                  alt=""
                />
              </button>
            </form>
            <div className="mt-9">
              <a href="#facebook" className="text-white mr-4">
                Facebook
              </a>{' '}
              |
              <a href="#instagram" className="text-white mx-4">
                Instagram
              </a>{' '}
              |
              <a href="#linkedin" className="text-white mx-4">
                LinkedIn
              </a>{' '}
              |
              <a href="#twitter" className="text-white ml-4">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="shrink-0 self-end mt-12 max-w-full h-px bg-white border border-white border-solid opacity-50  max-md:mt-10" />
      <p className="text-center  mt-5 ml-5 text-base leading-8 text-white opacity-60">
        © 2023 Maven House
      </p>
    </footer>
  );
};

export default Footer;
