import { useContext, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { ShopContext } from "../components/NavBar";
export default function Cart() {
  const { cart, setCart, subTotal, setSubTotal } = useContext(ShopContext);
    const total = (subTotal * 1.13).toFixed(2);
  
  const increment = (item) => {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem.id == item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    );
    setSubTotal((prev) => prev + item.price);
  };
  const decrement = (item) => {
    if (item.quantity == 1) {
      setCart((prev) => prev.filter((cartItem) => cartItem.id != item.id));
    } else {
      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem.id == item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        ),
      );
    }
    setSubTotal((prev) => prev - item.price);
  };
  console.log(cart);
  return (
    <div className="w-60% text-primary m-3 bg-surface border-border border-2 rounded-3xl">
      <h1 className="text-primary text-4xl font-semibold m-5">Your Cart</h1>
      <div className="flex flex-col md:flex-row gap-4 p-6">
        <div className="flex-1 flex flex-col gap-3">
          {cart.length === 0 ? (
            <div className="w-60% text-primary p-11 bg-[#222] border-border border-2 rounded-3xl">
              <h1 className="text-muted text-4xl font-bold">
                Your Cart is Empty
              </h1>
            </div>
          ) : (
            cart?.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-surface border border-border rounded-xl p-3 items-center"
              >
                <div className="bg-[#222] rounded-lg w-20 h-20 flex items-center justify-center flex-shrink-0">
                  <img
                    src={item.image}
                    alt=""
                    className="max-w-[60px] max-h-[60px] object-contain"
                  />
                </div>
                <div className="flex-1 text-accent">
                  <p className="text-[10px] text-muted uppercase">
                    {item.category}
                  </p>
                  <p className="text-sm text-primary line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-accent font-medium">${item.price}</p>
                  <div className="flex flex-row ">
                    <button
                      onClick={() => decrement(item)}
                      className="text-muted bg-[#222] border border-border px-2 "
                    >
                      -
                    </button>
                    <p className="bg-[#222] border border-border px-4">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => increment(item)}
                      className="text-muted bg-[#222] border border-border px-2 "
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length == 0 ? (
          <div className="w-[100%] md:w-64 bg-surface border border-border rounded-xl p-4 h-fit">
            <h2 className="text-primary font-medium mb-4">Order summary</h2>
            <button className="w-full bg-accent text-bg py-2 rounded-lg font-medium mt-4">
              Checkout
            </button>
          </div>
        ) : (
          <div className="w-[100%] md:w-64 bg-surface border border-border rounded-xl p-4 h-fit">
            <h2 className="text-primary font-medium mb-4">Order summary</h2>
            <p className="text-muted">Subtotal : ${subTotal.toFixed(2)}</p>
            <p className="text-muted">Shipping : Free</p>
            <p className="text-muted">Tax : 13%</p>
            <hr className="my-2"/>
            <p >Total : <span className="text-accent">${total}</span></p>
            <button className="w-full bg-accent text-bg py-2 rounded-lg font-medium mt-4">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
