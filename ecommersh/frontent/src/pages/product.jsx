import React, { useEffect, useState } from "react";
import Navbar from "../componet/navbar"; // Ensure the path is correct
import Sidnav from "../componet/sidnav"; // Ensure the path is correct
import { useNavigate } from "react-router-dom";
 
function Product() {
  const [products, setProducts] = useState([]); // State to hold products
  const token = localStorage.getItem("token") || ""; // Retrieve token
   
 const navigat=useNavigate()
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

  const handleDelete = async (productId) => {
    await fetch(`http://localhost:8080/product/delete/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg) {
          alert("Product deleted successfully");
          setProducts((prevProducts) =>  prevProducts.filter((product) => product._id !== productId));
          
          
        } else if (res.error) {
          alert("Failed to delete product");
        }
      });
  };

  
  
  const handleEdit=(productid)=>{
     navigat(`/upadet/${productid}`)
  }

  

  const renderProducts = () => {
    if (products.length === 0) {
      return <p>No products available</p>;
    }
    return products.map((product) => (
      <div key={product._id} className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        <h3 className="pt">{product.title}</h3>
  
        <p className="pri">Price: ${product.price}</p>
        <p className="cat">Category: {product.category?.name || "N/A"}</p>
        <p className="sub">Subcategory: {product.subCategory?.name || "N/A"}</p>
        <p className="pd">description: {product.description}</p>
        <button className="but1" onClick={() => handleDelete(product._id)}>Delete</button>
        <button className="but2" onClick={() => handleEdit(product._id)}>Edit</button>
      </div>
    ));
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar navigation */}
      <Sidnav />
      
      <div style={{ flex: 1 }}>
        {/* Navbar at the top */}
        <Navbar />

        {/* Main Content */}
        <div style={{ padding: "2rem" }}>
          <h2>All Products</h2>
          <div className="product-container">{renderProducts()}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
