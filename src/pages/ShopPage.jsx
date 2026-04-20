import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Shop() {
  const { products, addToCart  } = useOutletContext();
  
  return (
    <>
      <div className="w-60% text-primary m-3 bg-surface border-border border-2 rounded-3xl">
        <h1 className="text-4xl font-semibold m-5">All Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-10">
          {products?.map((product, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-xl overflow-hidden flex flex-col"
            >
              <div className="bg-[#222] flex items-center justify-center h-40 p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-32 object-contain"
                />
              </div>
              <div className="p-3 flex flex-col gap-1 flex-1">
                <span className="text-[10px] text-muted uppercase tracking-wide">
                  {product.category}
                </span>
                <p className="text-sm text-primary line-clamp-2 leading-snug">
                  {product.title}
                </p>
                <p className="text-accent font-medium text-base mt-auto pt-2">
                  ${product.price}
                </p>
              </div>
              <button
                onClick={() => addToCart(product, index)}
                className="mx-3 mb-3 py-2 bg-accent text-bg text-xs font-medium rounded-lg hover:cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
