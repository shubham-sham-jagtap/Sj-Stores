import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Item() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100")
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container-fluid p-0">
      {products.map((product) => (
        product.id == id && (
          <div className="row m-0">
            <div className="col-md-6 p-0">
              <div id="carouselExampleControls" className="carousel slide h-100" data-bs-ride="carousel">
                <div className="carousel-inner h-100">
                  {product.images.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''} h-100`} key={index}>
                      <img src={image} className=" d-flex justify-content-center" style={{ maxHeight: '500px',minHeight:'500px', width: 'auto', maxWidth: '100%', objectFit: 'contain' }} alt={`${product.title} - Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor: 'black'}}></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor: 'black'}}></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-6 p-4 d-flex align-items-center">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"><span className="text-success">Price:</span> <span className="text-success">${product.price}</span></p>
                  <p className="card-text"><span className="text-danger">Discount:</span> <span className="text-danger">{product.discountPercentage}%</span></p>
                  <p className="card-text"><span className="text-info">Rating:</span> {product.rating}</p>
                </div>
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default Item;
