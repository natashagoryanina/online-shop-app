import LaptopList from "../components/laptopList/LaptopList";
import PhoneList from "../components/phoneList/PhoneList";

export const productsRoutes = [
    {
      name: "Phones",
      path: "/phones",
      component: PhoneList,
    },
    {
      name: "Laptops",
      path: "/laptops",
      component: LaptopList,
    },
  ];