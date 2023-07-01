import React, {useState, useEffect} from "react";
import './page.css'






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
    
    <div className="container">
     

      {products.map 
            ((product)=>(
                < >
                
                <img alt="img" src={product.images[2]} className="images"/>
                
                <h3>{product.title}</h3>
                <br/>
                <p>{product.price}</p>
                <br/>
                <p>{product.discountPercentage}</p>


                </>
                ))}
      
      
    </div>

  );
};

export default MainPage;

