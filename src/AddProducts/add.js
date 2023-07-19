

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './add.css'

const AddProductPage = () => {
  const [product, setProduct] = useState({
    name: '',
    image: '',
    details: ''
  });
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted product:', product);
    setProducts([...products, product]);
    setProduct({
      name: '',
      image: '',
      details: ''
    });
  };

  return (
    <div className='section'>
      <h2 className='ad'>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          
          <input
          placeholder='Name'
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <br/>

        <div>
          
        </div>
        <br/>

        <div>
          <textarea
          placeholder='Details'
            id={product.id}
            name="details"
            value={product.details}
            onChange={handleChange}
            required
          />
        </div>
        <br/>

        <button className='btn2' type="submit">Add Product</button>

        </form>
        {/* <Link to={`/Mainpage`}> */}

       
      <div className="cards">
        {products.map((item, index) => (
          <div key={index} className="card">
            <img src={product.image} alt={item.name} />
            <h3>{product.name}</h3>
            <p>{product.id}</p>
          </div>
        ))}
      </div>
     
    </div>

  );
};

export default AddProductPage;

