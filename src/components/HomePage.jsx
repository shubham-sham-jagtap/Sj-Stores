import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <header className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1>Welcome to Our Accessories Store</h1>
          <p className="lead">Explore our wide range of accessories including laptops, smartphones, perfumes, and many more.</p>
        </div>
      </header>

      <div className="container py-5">
        <h2 className="text-center mb-4">Our Few Categories</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img src="https://tse4.mm.bing.net/th?id=OIP.uq0qQSulpAUiF9vbdqpA2QHaE8&pid=Api&" className="card-img-top" alt="Laptops" />
              <div className="card-body">
                <h5 className="card-title">Laptops</h5>
                <p className="card-text">Explore our collection of top-notch laptops for work and entertainment.</p>
                {/* <a href="/laptops" className="btn btn-primary">Shop Now</a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img src="https://tse3.mm.bing.net/th?id=OIP.UsLZkUFglM3JI6xkS_FekwHaE8&pid=Api&P=0&h=180" className="card-img-top" alt="Smartphones" />
              <div className="card-body">
                <h5 className="card-title">Smartphones</h5>
                <p className="card-text">Discover the latest smartphones with cutting-edge features.</p>
                {/* <a href="/smartphones" className="btn btn-primary">Shop Now</a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img src="https://tse2.mm.bing.net/th?id=OIP.JaXyU3vanZKRxjKEW7DP0gAAAA&pid=Api&P=0&h=180" className="card-img-top" alt="Perfumes" />
              <div className="card-body">
                <h5 className="card-title">Perfumes</h5>
                <p className="card-text">Find your signature scent from our exquisite collection of perfumes.</p>
                {/* <a href="/perfumes" className="btn btn-primary">Shop Now</a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img src="https://tse4.mm.bing.net/th?id=OIP.RYoKBuR2pWvo4azqgdIlxwHaFY&pid=Api&P=0&h=180" className="card-img-top" alt="Skincare Products" />
              <div className="card-body">
                <h5 className="card-title">Skincare Products</h5>
                <p className="card-text">Take care of your skin with our premium skincare products.</p>
                {/* <a href="/skincare" className="btn btn-primary">Shop Now</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
