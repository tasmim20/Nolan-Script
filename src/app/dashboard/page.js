/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useContext } from "react";
import img1 from "public/suggestion.png";
import swal from "sweetalert";

import Image from "next/image";
import { AuthContext } from "@/providers/AuthProvider";

const dashboard = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Access the form data
    const pictureUrl = data.pictureUrl;
    const title = data.title;
    const uploader = data.uploader;
    const uploaderEmail = data.uploaderEmail;
    const category = data.category;
    const description = data.description;

    const addBlog = {
      pictureUrl,
      title,
      uploader,
      uploaderEmail,
      category,
      description,
    };

    fetch("/api/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addBlog),
    })
      .then((res) => {
        if (res.ok) {
          swal("Success", "Successfully added a blog!", "success");
          event.target.reset();
        } else {
          swal(
            "Error",
            "Failed to add the blog. Please try again later.",
            "error"
          );
        }
      })
      .catch((error) => {
        console.error(error);
        swal("Error", "An error occurred. Please try again later.", "error");
      });
  };
  return (
    <div
      className="flex py-10 justify-center mx-auto text-white max-h-full"
      style={{
        backgroundImage: `url("https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Flogin_hero.webp&w=3840&q=75")`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className=" mx-auto md:mx-0 md:mt-0 mt-8  p-8 text-center rounded shadow"
        style={{ backgroundColor: "#25272cb3" }}
      >
        <h2 className="md:text-5xl font-semibold text-white md:mb-6 text-center text-3xl p-6">
          Add Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="pictureUrl" className="block font-medium">
              Picture URL of the blog
            </label>
            <input
              type="text"
              id="pictureUrl"
              name="pictureUrl"
              className="input input-bordered border-gray-500 bg-transparent pr-10 focus:bg-lightpink focus:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="input input-bordered border-gray-500 bg-transparent pr-10 focus:bg-lightpink focus:text-white"
              required
            />
          </div>
        </div>
        {user && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="uploader" className="block font-medium">
                  Uploaded By
                </label>
                <input
                  type="text"
                  id="uploader"
                  name="uploader"
                  className="input input-bordered border-gray-500 bg-transparent pr-10 focus:bg-lightpink focus:text-white"
                  defaultValue={user.displayName}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="uploaderEmail" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="uploaderEmail"
                  name="uploaderEmail"
                  className="input input-bordered border-gray-500 bg-transparent pr-10  focus:bg-lightpink focus:text-white"
                  defaultValue={user.email}
                  required
                />
              </div>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="category" className="block font-medium">
              Feature
            </label>
            <select
              id="category"
              name="category"
              className="input input-bordered border-gray-500 bg-transparent pr-10  focus:bg-lightpink focus:text-white"
              required
            >
              <option value="">Select Feature</option>
              <option value="Drama">Drama</option>
              <option value="Comedy">Comedy</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        <div className="mb-4 text-center">
          <label htmlFor="description" className="block font-medium">
            Detail description
          </label>
          <textarea
            id="description"
            name="description"
            className="input input-bordered border-gray-500 bg-transparent pr-10 w-full h-20 focus:bg-lightpink focus:text-white"
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            style={{ backgroundColor: "#cc5e5e" }}
            className="btn text-white w-3/4 mx-auto"
            type="submit"
            value="Add Blog"
          />
        </div>
      </form>
    </div>
  );
};

export default dashboard;

// import Link from 'next/link';
// import React from 'react';

// const dashboard = ({children}) => {
//   return (
//     <div>
//         <div className="drawer lg:drawer-open">
//   <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content flex flex-col items-center justify-center">
//     {/* Page content here */}
//     <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

//   </div>
//   <div className="drawer-side">
//     <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//     <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
//       {/* Sidebar content here */}
//       <li><Link href='/dashboard/addBlog'>My Order</Link></li>

//       <li><Link href='/dashboard/viewBlog'>All Users</Link></li>
//     </ul>

//   </div>
//   <div>
//     {children}
//   </div>
// </div>
//     </div>
//   );
// };
