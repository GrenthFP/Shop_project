import React from "react";
import text from "../components/Text";
import pic from "../assets/placeholder.png";
import back from "../assets/back.jpg";

export default function MainPage() {
  return (
    <div>
      <div className="flex " style={{ height: "600px" }}>
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Build Your New <span className="text-indigo-600">Idea</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
              Cumque debitis dignissimos id quam vel!
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a
                className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                href="#"
              >
                Get Started
              </a>
              <a
                className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2"
          style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }} //clipPath cuts the image slightly vertically
        >
          <div
            className="h-full object-cover" //cover cuts the image accordingly
            style={{
              backgroundImage: `url(${back})`,
            }}
          >
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row mx-3 lg:mx-0">
        <div className="lg:w-2/5 ml-10">
          <p>{text.text1}</p>
        </div>
        <div className="lg:w-1/2 flex flex-col mt-2 ml-auto">
          <div className="w-full h-64 flex">
            <img className="object-contain " src={pic}></img>
          </div>

          <p>{text.text2}</p>
          <div className="w-full h-64 flex mb-2">
            <img className="object-contain " src={pic}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
