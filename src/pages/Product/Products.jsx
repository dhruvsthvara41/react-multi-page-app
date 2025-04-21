import React, { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import "./Products.css";

export async function categoriesLoader() {
  try {
    const response = await axios.get("https://dummyjson.com/products/categories");
    return response.data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

function Products() { 
  const categories = useLoaderData() || [];
  const [selectedCategory, setSelectedCategory] = useState("laptops");  // ✅ Fixed here
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedCategory) return;

    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/category/${selectedCategory}`)
      .then((response) => {
        console.log("Products API Response:", response.data.products);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
      })
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 h2">Browse Products</h2>

      {error && <p className="alert alert-danger text-center">{error}</p>}

      <div className="mb-4 text-center">
        <select
          className="form-select category-dropdown w-50 mx-auto"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a Category</option>
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <option key={index} value={category}>
                {category.toUpperCase()}
              </option>
            ))
          ) : (
            <option disabled>Loading categories...</option>
          )}
        </select>
      </div>

      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : products.length > 0 ? (
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card product-card">
                <img src={product.thumbnail} className="card-img-top product-image" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text price">${product.price}</p>
                  <Link to={`/products/${product.id}`} className="btn btn-primary btn-block">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No products available for this category.</p>
      )}
    </div>
  );
}

export default Products;
