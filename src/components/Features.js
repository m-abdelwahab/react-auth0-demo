import React from "react";
import { CheckCircle } from "react-feather";
import { useAuth0 } from "@auth0/auth0-react";

const Features = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div id="features" className="relative bg-blue-900 text-gray-100 px-8">
      <div className=" px-0 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-24 sm:py-20 flex flex-col ">
        <h2 className=" text-4xl sm:text-5xl font-black tracking-wide text-center">
          Features
        </h2>
        <div className="justify-center w-full mt-16 flex flex-col items-center lg:flex-row  text-gray-900 font-medium">
          <div className="w-full max-w-sm bg-white rounded-lg shadow-sm py-10 px-6 sm:px-10 lg:px-6 lg:py-10 xl:p-10 mx-3 flex flex-col justify-between mt-16 lg:mt-0 shadow-raised">
            <p className="lg:text-lg xl:text-xl font-bold uppercase tracking-wider mr-3">
              Pro
            </p>
            <p className=" mt-6 text-3xl font-bold leading-none">
              3$/month<span className="font-thin">*</span>
            </p>
            <p className="mt-8 font-medium text-gray-700 lg:text-sm xl:text-base">
              If you're serious about counting
            </p>
            <ul className="mb-2">
              <li className="flex items-start mt-6 first:mt-0">
                <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <p className="font-semibold text-blue-900 tracking-wide ml-3">
                  Increment counter
                </p>
              </li>
              <li className="flex items-start mt-6 first:mt-0">
                <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <p className="font-semibold text-blue-900 tracking-wide ml-3">
                  Decrement counter
                </p>
              </li>
              <li className="flex items-start mt-6 first:mt-0">
                <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <p className="font-semibold text-blue-900 tracking-wide ml-3">
                  Auto-save your progress
                </p>
              </li>
            </ul>
            <div className="mt-4 text-center">
              <button
                className="shadow-md my-5 mr-5  rounded-lg
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
            </div>
            <p className="text-center text-gray-600 text-sm">
              * free now because idk how to add stripe yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
