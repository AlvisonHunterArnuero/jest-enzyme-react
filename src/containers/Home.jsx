import React from "react";
import Products from "../components/Products";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Products />
    </>
  );
};

export default Home;
