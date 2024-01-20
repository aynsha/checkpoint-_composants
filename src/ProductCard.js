import React from "react";
import Card from 'react-bootstrap/Card';
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

function ProductCard({product}) {
    return(
        <Card style={{ width: '18rem' }}>
        <Image imageUrl={product.imageUrl} altText={product.name} />
  
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
    );
    
};
export default ProductCard;

