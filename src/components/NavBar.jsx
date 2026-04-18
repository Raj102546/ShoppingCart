import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar rounded-box shadow-base-300/20 shadow-sm">
          <div className="flex items-center justify-around">
            <p>Logo</p>
            <ul className="flex justify-around md:w-[300px]">
                <Link to="/">Home</Link>
                <Link to="shop">Shop</Link>
                <Link to="cart">Cart</Link>
            </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
