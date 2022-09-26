import Product from "./Product";

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

  export default Cart