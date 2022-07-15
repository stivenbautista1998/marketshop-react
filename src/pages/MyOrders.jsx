import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { MyOrder } from '@components/MyOrder';
import { Link } from 'react-router-dom';
import { JustIcon } from '@components/JustIcon';

import menuSvg from "@icons/menu-icon.svg";
import shoppingCartSvg from "@icons/shopping-cart.svg";

const MyOrders = () => {
    const { state, totalSelectedProducts } = useContext(AppContext);

    const orderList = state.orders.map((order) => 
        <MyOrder 
            key={order.id} 
            orderInfo={order} 
            totalOrdered={() => totalSelectedProducts(order.productsOrdered)} 
        />
    );

    return (
        <div className="wrapper-login">
            <header className="header-my-orders">
                <nav className="header-home-nav nav--my-orders">
                    <img className="menu-icon" src={menuSvg} alt="menu icon" />
                    <Link className="style-no-link" to="/">
                        <h2 className="front-container">
                            <JustIcon responsiveSize={true} />
                            My orders
                        </h2>
                    </Link>
                    <img className="shopping-cart" src={shoppingCartSvg} alt="icon of a shopping cart" />
                </nav>
            </header>
            <main className="my-orders-section">
                {state.orders.length > 0 ? orderList : <div>No Orders Made</div>}
            </main>
        </div>
    );
}

export { MyOrders };