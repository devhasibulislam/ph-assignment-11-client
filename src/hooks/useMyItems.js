import axios from "axios";
import { useEffect, useState } from "react";

const useMyItems = () => {
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/myItems')
            .then(res => setMyItems(res?.data))
    }, []);

    return [myItems];
};

export default useMyItems;