import React from "react";
import './style.css';

const Navbar=()=>{

    return(
        <div>
        <nav>
            <a href="/">Home</a>
            <a href="/Mainpage">Products</a>
            <a href="/Login">Login</a>
            <button className="Addbtn">Add</button>



        </nav>
        
       
        </div>
        
    )
}

export default Navbar;