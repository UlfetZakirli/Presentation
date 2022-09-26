import React, { useCallback, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import phones from "./data"


const App = () => {
  const [products, setProducts] = useState(phones)
  const [cart, setCart] = useState([])
  


  const addToCart = useCallback((product) => {
    setCart((cart) => [...cart, product])

  },[]);

  const emptyCart = useCallback(() => {
    setCart([])
  },[]);

  return (
    <div className="wrapper">
      <Products products={products} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} />

    </div>
  );
};







export default App;