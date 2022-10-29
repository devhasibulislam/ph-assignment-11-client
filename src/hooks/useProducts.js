import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("https://warehouse-management-wm-server.onrender.com/product");
      setProducts(data);
    };
    getProducts();
  }, [products]);

  return [products];
};

export default useProducts;
