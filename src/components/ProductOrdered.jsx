import React from 'react';
import { capitalizeAll, becomeDollar } from '@helpers/format';

import xIconSvg from '@icons/x-icon.svg';

const ProductOrdered = ({ productInfo, deleteItem }) => {
    return (
        <div>
            <article className='shopping-card-item'>
                <div className='front-container'>
                    <div className='image-border' style={{ backgroundImage: `url(${productInfo.images[0]})` }}></div>
                    <span className='name-product'>{capitalizeAll(productInfo.title)}</span>
                </div>
                <div className='back-container'>
                    <span className='price-product'>{becomeDollar(productInfo.price)} </span>
                    <img onClick={deleteItem} className='close-icon close-item' src={xIconSvg} alt='close item' />
                </div>
            </article>
        </div>
    );
};

export { ProductOrdered };