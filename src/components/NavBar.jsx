import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  const addToCart = (product, index) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id == product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setSubTotal((prev) => prev + product.price);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data = await fetch(`https://fakestoreapi.com/products`);
        const response = await data.json();
        setProducts(response);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllData();
  }, []);
  return (
    <div className="bg-bg min-h-screen">
      <nav className="bg-surface text-primary navbar rounded-box shadow-base-300/20 shadow-sm border-b-border border-b-2">
        <div className="flex items-center justify-around p-3">
          <p className="font-bold text-2xl">ReactStore</p>
          <ul className="hidden md:flex justify-around md:w-[300px] text-muted">
            <Link to="/" className="hover:border-b-2 hover:text-primary">
              Home
            </Link>
            <Link to="shop" className="hover:border-b-2 hover:text-primary">
              Shop
            </Link>
          </ul>
          <Link to="cart">
            <button className="border-border border-2 rounded-lg px-4 pt-1 pb-1.5 text-sm font-semibold m-2 hover:cursor-pointer">
              Cart ({cart.length})
            </button>
          </Link>
          
        </div>
        <div className="block md:hidden bg-[#222]">
          <ul className="flex justify-around md:w-[300px] text-muted py-5">
            <Link to="/" className="hover:border-b-2 hover:text-primary">
              Home
            </Link>
            <Link to="shop" className="hover:border-b-2 hover:text-primary">
              Shop
            </Link>
          </ul>
        </div>
      </nav>
      <Outlet context={{ products, cart, setCart, subTotal, setSubTotal, addToCart}} />;
    </div>
  );
}
