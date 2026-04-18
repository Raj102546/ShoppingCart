import { Children } from "react";
import NavBar from "./components/NavBar";
import Cart from "./pages/CartPage";
import Home from "./pages/HomePage";
import Shop from "./pages/ShopPage";

const routes = [
  {
    path: "/",
    element: <NavBar />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
