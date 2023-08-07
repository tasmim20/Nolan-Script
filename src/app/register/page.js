/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { AuthContext } from "@/providers/AuthProvider";
import Link from "next/link";
import React, { useContext, useState } from "react";
import swal from "sweetalert";

const page = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Validate password
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters.");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Please provide at least one uppercase letter");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError("Please add at least one special character");
      return;
    }
    setPasswordError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Update user profile with name and photo
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setSuccess(true);
            swal("Good job!", "Successfully create an account", "success");
            form.reset();
          })
          .catch((error) => {
            console.error(error);
            setPasswordError(error.message);
          });
      })
      .catch((error) => {
        console.error(error);
        setPasswordError(error.message);
      });
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
      <h1 className="font-bold text-4xl text-center py-10">
        Create An Account
      </h1>
      <div
        className="card mx-auto justify-center align-top lg:w-1/3 sm:w-full md:w-1/2 rounded-lg text-neutral-content"
        style={{ backgroundColor: "#25272cb3" }}
      >
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered border-gray-500 bg-transparent pr-10 w-full focus:bg-lightpink focus:text-white"
              required
            />
            <label className="label">
              <span className="label-text text-white">Your Photo</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered border-gray-500 bg-transparent pr-10 w-full focus:bg-lightpink focus:text-white"
              required
            />
            <label className="label">
              <span className="label-text text-white">Email Address</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered border-gray-500 bg-transparent pr-10 w-full focus:bg-lightpink focus:text-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered border-gray-500 bg-transparent pr-10 w-full focus:bg-lightpink focus:text-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Confirm Password</span>
            </label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered border-gray-500 bg-transparent pr-10 w-full focus:bg-lightpink focus:text-white"
              required
            />
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn  text-white "
              value="Sign Up"
              style={{ backgroundColor: "#cc5e5e" }}
            />
          </div>
        </form>
        <div className="flex justify-center mt-4 mb-4 text-white">
          <p>Already have an account?</p>

          <Link href="/login" className="text-rose-400 font-semibold ml-4">
            LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
