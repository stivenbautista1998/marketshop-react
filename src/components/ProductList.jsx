import React, { useEffect, useState } from 'react';
import { ProductItem } from './ProductItem';
import axios from 'axios';

const endpoint = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
    const [ products, setProducts ] = useState([]);
    
    useEffect(() => {
        const productRequest = async () => {
            const response = await axios(endpoint);
            setProducts(response.data);
        };
        productRequest();
    }, []);
    
    return (
        <div className="wrapper-home">
            <main id="js-products-container" className="article-section">
                {products.map((product) => (
                    <ProductItem 
                        key={product.id}
                        name={product.title}
                        price={product.price}
                        imgProduct={product.images[0]} 
                    />
                ))}                
            </main>
        </div>
    );
}

export { ProductList };