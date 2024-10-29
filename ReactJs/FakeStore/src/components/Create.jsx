import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import { productContext } from "../utils/Context";

const Create = () => {
  const { products, setProducts } = useContext(productContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 10 ||
      category.trim().length < 3
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    const newProduct = {
      id: nanoid(),
      title,
      image,
      price,
      description,
      category,
    };
    setProducts([...products, newProduct]);
    console.log(products);
    toast.success("Product Added Successfully");

    setTitle("");
    setImage("");
    setPrice("");
    setDescription("");
    setCategory("");
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-[5%] w-screen h-screen items-center  gap-4"
    >
      <h1 className="w-1/2 mb-5 text-3xl font-bold">Add new Product</h1>
      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 p-3 rounded w-1/2 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <input
        type="url"
        placeholder="imagelink"
        className="text-1xl bg-zinc-100 p-3 rounded w-1/2 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />

      <div className="flex w-1/2 justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 p-3 rounded w-[48%] mb-3"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 p-3 rounded w-[48%]  mb-3"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>

      <textarea
        placeholder="Enter Product Description"
        className="text-1xl bg-zinc-100 p-3 rounded w-1/2 mb-3"
        rows="10"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <div className="w-1/2">
        <button className="py-3 px-5 border rounded border-blue-300 text-blue-500 hover:bg-blue-100">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default Create;
