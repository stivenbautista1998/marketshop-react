import { useEffect, useState } from 'react';
import axios from 'axios';

function getEndpoint( categoryId ) {
    if(categoryId === 0) {
        return "https://api.escuelajs.co/api/v1/products";
    } else {
        return `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
    }
}

const useProducts = () => {
    const [ products, setProducts ] = useState([]);
    
    useEffect(() => {
        const productRequest = async () => {
            const response = await axios(getEndpoint(0));
            setProducts(response.data);
        };
        productRequest();
    }, []);

    function updateProducts( categoryId ) {
        const productRequest = async () => {
            const response = await axios(getEndpoint(categoryId));
            setProducts(response.data);
        };
        productRequest();
    }

    return { products, setProducts, updateProducts};
}

export { useProducts };