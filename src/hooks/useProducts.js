import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = (endpoint) => {
    const [ products, setProducts ] = useState([]);
    
    useEffect(() => {
        const productRequest = async () => {
            const response = await axios(endpoint);
            setProducts(response.data);
        };
        productRequest();
    }, []);

    return products;
}

export { useProducts };