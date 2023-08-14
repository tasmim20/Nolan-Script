"use client";

import Link from "next/link";
import logo from "../../../public/logo-header.png";
import { FaUser, FaMoon, FaSun } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);
  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Redirect to the home page
        router.push("/");
      })
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/about">About us</Link>
      </li>
      <li>
        <Link href="/">Pricing</Link>
      </li>

      <li>
        <Link href="/blog">Blog</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/addedBlog">My Blogs</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Log out</button>
          </li>
          <li className="nav-item-user">
            <span className="tooltip">
              {user.photoURL ? (
                <Image
                  className="rounded-full w-8 mx-2 text-center"
                  src={user.photoURL}
                  alt="Image"
                  height={40}
                  width={40}
                  title={user.displayName}
                />
              ) : (
                <FaUser className="rounded-full w-12 mx-2" />
              )}
            </span>
          </li>
        </>
      ) : (
        <li>
          <Link href="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div
      className="navbar text-white"
      style={{ backgroundColor: "#202331" }}
    >
      <div className="navbar-start h-16">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box font-bold w-52"
          >
            {navItems}
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image src={logo} alt="logo" width={90} height={54}></Image>
        </Link>
      </div>

      <div className="navbar-end md:mr-8 hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-center items-center font-bold">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
