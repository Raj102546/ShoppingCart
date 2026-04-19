import { Children } from "react";
import Cart from "./pages/CartPage";
import Home from "./pages/HomePage";
import Shop from "./pages/ShopPage";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App/>,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
