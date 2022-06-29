import React from 'react';
import { ProductItem } from './ProductItem';
import { useProducts } from '@hooks/useProducts';

const endpoint = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
    // before it had a problem with the destructuring { products } = useProducts
    const products = useProducts(endpoint); // using custom hooks
    
    return (
        <div className="wrapper-home">
            <main id="js-products-container" className="article-section">
                {products.map((product) => (
                    <ProductItem 
                        key={product.id}
                        product={product}
                        /* name={product.title}
                        price={product.price}
                        imgProduct={product.images[0]}  */
                    />
                ))}                
            </main>
        </div>
    );
}

export { ProductList };