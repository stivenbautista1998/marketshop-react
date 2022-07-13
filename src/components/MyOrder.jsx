import React from 'react';
import { Link } from 'react-router-dom';

import arrowRightSvg from "@icons/arrow-right.svg";

const MyOrder = ({ orderInfo, totalOrdered }) => {
    function showDetails() {
        console.log("showDetails has been clicked!!");
    }

    return (
        <article className="shopping-card-item my-orders__item my-orders__item--special">
            <div className="part-up">
                <span className="my-orders__item__date price-product">{orderInfo.date}</span>
                <span className="my-orders__item__amount">
                    {`${orderInfo.productsOrdered.length} article${orderInfo.productsOrdered.length > 1 ? "s" : "" }`}
                </span>
            </div>
            <div className="back-container part-down">
                <span className="price-product">{totalOrdered()}</span>
                <Link
                    to={`/my-order/${orderInfo.id}`}
                    state={orderInfo}
                >
                    <img onClick={showDetails}
                        className="close-icon close-item" 
                        src={arrowRightSvg} 
                        alt="arrow right icon" 
                    />
                </Link>
            </div>
        </article>
    );
};

export { MyOrder };