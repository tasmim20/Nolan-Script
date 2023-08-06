import Image from "next/image";
import React from "react";
import herologo from "../../../public/hero_logo.png";

const About = () => {
  return (
    <div>
      <div
        className="hero relative mb-auto text-white max-h-full"
        style={{
          backgroundImage: `url("https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Fhero_1.webp&w=1920&q=75")`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="justify-right pl-20 lg:pl-48 py-4 w-full lg:-ml-52">
          <Image
            src={herologo}
            alt="hero-logo"
            width={353}
            height={180}
          ></Image>
          <p className="lg:text-5xl font-serif  text-2xl lg:py-4 font-bold">
            About Us
          </p>
        </div>
      </div>
      <div
        className=" justify-center align-center  "
        style={{ backgroundColor: "#171a1f" }}
      >
        <div
          style={{ backgroundColor: "#202327" }}
          className="card rounded-lg lg:w-1/2 sm:w-full bg-neutral justify-center align-center text-neutral-content mx-auto -mt-10 "
        >
          <div className="lg:p-10 sm:p-5 ">
            <h2 className="">About Us</h2>
            <h2>Our Mission</h2>
            <p>
              Welcome to NolanAi, the AI-driven scriptwriting software for
              screenwriters at any level. Our mission is to guide and empower
              you in crafting captivating screenplays while preserving your
              unique voic
            </p>
            <h2>What is NolanAI?</h2>
            <p>
              NolanAi is the ultimate AI-driven script writing software that can
              help screenwriters of all levels.It is designed to guide and
              assist you in bringing your stories to the screenplay industry
              format, without stealing your creativity.
            </p>
            <p>
              If you are new to the industry, NolanAi can be your co-pilot,
              helping you through the emotional and exhausting process of
              screenwriting.
            </p>
            <p>
              With its powerful algorithms and intuitive interface, it can offer
              suggestions and guidance on character development, plot points,
              and dialogue, helping you turn your ideas into polished
              screenplays.
            </p>
            <p>
              For experienced scriptwriters, NolanAi can bring new ideas and
              inspiration to your writing. It can suggest fresh angles, plot
              twists, and character arcs, helping you take your craft to the
              next level. And throughout the writing process, you are always in
              control.
            </p>
            <h2>NolanAi is here to help, not to take over.</h2>

            <h2>For Novice Screenwriters:</h2>
            <p>
              If you are new to the industry, NolanAi is your trusted co-pilot
              on the exhilarating screenwriting journey. We understand the
              emotional and exhaustive nature of the process, which is why
              NolanAI is here to provide valuable suggestions and guidance. Our
              powerful algorithms and intuitive interface help you master
              character development, plot points, and dialogue while getting a
              grip on screenplay formatting.
            </p>
            <h2>For Seasoned Scriptwriters:</h2>
            <p>
              Even experienced scriptwriters need a creative spark. NolanAI acts
              as your catalyst, offering fresh ideas and innovative perspectives
              to elevate your writing. Discover new angles, plot twists, and
              character arcs that enhance your storytelling. NolanAI complements
              your expertise by working alongside you, amplifying your skills.
              Check out our advanced plans for professionals like you here:
              Check premium plan
            </p>
            <h2>Control and Creativity:</h2>
            <p>
              We believe in empowering screenwriters, not taking over. With
              NolanAi, you are always in control. Our AI-powered features
              seamlessly integrate into your workflow, providing intelligent
              suggestions and streamlining your creative process. Our
              user-friendly interface allows you to effortlessly shape and
              refine your scripts, bringing your stories to life efficiently and
              effectively.
            </p>
            <h2>
              Experience the transformative impact of NolanAi and unleash your
              screenwriting potential today.
            </h2>
            <h2>Drop us an email: hello@nolanai.app</h2>
            <h2>For support: support@nolanai.app</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
