import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);



function App() {
  
 
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


  return (
    <div className="app">
      
      <Typography variant="h1">Dot Net React Store</Typography>

      <Catalog products={products} addProduct={addProduct} />
        
    </div>
  );
}

export default App;
