import axios from "axios";
import { useEffect, useState } from "react";

const useMyItems = () => {
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        axios.get('https://secure-woodland-83351.herokuapp.com/myItems')
            .then(res => setMyItems(res?.data))
    }, [myItems]);

    return [myItems];
};

export default useMyItems;