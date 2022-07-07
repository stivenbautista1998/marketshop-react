import React, { useState } from 'react';
import { capitalizeAll, becomeDollar } from '@helpers/format';

import xIconSvg from '@icons/x-icon.svg';

const ProductOrdered = ({ productInfo, deleteItem }) => {
    const [ removeProduct, setRemoveProduct ] = useState(false);

    function deleteProductOrdered() {
        setRemoveProduct(true);
        // after 3ms the product will be removed from the shopping cart tab. enough time to show the effect.
        setTimeout(() => deleteItem(), 300);
    }

    return (
        <div>
            <article className={`shopping-card-item ${ removeProduct ? 'deleted-item' : '' }`}>
                <div className='front-container'>
                    <div className='image-border' style={{ backgroundImage: `url(${productInfo.images[0]})` }}></div>
                    <span className='name-product'>{capitalizeAll(productInfo.title)}</span>
                </div>
                <div className='back-container'>
                    <span className='price-product'>{becomeDollar(productInfo.price)} </span>
                    <img onClick={deleteProductOrdered} className='close-icon close-item' src={xIconSvg} alt='close item' />
                </div>
            </article>
        </div>
    );
};

export { ProductOrdered };