"use client";
import Image from "next/image";
import herologo from "../../public/hero_logo.png";
import Features from "@/components/features/Features";
import Video from "@/components/video/Video";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div
   
        className="hero relative mb-auto text-white max-h-full"
        style={{
          backgroundImage: `url("https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Fhero_1.webp&w=1920&q=75")`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="justify-right pl-12 lg:pl-48 py-4 w-full lg:-ml-52">
       <div className="w-24 md:w-64">
       <Image
            src={herologo}
            alt="hero-logo"
            width={353}
            height={180}
          ></Image>
       </div>
          <p className="lg:text-5xl font-serif  text-2xl lg:py-4 font-bold">
            Script Writing Website
          </p>
          <div>
            <p className="lg:text-2xl text-xl font-sans font-semibold mb-5">
              Unleash creativity with AI Copilot - craft compelling <br />{" "}
              screenplays
            </p>
            <Link
              className="btn  text-white p-4 md:p-7 pb-4 md:pb-10 "
              href="/dashboard"
              style={{ backgroundColor: "#cc5e5e" }}
            >
              Start Creating
            </Link>

            <Link
              className=" btn  p-4 md:p-7 pb-4 md:pb-10 ml-6 border-white text-white bg-none "
              style={{ backgroundColor: "#552a26" }}
              href="/loginform"
            >
              login
            </Link>
          </div>
        </div>
      </div>

      <Video></Video>
      <Features></Features>
    </div>
  );
}
