import axios from "axios";
import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const { data } = await axios.get("https://warehouse-management-wm-server.onrender.com/qna");
      setBlogs(data);
    };
    getBlogs();
  }, []);

  return [blogs];
};

export default useBlogs;
