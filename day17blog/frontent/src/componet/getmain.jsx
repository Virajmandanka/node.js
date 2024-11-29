import React, { useEffect, useState } from 'react';

const Getmain = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:8080/blog/getMine', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }

                const data = await response.json();
                setBlogs(data.blogs);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    const handaldelete=async(blogId)=>{

       await fetch(`http://localhost:8080/blog/delete/${blogId}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
                }      
        })

        .then((res)=>res.json())
        .then((res)=>{

            // console.log(blogId)

        if(res.msg){
            alert("Blog deleted successfully")
            // Update the blogs state to remove the deleted blog
            setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
        } else if(res.error)
        {
            alert("Failed to delete blog")
        }

        })

    }

    return (
        <div>
            <h1>My Blogs</h1>
            {blogs.length > 0 ? (
                <ul>
                    {blogs.map((blog) => (
                        <li key={blog._id}>
                            <h2>{blog.title}</h2>
                            <p>{blog.description}</p>
                            <p><strong>Author:</strong> {blog.userID.username}</p>
                            <button  onClick={()=>handaldelete(blog._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No blogs found.</p>
            )}
        </div>
    );
};

export default Getmain;
