import {
  AiOutlineDropbox,
  AiOutlineEdit,
  AiOutlineHeart,
} from "react-icons/ai";

export const BASE_URL = "http://localhost:8000";
export const AXIOS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const navAccountDropMenuItems = [
  {
    name: "Orders",
    icon: <AiOutlineDropbox />,
  },
  {
    name: "Create Product",
    icon: <AiOutlineEdit />,
  },
  {
    name: "Wishlist",
    icon: <AiOutlineHeart />,
  },
];

export const productFormInput = [
  {
    name: "title",
    type: "text",
  },
  {
    name: "description",
    type: "text",
  },
  {
    name: "price",
    type: "number",
  },
  {
    name: "rating",
    type: "text",
  },
  {
    name: "stock",
    type: "number",
  },
  {
    name: "category",
    type: "text",
  },
];
