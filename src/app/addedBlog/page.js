/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Swal from "sweetalert2";
const page = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userEmail) {
      fetch(`/api/posts?uploaderEmail=${userEmail}`)
        .then((response) => response.json())
        .then((fetchedBlogs) => {
          setBlogs(fetchedBlogs);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user-specific blogs:", error);
          setIsLoading(false);
        });
    }
  }, [userEmail]);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));

      Swal.fire({
        icon: "success",
        title: "Good job!",
        text: "Successfully Log In",
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mx-auto items-center my-32 ">
        <span className="loading loading-infinity loading-lg bg-red-600"></span>
      </div>
    );
  }

  return (
    <div className="lg:mx-32">
      <h2 className="text-center text-4xl my-10 font-bold text-white">
        My Orders
      </h2>
      <div className=" my-10">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Title</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, i) => (
                <tr key={blog._id}>
                  <td className="py-2">
                    {i}. {blog.category}
                  </td>
                  <td>{blog.title}</td>
                  <td
                    onClick={() => handleDelete(blog._id)}
                    className="btn btn-error text-xs"
                  >
                    {" "}
                    DELETE
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
