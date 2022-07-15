import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductOrdered } from '@components/ProductOrdered';
import AppContext from '../context/AppContext';

import menuSvg from "@icons/menu-icon.svg";
import shoppingCartSvg from "@icons/shopping-cart.svg";

const MyOrderDetail = () => {
    const { totalSelectedProducts } = useContext(AppContext);
    const { state } = useLocation();
    console.log(state);

    return (
        <div className="wrapper-login">
            <header className="header-my-order">
                <nav className="header-home-nav nav--my-orders">
                    <img className="menu-icon" src={menuSvg} alt="menu icon" />
                    <Link className="style-no-link" to="/"><h2>My order</h2></Link>
                    <img className="shopping-cart" src={shoppingCartSvg} alt="icon of a shopping cart" />
                </nav>
            </header>
            <main className="my-orders-section">
                <section className="shopping-card-item my-orders__item my-orders__item--special">
                    <div className="part-up">
                        <span className="my-orders__item__date price-product">{state.date}</span>
                        <span className="my-orders__item__amount">
                            {`${state.productsOrdered.length} article${state.productsOrdered.length > 1 ? "s" : "" }`}
                        </span>
                    </div>
                    <div className="back-container part-down">
                        <span className="price-product">{totalSelectedProducts(state.productsOrdered)}</span>
                    </div>
                </section>
               {state.productsOrdered.map((product) => <ProductOrdered key={product.id} productInfo={product} />)}
            </main>
        </div>
    )
}

export { MyOrderDetail };