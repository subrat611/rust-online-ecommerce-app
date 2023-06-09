import { useState } from "react";
import { AXIOS_HEADERS, BASE_URL, productFormInput } from "../constants";
import axios from "axios";

export default function CreateProductForm() {
  const [productInfo, setProductInfo] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    stock: "",
    category: "",
  });

  const handleProductInfo = (e) => {
    const field = e.target.name;
    setProductInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;

        setProductInfo((prev) => ({
          ...prev,
          [e.target.id]: base64String,
        }));
      };

      if (files[i]) reader.readAsDataURL(files[i]);
    }
  };

  const handleProductFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BASE_URL}/api/products`,
        productInfo,
        {
          headers: AXIOS_HEADERS,
        }
      );

      console.log(response);

      //reset the field
      setProductInfo({
        title: "",
        description: "",
        price: "",
        rating: "",
        stock: "",
        category: "",
      });
      e.target["productImage1"].value = null;
      e.target["productImage2"].value = null;
      e.target["productImage3"].value = null;
    } catch (err) {
      if (err.code === "ERR_NETWORK") {
        console.log("Network Error");
      }
    }
  };

  return (
    <>
      <h2 className="text-center text-lg capitalize font-medium mt-5">
        Fill Product Details
      </h2>
      <form
        className=" w-[90%] mt-5 mx-auto border-l-amber-50 rounded-md p-3 shadow md:w-[40%]"
        onSubmit={handleProductFormSubmit}
      >
        {productFormInput.map(({ name, type }, i) => (
          <div className="flex flex-col m-3" key={i}>
            <label htmlFor={`product${name}`}>Product {name}</label>
            <input
              id={`product${name}`}
              type={type}
              name={name}
              value={productInfo[name]}
              onChange={handleProductInfo}
              className="appearance-none border border-gray-300 shadow-sm placeholder-gray-400 rounded-md my-2 text-md px-2 py-2 focus:border-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
          </div>
        ))}
        <div className="flex flex-col m-3">
          <label htmlFor={`productImage`}>Product images 1</label>
          <input
            id="productImage1"
            type="file"
            onChange={handleImageChange}
            className="appearance-none border border-gray-300 shadow-sm placeholder-gray-400 rounded-md my-2 text-md px-2 py-2 focus:border-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>
        <div className="flex flex-col m-3">
          <label htmlFor={`productImage`}>Product images 2</label>
          <input
            id="productImage2"
            type="file"
            onChange={handleImageChange}
            className="appearance-none border border-gray-300 shadow-sm placeholder-gray-400 rounded-md my-2 text-md px-2 py-2 focus:border-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>
        <div className="flex flex-col m-3">
          <label htmlFor={`productImage`}>Product images 3</label>
          <input
            id="productImage3"
            type="file"
            onChange={handleImageChange}
            className="appearance-none border border-gray-300 shadow-sm placeholder-gray-400 rounded-md my-2 text-md px-2 py-2 focus:border-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>
        <div className="m-3">
          <button
            type="submit"
            className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
          >
            Create product
          </button>
        </div>
      </form>
    </>
  );
}
