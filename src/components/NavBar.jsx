import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="bg-surface text-primary navbar rounded-box shadow-base-300/20 shadow-sm border-b-border border-b-2">
        <div className="flex items-center justify-around p-3">
          <p className="font-bold text-2xl">ReactStore</p>
          <ul className="flex justify-around md:w-[300px] text-muted">
            <Link to="/" className="hover:border-b-2 hover:text-primary">
              Home
            </Link>
            <Link to="shop" className="hover:border-b-2 hover:text-primary">
              Shop
            </Link>
          </ul>
          <Link to="cart">
            <button className="border-border border-2 rounded-lg px-4 pt-1 pb-1.5 text-sm font-semibold m-2 hover:cursor-pointer">
              Cart (0)
            </button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
