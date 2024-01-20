import React from "react";
import product from "../product";

const Image=({imageUrl, alText})=>{
    return <img src={product.imageUrl} alt= {alText}/>
};
export default Image;