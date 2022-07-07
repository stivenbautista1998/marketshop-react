import React from 'react';
import { ProductItem } from './ProductItem';

const ProductList = ({ products, setProductDetailTab }) => {    
    const fiveTails = (
        <>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
        </>
    );

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
                {(products.length > 0 ? fiveTails : '')}
            </main>
        </div>
    );
}

export { ProductList };