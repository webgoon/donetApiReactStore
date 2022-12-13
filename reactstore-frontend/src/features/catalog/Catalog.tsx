import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";



export default function Catalog(){
  
  const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {

      fetch('http://localhost:5019/api/Products')
      .then(response => response.json())
      .then(data => setProducts(data))

    }, [])
  
  function addProduct(){
    setProducts(prevState => 
              [...prevState, 
                {
                id: prevState.length + 101,
                name: 'product ' + (prevState.length + 1), 
                price: (prevState.length * 100) + 100,
                brand: 'some brand',
                description: 'some description',
                pictureUrl: '/images/logo192.png',
              }])
  }

  //console.log('Hello World',  products);

  return(
    <>
    <h1>Catalog</h1>

    <ProductList products={products} />

    
    </>
  )
}

