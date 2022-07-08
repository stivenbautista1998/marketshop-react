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
    const [ filteredProducts, setFilteredProducts ] = useState(null);
    const [ loadingProducts, setLoadingProducts ] = useState(true);
    
    useEffect(() => {
        const productRequest = async () => {
            const response = await axios(getEndpoint(0));
            setProducts(response.data);
            setLoadingProducts(false);
        };
        productRequest();
    }, []);

    function updateProducts( categoryId ) {
        setLoadingProducts(true);
        const productRequest = async () => {
            const response = await axios(getEndpoint(categoryId));
            setFilteredProducts(null);
            setProducts(response.data);
            setLoadingProducts(false);
        };
        productRequest();        
    }

    function updateFilteredProducts( filterValue ) {
        const productResult = products
            .filter(productItem => 
                productItem.title.toLowerCase().includes(filterValue.toLowerCase())
            );
        setFilteredProducts(productResult);
    }

    return { products, updateProducts, filteredProducts, updateFilteredProducts, loadingProducts };
}

export { useProducts };