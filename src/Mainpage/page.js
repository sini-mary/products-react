import React, {useState, useEffect} from "react";
import './page.css'
import { Link } from "react-router-dom";





const MainPage = () => {
  const [products, setMainPage] = useState([]);
    

    useEffect(() =>{
        (async () => {
            await getProducts();
        })();
    }, [])
    const getProducts = async () =>{
        try{
        const response = await fetch('https://dummyjson.com/products')
        const result = await response.json();
        setMainPage(result.products)
    }
     catch(error){
        console.log(error.message);
    }
  };
  console.log({products});
  return (
    <div>
      <Link to={`/AddProducts`}>      <div><button className="add">Add Product</button></div>
</Link>
    <div className="container">
      {products.map 
            ((product)=>(
                <div>
                  <div className="img">
                <img alt="img" src={product.images[2]} className="images"/>
                </div>
                <h3 className="title">{product.title}</h3>
                <br/>
                <p>{product.price}</p>
                
                <p>{product.discountPercentage}</p>
                <Link to={`/Details/${product.id}` }   id="btn">
            <button type="submit" className="view">View</button >

          </Link>
          
           </div>


               
                ))}
      
      
    </div>
</div>
  );
};

export default MainPage;

