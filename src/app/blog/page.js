/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://nolan-script.vercel.app/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const getUniqueCategories = (data) => {
  const categories = {};
  const uniqueData = [];

  data.forEach((item) => {
    if (!categories[item.category]) {
      categories[item.category] = true;
      uniqueData.push(item);
    }
  });

  return uniqueData;
};
const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((fetchedData) => {
        const uniqueData = getUniqueCategories(fetchedData);
        setData(uniqueData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center ">
        <span className="loading loading-infinity loading-lg bg-red-600"></span>
      </div>
    );
  }

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
        <div className="left-36">
          <h2 className="text-2xl mb-4  ">Blog</h2>
          <p className="text-5xl font-bold">
            Unlocking the secrets of <br />
            successful screenwriting
          </p>
        </div>
      </div>
      <div className="grid  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 my-20 lg:px-5 p-2 ">
        {data.map((item) => (
          <div key={item._id}>
            <div
              className="card shadow-2xl"
              style={{ backgroundColor: "#202327" }}
            >
              <figure>
                <div className="h-52">
                  <Image
                    src={item.pictureUrl}
                    alt="Image"
                    height={500}
                    width={500}
                    priority={true}
                    className="rounded "
                  />
                </div>
              </figure>
              <div className="card-body font-sans">
                <p className="text-sm">July 27 2023, 01:44</p>
                <h2 className="card-title text-white">{item.title}</h2>
                <p className="">
                  {/* {item.description.slice(0, 300) + '...'} */}
                  {item.description.length > 50 ? (
                    <p>
                      {item.description.slice(0, 300) + "..."}{" "}
                      <Link href={`/blog/${item.category}`}>
                        {" "}
                        <p className="text-blue-700 pt-2">See full article</p>
                      </Link>
                    </p>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
