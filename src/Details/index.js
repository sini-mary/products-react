import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const Details=()=>{
    const {viewId} =useParams();
    const [products,setProduct]=useState(null)
    useEffect(()=>{
        const view=async ()=>{
            try{
                const viewProduct= await fetch(`https://dummyjson.com/products/${viewId}`)
                const data= await viewProduct.json()
                setProduct(data)

            }catch(error){
                console.log(error);

            }
        };
        view();

    },[viewId]) ;
    if (!products){
        return <p>Loading...</p>
    }
    return(
        <div>
            <h1>Description</h1>
            <div>
                <img src= {products.images} alt={products.title}/>
                <h3>{products.title}</h3>
                <p>{products.brand}</p>
                <p>{products.price}</p>
                <p>{products.rating}</p>
            </div>
        </div>
    )

}
export default Details