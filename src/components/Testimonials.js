import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      img:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote: "This app changed my life! I use it everyday",
      name: "Charlotte Hale",
    },
    {
      img:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      quote:
        "Before discovering this app I had to use my fingers, it was so frustrating! But now, I can count easier",
      name: "Adam Cuppy",
    },
    {
      img:
        "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
      quote: "The design, the User experience. This app is AWESOME ",
      name: "Steven Marcetti",
    },
  ];

  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <h5 className="text-center font-bold text-primary-500">
          What our early users are saying
        </h5>
        <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center">
          Customer Reviews
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
          {testimonials.map((testimonial, i) => {
            return (
              <div key={i} className="mt-16 lg:w-1/3">
                <div className="px-4 text-center max-w-xs mx-auto flex flex-col items-center">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={testimonial.img}
                    alt=""
                  />
                  <blockquote className="mt-5 text-gray-600 font-medium leading-loose">
                    {testimonial.quote}
                  </blockquote>
                  <p className="mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
