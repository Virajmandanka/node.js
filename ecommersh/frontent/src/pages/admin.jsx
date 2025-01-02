import React, { useEffect, useState } from 'react';
import Navbar from '../componet/navbar'; // Ensure the path and file exist
import Sidnav from '../componet/sidnav'; // Ensure the path and file exist

function Admin() {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    category: '',
    subCategory: ''
  });

  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    fetch('http://localhost:8080/cat/getall')
      .then((res) => res.json())
      .then((data) => setCategories(data.data))
      .catch((err) => console.error(err));

    fetch('http://localhost:8080/sub/allget')
      .then((res) => res.json())
      .then((data) => setSubCategories(data.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/product/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Product added successfully!");
      });

      setFormData({

        title: '',
        description: '',
        image: '',
        price: '',
        category: '',
        subCategory: ''

      })
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidnav /> {/* Sidebar component */}

      <div style={{ flex: 1 }}>
    
      <Navbar /> {/* Navbar component */}
        <div className="form-container" style={{ padding: '2rem' }}>
          <h3 className="form-title">Add To Product</h3>
          <form id="example-form" className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input
                id="title"
                placeholder="Title"
                type="text"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <input
                id="description"
                placeholder="Description"
                type="text"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL *</label>
              <input
                id="image"
                placeholder="Image URL"
                type="text"
                className="form-control"
                value={formData.image}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price *</label>
              <input
                id="price"
                placeholder="Price"
                type="text"
                className="form-control"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="subCategory">Subcategory</label>
              <select
                id="subCategory"
                className="form-select"
                value={formData.subCategory}
                onChange={handleChange}
              >
                <option value="">Select Subcategory</option>
                {subCategories.map((sub) => (
                  <option key={sub._id} value={sub._id}>
                    {sub.name}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
