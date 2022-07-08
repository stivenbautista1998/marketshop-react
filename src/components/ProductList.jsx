import React from 'react';
import { ProductItem } from './ProductItem';

import notFoundImg from '@img/no-results.png';

const ProductList = ({ products, setProductDetailTab, loadingProducts }) => {
    const fiveTails = (
        <>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
        </>
    );

    const productItems = products.map((product) => (
        <ProductItem 
            key={product.id}
            product={product}
            setProductDetailTab={setProductDetailTab}
        />
    ));

    const productItemsSection = (
        productItems.length > 0 ? fiveTails : <img className='not-found-icon' src={notFoundImg} alt="Product not found." />
    );

    return (
        <div className="wrapper-home">
            <main className="article-section">
                {productItems}
                {!loadingProducts && productItemsSection}
            </main>
        </div>
    );
}

export { ProductList };