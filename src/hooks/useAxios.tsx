import React from "react";
import axios from "axios";

type fetchFunction = (url: string) => Promise<any>;

const customAxios = axios.create({
  baseURL: "https://express-blog-xa7v.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxios = () => {
  const get: fetchFunction = async (url) => {
    try {
      const response = await customAxios.get(url);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return { get };
};

export default useAxios;
