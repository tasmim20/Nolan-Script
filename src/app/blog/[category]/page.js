"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import img1 from "public/blog_item_hero_bg.jpeg";

async function getData(category) {
  const res = await fetch(
    `https://nolan-script.vercel.app/api/posts?category=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
}

const Page = ({ params }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const decodedCategory = decodeURIComponent(params.category);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await getData(decodedCategory);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [decodedCategory]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-24 ">
        <span className="loading loading-infinity loading-lg bg-green-600"></span>
      </div>
    );
  }

  return (
    <div>
      <div>
        {data.map((item) => (
          <div
            key={item._id}
            className="rounded-lg"
            style={{ backgroundColor: "#151A25" }}
          >
            <div className="hero  mb-auto text-white max-h-full">
              <Image
                src={img1}
                alt="hero-logo"
                width={1519}
                height={200}
                className="h-96"
              ></Image>

              <div className="justify-right pl-20 lg:pl-48 py-4 w-full lg:-ml-52">
                <p className="lg:text-4xl font-serif  text-2xl lg:py-4 font-bold">
                  {item.title}
                </p>
                <p className="text-gray-400 text-xl font-bold py-5">
                  {item.createdAt}
                </p>
              </div>
            </div>

            <div
              className=" justify-center align-center text-white  "
              style={{ backgroundColor: "#171a1f" }}
            >
              <div
                style={{ backgroundColor: "#171a1f" }}
                className="card rounded-lg lg:w-1/2 sm:w-full bg-neutral justify-center align-center text-neutral-content mx-auto "
              >
                <div className="lg:p-10 sm:p-5 ">
                  <h2 className="lg:text-4xl font-serif  text-2xl lg:py-4 font-bold text-white">
                    {" "}
                    {item.title}
                  </h2>
                  <p className="text-white">{item.description}</p>

                  <p className="text-white pt-2">
                    1. Breaking Barriers, Changing Narratives: Women
                    scriptwriters have played a crucial role in breaking
                    barriers and challenging the status quo. From pioneering
                    figures like Frances Marion, who became the first woman to
                    win an Academy Award for Best Adapted Screenplay, to
                    contemporary trailblazers like Phoebe Waller-Bridge, who
                    brought us the critically acclaimed series these women have
                    fearlessly tackled diverse themes, shattered stereotypes,
                    and given voice to underrepresented stories.
                  </p>
                  <p className="text-white py-2">
                    2. Empowering Authentic Female Characters: Women
                    scriptwriters have championed the creation of authentic and
                    multidimensional female characters on screen. Through their
                    writing, they have provided audiences with complex and
                    relatable portrayals that go beyond stereotypes. Characters
                    like Katniss Everdeen from The Hunger Games series penned by
                    Suzanne Collins and Maya Gallo from the created by Steven
                    Levitan and portrayed by Laura San Giacomo, showcase the
                    depth and strength of female characters that resonate with
                    viewers
                  </p>
                  <p className="text-white pb-2">
                    3. Navigating Diverse Genres: From drama to comedy, science
                    fiction to romance, women scriptwriters have excelled in
                    navigating diverse genres. Their versatility and
                    storytelling prowess have allowed them to make significant
                    contributions to various genres, bringing fresh perspectives
                    and narratives to the screen. Whether it Nora Ephron witty
                    romantic comedies like powerful exploration of racial
                    inequality inSelma women scriptwriters have proven their
                    ability to captivate audiences across genres.
                  </p>
                  <p className="text-white">
                    4.Advocates for Social Change: Many women scriptwriters have
                    used their platform to address pressing social issues and
                    promote positive change. They have fearlessly tackled topics
                    like gender equality, racial discrimination, created by
                    Jenji Kohan have sparked conversations, challenged societal
                    norms, and fostered greater empathy and understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
