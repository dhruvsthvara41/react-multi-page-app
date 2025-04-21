import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css"; // Import the CSS file

export async function productDetailsLoader({ params }) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${params.id}`);
    return response.data;
  } catch (error) {
    throw new Response("Product Not Found", { status: 404 });
  }
}

function ProductDetails() {
  const product = useLoaderData();

  if (!product) {
    return <h2 className="text-center text-danger">Product Not Found</h2>;
  }

  return (
    <div className="product-details-container">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} className="img-fluid" />
      <p>{product.description}</p>
      <h4>Price: ${product.price}</h4>
    </div>
  );
}

export default ProductDetails;
