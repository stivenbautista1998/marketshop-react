import { useEffect, useState } from 'react';
import axios from 'axios';

function getEndpoint( categoryId ) {
    if(categoryId === 0) {
        return "https://api.escuelajs.co/api/v1/products"; // ?limit=500&offset=1
    } else {
        return `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
    }
}

/* function getRightAmount( categoryId, productList ) {
    if(categoryId === 0) {
        return productList.splice(50, productList.length - 50);
    } else {
        return productList;
    }
} */

const useProducts = () => {
    const [ products, setProducts ] = useState([]);
    const [ filteredProducts, setFilteredProducts ] = useState(null);
    const [ loadingProducts, setLoadingProducts ] = useState(true);

    /* const [ currentCategoryProducts, setCurrentCategoryProducts ] = useState(0);
    const productsToShow = getRightAmount(currentCategoryProducts, products); */
    
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

    
    /**
     * @param  {string} filterValue
     * It allows to update the global state filteredProducts by receiving a search parameter,
     * All the products that matches the parameter will be placed into the mentioned state.
     */
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