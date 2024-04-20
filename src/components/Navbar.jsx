// import React from 'react';
// import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
// import './Navbar.css';

// function Navbar() {
//   return (
//     <nav className='container'>
//       <div className='main'>
//         <p>
//           <Link to="/">Home</Link>
//         </p>
//         <p>
//           <Link to="/products">Products</Link>
//         </p>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1 d-flex">
      <div className="container flex-fill">
        <Link className="navbar-brand fs-5" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link fs-5 ${activeLink === 'products' ? 'active' : ''}`}
                to="/products"
                onClick={() => handleClick('products')}
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex-fill d-flex' id='logo'>
        <span className='text-xl text-danger' id='logo1'>S</span>
        <span className='text-info' id='logo2'>J</span>
      </div>
    </nav>
  );
}

export default Navbar;
