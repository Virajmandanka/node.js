// import React from 'react'

// function Bloglist() {
//   return (
//     <div>bloglist</div>
//   )
// }

// export default Bloglist


import React, { useState, useEffect } from "react";

function Bloglist() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/blog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Use your token storage method
      },
    })
      .then((res) => res.json())
    .then((data) => setBlogs(data.blogs))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          {blog.image && <img src={blog.image} alt={blog.title} width="200" />}
          <p>{blog.description}</p>
          {blog.userID ? (
            <small>
              By: {blog.userID.username} ({blog.userID.email})
            </small>
          ) : (
            <small>By: Unknown Author</small>
          )}
        </div>
      ))}
    </div>
  );
}

export default Bloglist;





