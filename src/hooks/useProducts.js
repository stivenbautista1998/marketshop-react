import { useEffect, useState } from 'react';
import axios from 'axios';

function getEndpoint( categoryId ) {
    if(categoryId === 0) {
        return "https://api.escuelajs.co/api/v1/products"; // ?limit=500&offset=1
    } else {
        return `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
    }
}

/**
 * @param  {number} limit
 * @param  {array} productList
 * @returns {array}
 * It filters the array you pass as the productList parameter and returns and array with 
 * the amount of elements you indicate in the limit parameter.
 */
function limitByAmount( limit, productList ) {
    if(productList.length > limit) {
        const copyArray = [...productList];
        return copyArray.splice(0, limit);
    } else {
        return productList;
    }
}

const useProducts = () => {
    const [ products, setProducts ] = useState([]); // general product info
    const [ filteredProducts, setFilteredProducts ] = useState(null); // products filtered by a search parameter.
    const [ loadingProducts, setLoadingProducts ] = useState(true);
    let controller = null;

    const [ filteringProductsByMaximum, setFilteringProductsByMaximum ] = useState([]); // maximum amount of products is 50.
    
    useEffect(() => {
        const productRequest = async () => {
            // cancel pending request if any
            if(controller) controller.abort();
            controller = new AbortController(); // make our request cancellable
            const response = await axios(getEndpoint(0), { signal: controller.signal });
            setProducts(response.data);
            setFilteringProductsByMaximum(limitByAmount(50, response.data));
            setLoadingProducts(false);
            controller = null;
        };
        productRequest();
    }, []);

    function updateProducts( categoryId ) {
        setLoadingProducts(true);
        const productRequest = async () => {
            if(controller) controller.abort();
            controller = new AbortController();
            const response = await axios(getEndpoint(categoryId), { signal: controller.signal });
            setFilteredProducts(null);
            setProducts(response.data);
            setFilteringProductsByMaximum(limitByAmount(50, response.data));
            setLoadingProducts(false);
            controller = null;
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

    return { filteringProductsByMaximum, updateProducts, filteredProducts, updateFilteredProducts, loadingProducts };
}

export { useProducts };