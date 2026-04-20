import { Link, useOutletContext } from "react-router-dom";
import Shop from "./ShopPage";
export default function Home() {
  const { products, addToCart } = useOutletContext();
  const featured = products.slice(0, 4);
  return (
    <div>
      <div className="w-60% h-[300px] text-primary m-3 bg-surface flex flex-col justify-center items-center border-border border-2 rounded-3xl">
        <h1 className="text-4xl font-semibold m-2">Find what you love</h1>
        <p className="text-muted m-2 font-semibold text-xs md:text-lg">
          Browse our collection of products from the FakeStore API
        </p>
        <Link to="shop">
        <button className="border-border border-2 rounded-lg px-4 pt-1 pb-1.5 text-sm font-semibold m-2 hover:cursor-pointer">
          Shop now
        </button>
        </Link>
      </div>
      <div className="w-60% text-primary m-3 bg-surface border-border border-2 rounded-3xl">
        <h1 className="text-4xl font-semibold ml-15 mt-5">Featured</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-10">
          {featured?.map((product, index) => (
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
              <button onClick={() => addToCart(product, index)} className="mx-3 mb-3 py-2 bg-accent text-bg text-xs font-medium rounded-lg hover:cursor-pointer">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="h-20 text-primary m-3 bg-surface flex flex-col justify-center items-center border-border border-2 rounded-3xl">
          <h1 className="font-semibold">Free shipping</h1>
          <p className="font-semibold text-muted">On all orders over $50</p>
        </div>
        <div className="h-20 text-primary m-3 bg-surface flex flex-col justify-center items-center border-border border-2 rounded-3xl">
          <h1 className="font-semibold">Easy returns</h1>
          <p className="font-semibold text-muted">30 day return policy</p>
        </div>
        <div className="h-20 text-primary m-3 bg-surface flex flex-col justify-center items-center border-border border-2 rounded-3xl">
          <h1 className="font-semibold">Secure payment</h1>
          <p className="font-semibold text-muted">100% secure checkout</p>
        </div>
      </div>
    </div>
  );
}
