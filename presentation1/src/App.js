import React, { useCallback, useState } from "react";
import "./App.css";
import phones from "./data"


const App = () => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(phones)


  const addToCart = (product) => {
    setCart((cart) => [...cart, product])
  };

  const emptyCart = () => {
    setCart([])
  };

  return (
    <div className="wrapper">
      <Products products={products} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
};

const Products = ({products,addToCart}) => {
  return (
    <>
      <h1>Products</h1>
      <div className="products">
{products.map(({name,price,id})=>(
  <Product key={id} name={name} price={price} addToCart={addToCart}/>
))}
      </div>
    </>
  );
};

const Cart = ({cart,emptyCart}) => {
  return (
    <>
      <h1>
        Basket <button onClick={emptyCart}>Empty the basket</button>
      </h1>
      <div className="products">
{
  cart.map(({name,price},index)=>(
    <Product key={index} name={name} price={price}/>
  ))
}
      </div>
    </>
  );
};

const Product = ({name,price,addToCart}) => {
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
};

export default App;