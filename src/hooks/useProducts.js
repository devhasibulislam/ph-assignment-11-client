import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // axios.get('https://secure-woodland-83351.herokuapp.com/product')
        //     .then(res => setProducts(res?.data))
        const getProducts = async () => {
            const url = `https://secure-woodland-83351.herokuapp.com/product`;
            const { data } = await axios.get(url);
            setProducts(data);
        };
        getProducts();
    }, []);

    return [products];
};

export default useProducts;
