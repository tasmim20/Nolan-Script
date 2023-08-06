import React from "react";

const Video = () => {
  return (
    <div className="text-white" style={{ backgroundColor: "#171a1f" }}>
      <div className="hero mb-16 py-10">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <iframe
            className=" sm:w-96  lg:ms-10 h-80  rounded-lg"
            src="https://www.youtube.com/embed/p6P4EDHqAV4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="lg:-ms-20 ">
            <p className="text-xl">What is NOLAN?</p>
            <h1 className="lg:text-5xl text-3xl font-bold">
              Lights, camera, action!
            </h1>

            <p className="py-6 mt-3">
              NolanAI is the ultimate tool for any screenwriter looking to
              improve their craft. With its <br /> AI-powered features and
              user-friendly interface, it can help you bring your stories to
              life <br /> in the most efficient and effective way possible,
              while respecting your unique creative <br /> voice.
            </p>
            <button
              className="text-white rounded-xl py-5 px-8 text-sm font-bold hover:bg-opacity-80"
              style={{ backgroundColor: "#cc5e5e" }}
            >
              Explore our premium plan!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
