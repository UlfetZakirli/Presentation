import React  from 'react';

const Product = React.memo(({addToCart,name,price}) => {
    return (
      <div className="product">
        <h2>{name}</h2>
        <h3>{price.toLocaleString()}$</h3>
       {
        addToCart && (
          <button onClick={()=>addToCart({name,price})}>add to cart</button>
        )
       }
      </div>
    );
  });

  export default Product;