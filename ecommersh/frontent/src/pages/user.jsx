import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    fetch(`http://localhost:8080/product/getall`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data.data || []); // Assuming `data.data` contains the products
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [token]);

  const renderProducts = () => {
    if (products.length === 0) {
      return <p className="no-products-text">No products available</p>;
    }
    return products.map((product) => (
      <div key={product._id} className="product-card-new">
        <img
          src={product.image}
          alt={product.title}
          className="product-image-new"
        />
        <h3 className="product-title-new">{product.title}</h3>
        <p className="product-description-new">{product.description}</p>
        <p className="product-price-new">Price: ${product.price}</p>
        <p className="product-category-new">
          Category: {product.category?.name || "N/A"}
        </p>
        <p className="product-subcategory-new">
          Subcategory: {product.subCategory?.name || "N/A"}
        </p>
        <Link to={`/singal/${product._id}`} className="view-details-link">
          View Details
        </Link>
      </div>
    ));
  };

  return (
    <div className="user-page-new">
      <h2 className="page-title-new">All Products</h2>
      <div className="product-container-new">{renderProducts()}</div>
    </div>
  );
}

export default User;
