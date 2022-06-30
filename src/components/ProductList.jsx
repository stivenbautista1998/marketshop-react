import React from 'react';
import { ProductItem } from './ProductItem';

const ProductList = ({ products, setProductDetailTab }) => {    
    return (
        <div className="wrapper-home">
            <main id="js-products-container" className="article-section">
                {products.map((product) => (
                    <ProductItem 
                        key={product.id}
                        product={product}
                        setProductDetailTab={setProductDetailTab}
                    />
                ))}                
            </main>
        </div>
    );
}

export { ProductList };