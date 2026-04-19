import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="w-60% h-[300px] text-primary m-3 bg-surface flex flex-col justify-center items-center border-border border-2 rounded-3xl">
        <h1 className="text-4xl font-semibold m-2">Find what you love</h1>
        <p className="text-muted m-2 font-semibold">
          Browse our collection of products from the FakeStore API
        </p>
        <button className="border-border border-2 rounded-lg px-4 pt-1 pb-1.5 text-sm font-semibold m-2 hover:cursor-pointer">
          Shop now
        </button>
      </div>
      <div className="grid grid-cols-3">
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
