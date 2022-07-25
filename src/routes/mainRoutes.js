import AdminPage from "../pages/AdminPage";
import CartPage from "../pages/CartPage";
import FavouritesPage from "../pages/FavouritesPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import RegisterPage from "../pages/RegisterPage";

export const mainRoutes = [
    {
      name: "Home",
      path: "/",
      component: HomePage,
      isPrivate: false,
    },
    {
      name: "Products",
      path: "/products",
      component: ProductsPage,
      isPrivate: false,
    },
    {
      name: "Cart",
      path: "/cart",
      component: CartPage,
      isPrivate: false,
    },
    {
      name: "Administration",
      path: "/admin",
      component: AdminPage,
      isPrivate: true,
    },
    {
      name: "Account",
      path: "/account/register",
      component: RegisterPage,
      isPrivate: false,
    },
    {
      name: "Favourites",
      path: "/favourites",
      component: FavouritesPage,
      isPrivate: true,
    }
];