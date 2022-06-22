import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

export const mainRoutes = [
    {
      name: "Home",
      path: "/",
      component: HomePage,
    },
    {
      name: "Products",
      path: "/products",
      component: ProductsPage,
    },
    {
      name: "Cart",
      path: "/cart",
      component: CartPage,
    },
    {
      name: "Administration",
      path: "/admin",
      component: AdminPage,
    },
    {
      name: "Registration",
      path: "/registration",
      component: AuthPage,
    },
    {
      name: "Login",
      path: "/login",
      component: AuthPage,
    },
];