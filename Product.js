import React, { useState } from 'react'


function Product(props) {

    const [totalamount, setTotalamount] = useState(0);

    const Image = props.src ;
    const Name = props.name ;
    const Price = props.price ;

  return (
    <div id="product">
        <div id='product-image'>
        <h1><img src={Image} /></h1>
        </div>
        <h1>{Name}</h1>
        <h1>{Price}</h1>
        <button onClick={() => setTotalamount(totalamount + 1)}>Sepete Ekle</button>
    </div>
  )
}

export default Product