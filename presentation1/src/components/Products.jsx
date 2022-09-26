import Product from './Product';
import  React from 'react';
import { useMemo } from 'react';

const Products =React.memo(({products, addToCart}) => {
    return (
      <>
        <h1>Products</h1>
        <div className="products">
       {
        products.map(({name,price,id})=>(
          <Product name={name} price={price} key={id} addToCart={addToCart}/>
        ))
       }
        </div>
      </>
    );
  });
  export default Products