// import React, { useState } from 'react';

// const AddProductPage = () => {
//   const [product, setProduct] = useState({
//     name: '',
//     image: '',
//     details: ''
//   });

//   const handleChange = (e) => {
//     setProduct({
//       ...product,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission and product creation
//     console.log('Submitted product:', product);
//     // Reset the form after submission
//     setProduct({
//       name: '',
//       image: '',
//       details: ''
//     });
//   };

//   return (
//     <div>
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={product.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="image">Image URL:</label>
//           <input
//             type="text"
//             id="image"
//             name="image"
//             value={product.image}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="details">Details:</label>
//           <textarea
//             id="details"
//             name="details"
//             value={product.details}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Add Product</button>
//       </form>
//       (
//           <button onClick={() => setShowForm(true)} className="add-product">
//             Add new Product
//           </button>
//         )}
//         <div className="cards">
//           {product.map((item) => (
//             <div key={item.id} className="card">
//               <img src={item.thumbnail} alt={item.title} />
//               <h3>{item.title}</h3>
//               <h4>Price: $ {item.price}</h4>
//               <h4>Discount: {item.discountPercentage} %</h4>
//               <a href="#">
//                 <button className="read-product">Read More</button>
//               </a>
//             </div>

//     </div>
//   );
// };

// export default AddProductPage;

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
          <input
          placeholder='img url'
            type="text"
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />
        </div>
        <br/>

        <div>
          <textarea
          placeholder='Details'
            id="details"
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
          </div>
        ))}
      </div>
     
    </div>

  );
};

export default AddProductPage;

