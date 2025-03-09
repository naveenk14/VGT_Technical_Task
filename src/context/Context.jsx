import { createContext, useContext, useEffect, useReducer } from "react";
import { ecommerceReducer } from "./reducers";
import veg from "../assets/Vegetables..jpg";
import fruits from "../assets/winter fruits.png";
import foods from "../assets/pexels-owpictures-106343.jpg";
import tomato from "../assets/tomato.jpg";
import onion from "../assets/onion.jpg";
import carrot from "../assets/carrot.jpg";
import apple from "../assets/apple.jpg";
import briyani from "../assets/briyani.jpg";
import beans from "../assets/beans.jpg";
import meals from "../assets/meals.jpg";
import orange from "../assets/orange.jpg";
import guava from "../assets/guava.jpg";
import friedrice from "../assets/friedrice.jpg";
import jackfruit from "../assets/jackfruit.jpg";
import noodles from "../assets/noodles.jpg";
import cauliflower from "../assets/cauliflower.jpg";
import potato from "../assets/potato.jpg";
import chilli from "../assets/chilli.jpg";

const EhopCart = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
const ordersFromLocalStorage = JSON.parse(localStorage.getItem("orders")) || [];

// Initial State
const initialState = {
  categories: [
    { name: "Vegetables", image: veg },
    { name: "Fruits", image: fruits },
    { name: "Foods", image: foods },
  ],
  products: [
    {
      id: 1,
      productName: "Apple",
      productPrice: 100,
      productImage: apple,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",
      categoryName: "Fruits",
    },
    {
      id: 2,
      productName: "Briyani",
      productPrice: 150,
      productImage: briyani,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Foods",
    },
    {
      id: 3,
      productName: "Beans",
      productPrice: 200,
      productImage: beans,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Vegetables",
    },
    {
      id: 4,
      productName: "Orange",
      productPrice: 100,
      productImage: orange,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Fruits",
    },
    {
      id: 5,
      productName: "Meals",
      productPrice: 150,
      productImage: meals,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Foods",
    },
    {
      id: 6,
      productName: "Carrot",
      productPrice: 200,
      productImage: carrot,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Vegetables",
    },
    {
      id: 7,
      productName: "Guava",
      productPrice: 120,
      productImage: guava,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Fruits",
    },
    {
      id: 8,
      productName: "Fried Rice",
      productPrice: 150,
      productImage: friedrice,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Foods",
    },
    {
      id: 9,
      productName: "Onion",
      productPrice: 179,
      productImage: onion,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Vegetables",
    },
    {
      id: 10,
      productName: "Jack Fruit",
      productPrice: 156,
      productImage: jackfruit,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Fruits",
    },
    {
      id: 11,
      productName: "Noodles",
      productPrice: 200,
      productImage: noodles,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Foods",
    },
    {
      id: 12,
      productName: "Tomato",
      productPrice: 67,
      productImage: tomato,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Vegetables",
    },
    {
      id: 13,
      productName: "Cauliflower",
      productPrice: 167,
      productImage: cauliflower,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Vegetables",
    },
    {
      id: 14,
      productName: "Potato",
      productPrice: 16,
      productImage: potato,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Vegetables",
    },
    {
      id: 15,
      productName: "Chilli",
      productPrice: 17,
      productImage: chilli,
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe veritatis debitis. Veniam dolorum inventore minima! Quisquam illum rerum quaerat.",

      categoryName: "Vegetables",
    },
  ],
  cart: cartFromLocalStorage,
  orders: ordersFromLocalStorage,
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(ecommerceReducer, initialState);

  //this for updating the cart data to localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <EhopCart.Provider value={{ state, dispatch }}>
      {children}
    </EhopCart.Provider>
  );
};

export default Context;

export const EshopState = () => {
  return useContext(EhopCart);
};
