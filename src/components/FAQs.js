import React from "react";

const FAQs = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <h5 className="font-bold text-primary-500 mb-4 text-center"> FAQs</h5>
      <h2 className="w-full text-4xl sm:text-5xl font-black tracking-wide text-center">
        Got Questions?
      </h2>
      <p className="w-full text-center mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 ">
        And we have got answers to all of them
      </p>

      <div className="mt-6 pt-10">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          {/* questions left */}
          <div>
            <div>
              <p className="text-lg leading-6 font-medium text-gray-900">
                Seriously, how is this only 3$/month?
              </p>
              <p className="text-base leading-6 text-gray-600 mt-2">
                We want to make it accessible for anyone to count. No need to
                pay tons of money
              </p>
            </div>

            {/* Tell me more about the Coding Career Workshops? */}
            <div id="workshops" className="mt-12">
              <p className="text-lg leading-6 font-medium text-gray-900">
                Are you hiring?
              </p>
              <p className="mt-2 text-base leading-6 text-gray-600">
                Nah, we're good. We have one senior dev that we're paying an
                intern's salary. He's doing all the work
              </p>
            </div>
          </div>

          {/* questions right */}
          <div className="mt-12 sm:mt-0">
            <div>
              <p className="text-lg leading-6 font-medium text-gray-900">
                Is there a way for me to pay MORE than 3$/month? This service is
                changing my life!
              </p>
              <p className=" mt-2 text-base leading-6 text-gray-600">
                Absolutely! You can donate through PayPal: just send us 50$ to
                this{" "}
                <a className="font-bold" href="mailto:mahmoud3799@gmail.com">
                  email
                </a>
              </p>
            </div>

            <div className="mt-12">
              <p className="text-lg leading-6 font-medium text-gray-900">
                Can I become an intern?
              </p>
              <p className=" mt-2 text-base leading-6 text-gray-600">
                Sure, you'll just need to pay us 1000$ and you must have 3 years
                of work experience. We don't currently have a ping pong table
                but we have a bean bag
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
