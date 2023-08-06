import React from "react";

const Blog = () => {
  return (
    <div>
      <div
        className=" text-white max-h-full pl-10 justify-center"
        style={{
          backgroundImage: `url("https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Flogin_hero.webp&w=3840&q=75")`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-2xl mb-4  ">Blog</h2>
        <p className="text-5xl font-bold">
          Unlocking the secrets of <br />
          successful screenwriting
        </p>
      </div>
      <div className="grid  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 my-20 lg:px-5 p-2 ">
        {Array.from(Array(6)).map((_, index) => (
          <div key={index}>
            <div
              className="card shadow-2xl"
              style={{ backgroundColor: "#202327" }}
            >
              <figure>
                <img
                  src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2FnGd0s7mz5pBOABK8IM0u2&w=1080&q=75"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body font-sans">
                <p className="text-sm">July 27 2023, 01:44</p>
                <h2 className="card-title text-white">
                  Unraveling the Art of Plot Hole Detection and Resolving
                  Narrative Tangles
                </h2>
                <p className="">
                  As a seasoned scriptwriter, I have had the pleasure of
                  crafting countless captivating stories that whisk audiences
                  away on thrilling journeys. However, every writer knows the
                  feeling of dread that comes with stumbling upon a plot hole –
                  those perplexing gaps in a story that can leave readers or
                  viewers scratching their heads. In this blog, we will delve
                  into the art of plot hole detection, explore the various types
                  of plot holes, and share effective techniques to resolve these
                  narrative knots, ensuring a seamless and immersive
                  storytelling experience for your audience.
                </p>
                <p className="text-blue-700">See full article</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
