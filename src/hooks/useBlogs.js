import axios from "axios";
import { useEffect, useState } from "react";

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const getBlogs = async () => {
            const url = `https://secure-woodland-83351.herokuapp.com/qna`;
            const { data } = await axios.get(url);
            setBlogs(data);
        };
        getBlogs();
    }, []);

    return [blogs];
};

export default useBlogs;