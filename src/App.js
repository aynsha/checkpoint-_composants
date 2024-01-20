import React from "react";
import Container  from "react-bootstrap/Container";
import ProductCard from "./ProductCard";
import product from "./product";
import "bootstrap/dist/css/bootstrap.css";
import HelloMessage from "./components/HelloMessage";

const yourName="Aissatou"
function App() {
  return (
    <div>
      <Container className="mt-4">
      <h1 className="mb-4">Ma Boutique</h1>
      <ProductCard product={product} />
    </Container>
    <div className="mt-3">
      <HelloMessage name={yourName}/>
    </div>
    </div>
  );
};

export default App;

