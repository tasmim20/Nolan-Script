/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { FaGoogle, FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";

import Swal from "sweetalert2";
import { AuthContext } from "@/providers/AuthProvider";

const page = () => {
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        Swal.fire({
          icon: "success",
          title: "Good job!",
          text: "Successfully Log In",
        });
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      className=" text-white max-h-full"
      style={{
        backgroundImage: `url("https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Flogin_hero.webp&w=3840&q=75")`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white text-center py-10">
            Login now!
          </h1>
        </div>
        <div
          className="card mx-auto justify-center align-top lg:w-1/3 sm:w-full md:w-1/2 rounded-lg text-neutral-content"
          style={{ backgroundColor: "#25272cb3" }}
        >
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email Address</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered  border-gray-500  pr-10 w-full focus:bg-lightpink focus:text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered border-gray-500 bg-transparent pr-10 w-full focus:bg-lightpink focus:text-white"
                  required
                />
                <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEye className="text-gray-500" />
                  ) : (
                    <FaEyeSlash className="text-gray-500" />
                  )}
                </div>
              </div>
              <label className="label text-purple-700">
                {success && <p>Successfully login to the account</p>}
                {error && <p className="text-red-500">{error}</p>}
              </label>
            </div>
            <div className="form-control mt-4">
              <input
                type="submit"
                className="btn  text-white border-none  "
                value="login"
                style={{ backgroundColor: "#cc5e5e" }}
              />
            </div>
            <div className="divider text-white">Or Log in with</div>
          </form>

          <div className="flex justify-around mb-6 mx-8 text-white">
            <p>Need an account? </p>
            <p>
              {" "}
              <Link
                href="/register"
                className="font-semibold text-rose-400 flex items-center"
              >
                Register <FaArrowRight className="mx-2"></FaArrowRight>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
