


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Singalproductpage() {
  const { id } = useParams(); // Get the product ID from the route
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    fetch(`http://localhost:8080/product/singal/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data.data || null); // Assuming `data.data` contains the product details
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id, token]);

  if (loading) return <p className="loading-text">Loading product...</p>;
  if (error) return <p className="error-text">Error: {error}</p>;
  if (!product) return <p className="no-product-text">Product not found</p>;

  return (
    <div className="single-product-page">
      <div className="product-detail-card">
        <img
          src={product.image}
          alt={product.title}
          className="product-detail-image"
        />
        <div className="product-detail-info">
          <h2 className="product-detail-title">{product.title}</h2>
          <p className="product-detail-description">{product.description}</p>
          <p className="product-detail-price">Price: ${product.price}</p>
          <p className="product-detail-category">
            Category: {product.category?.name || "N/A"}
          </p>
          <p className="product-detail-subcategory">
            Subcategory: {product.subCategory?.name || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Singalproductpage;
