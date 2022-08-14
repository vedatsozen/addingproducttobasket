import './App.css';
import Product from './Product';

import { useState } from 'react';

function App() {

  const [totalamount, setTotalamount] = useState(0);
  const [totalproductcount, setTotalproductcount] = useState(0);

  return (
    <div className="App">

      <h1>TOTAL PRICE YOU WILL PAY : {totalamount}</h1>
      <h1>TOTAL PRODUCT COUNT : YOU ADDED {totalproductcount} PRODUCTS TO BASKET</h1>
      <hr />
      
      <div id = "products">
      <Product src="images/laptop.jfif" name="Laptop" price="10000" />
      <Product src="images/iphone.jfif" name="iphone" price="1000" />
      </div>

      

    </div>
  );
}

export default App;
