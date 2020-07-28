import React from "react";
import GIF from "../assets/images/demo.gif";
import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div
      className="mt-24 mx-auto mb-32 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20
  xl:mt-24"
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div
          className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:mx-auto
      lg:text-left lg:mt-16"
        >
          <div
            className="text-sm font-semibold uppercase tracking-wider text-gray-700
        sm:text-base lg:text-sm xl:text-base"
          >
            early access
          </div>

          <h1
            className="capitalize mt-1 text-4xl tracking-tight leading-10 font-extrabold
        text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span>Counting Has never</span>
            <br className="hidden md:inline" />
            <span>been this easy</span>
          </h1>

          <div>
            <p className="text-lg italic text-gray-900 leading-loose sm:w-5/6 w-full mt-5">
              “This app is super useful. I love it!” - My Mom
            </p>
          </div>
          <div className="flex-col sm:flex-row flex justify-center lg:justify-start">
            <button
              className="shadow-md w-full sm:w-1/3 my-5 mr-5 text-center rounded-lg
          bg-indigo-500 px-6 py-4 text-xl leading-6 font-semibold font-display
          text-white hover:bg-indigo-600 
          transition ease-in-out duration-150"
              onClick={() =>
                loginWithRedirect({
                  screen_hint: "signup",
                })
              }
            >
              Sign Up
            </button>
            <a
              className="shadow-md w-full sm:w-1/3 my-5 text-center rounded-lg
          bg-transparent px-6 py-4 text-xl leading-6 font-semibold font-display
          text-black hover:border-indigo-500 border-2  
          transition ease-in-out duration-150 "
              href="http://localhost:3000/#pricing"
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0
      lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center"
        >
          <div className="relative mx-auto w-full lg:max-w-lg">
            <img className="shadow-md" src={GIF} alt="Book cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
