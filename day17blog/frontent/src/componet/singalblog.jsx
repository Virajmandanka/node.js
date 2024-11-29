// import React from 'react'

// function Singalblog() {
//   return (
//     <div>singalblog</div>
//   )
// }

// export default Singalblog

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Singalblog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/blog/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching blog:", error));
  }, [id]);

  return (
    <div>
      {blog ? (
        <div>
          <h2>{blog.title}</h2>
          <img src={blog.image} alt={blog.title} width="300" />
          <p>{blog.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Singalblog;
