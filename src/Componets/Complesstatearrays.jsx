import React from "react";
import { useState } from "react";

const cartItems = [
  { id: 1, product: "jean", price: 300 },
  { id: 2, product: "Trucker Hat", price: 500 },
  { id: 3, product: "Basreball Cap", price: 400 },
  { id: 4, product: "Socks", price: 200 },
];

const Complesstatearrays = () => {
  const [cart, setCart] = useState(cartItems);
  // tottal price total all items in a cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  // the handle items button handle the function to remove an item on the cart
   const handleRemoveitems = (itemid) =>{
    const reamining = cart.filter((item) => item.id !== itemid)
    setCart(reamining)
   }

  if ((cart. length === 0)) {
    return (
      <div className="max-w-[400px] mx-auto my-4 shadow-2xl rounded-lg p-2.5 text-center">
        <h1 className="text-2xl mb-2.5">Your Cart is Empty</h1>
        <button
          onClick={() => setCart(cartItems)}
          className="bg-black text-white rounded-md px-4 py-2"
        >
          {" "}
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[400px] mx-auto my-4 shadow-2xl rounded-lg p-2.5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl ">Your bag</h1>
        <p>{cart.length}</p>
      </div>
      <div className="flex flex-col gap-4">
        {cart.map((item) => {
          return [
            <section
              key={item.id}
              className="flex items-center justify-between"
            >
              <div className="flex gap-2 items-center">
                <button onClick={()=> handleRemoveitems(item.id)} className="rounded-full p-2 text-red-600 cursor-pointer">
                  x
                </button>
                <p>{item.product}</p>
              </div>

              <p> ${item.price}</p>
            </section>,
          ];
        })}
      </div>
      <div className="flex item-center justify-between font-bold mt-2.5">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
      <div className="my-2.5">
        <button
          onClick={() => setCart([])}
          className="bg-red-500 text-white rounded-md px-4 py-2"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Complesstatearrays;
