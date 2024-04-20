import React, { useState, useEffect } from 'react';
import './ProductDisplay.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './CustomCarousel.css'; // Import custom CSS for Carousel

function Product() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const res2 = await fetch("https://dummyjson.com/products/categories");
        const categoryData = await res2.json();
        const data = await res.json();
        setProducts(data.products);
        setCategory(categoryData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container product-display">
      <h1 className='text-center mb-5'>Our Products</h1>
      {category.map((cat, index) => (
        <div className='category mb-5' key={index} style={{ height: 'auto' }}>
          <h2 className="text-center mb-3">{cat.toUpperCase()}</h2>
          <Carousel pause={false} interval={null} className="mb-5 custom-carousel">
            {products.map((product) => (
              product.category === cat && (
                <Carousel.Item key={product.id}>
                  <Link to={`/products/${product.id}`} className="text-decoration-none">
                    <div className="card d-flex justify-content-center">
                      <img src={product.images[0]} className="card-img-top" alt={product.title} style={{ maxHeight: '200px', width: 'auto', maxWidth: '100%', objectFit: 'contain' }} />
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Price: ${product.price}</p>
                      </div>
                    </div>
                  </Link>
                </Carousel.Item>
              )
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
}

export default Product;

