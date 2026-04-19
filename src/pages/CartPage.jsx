import { Link, useOutletContext } from "react-router-dom";
export default function Cart() {
  const { cart } = useOutletContext();
  return (
    <>
      <h1>Your Cart</h1>
      <div className="flex gap-4 p-6">
        <div className="flex-1 flex flex-col gap-3">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 bg-surface border border-border rounded-xl p-3 items-center"
            >
              <div className="bg-[#222] rounded-lg w-20 h-20 flex items-center justify-center flex-shrink-0">
                <img
                  src={item.image}
                  className="max-w-[60px] max-h-[60px] object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-muted uppercase">
                  {item.category}
                </p>
                <p className="text-sm text-primary line-clamp-2">
                  {item.title}
                </p>
                <p className="text-accent font-medium">${item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-64 bg-surface border border-border rounded-xl p-4 h-fit">
          <h2 className="text-primary font-medium mb-4">Order summary</h2>
          <button className="w-full bg-accent text-bg py-2 rounded-lg font-medium mt-4">
            Checkout
          </button>
        </div>
      </div>
      <Link to="/">goback to home</Link>
    </>
  );
}
