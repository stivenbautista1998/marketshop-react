import React from 'react';

function showDetails() {
    console.log("showDetails has been clicked!!");
}

const MyOrders = () => {
    return (
        <div className="wrapper-login">
            <header className="header-my-orders">
                <nav className="header-home-nav nav--my-orders">
                    <img className="menu-icon" src="../assets/icons/menu-icon.svg" alt="menu icon" />
                    <a className="style-no-link" href="/"><h2>My orders</h2></a>
                    <img className="shopping-cart" src="../assets/icons/shopping-cart.svg" alt="icon of a shopping cart" />
                </nav>
            </header>
            <main className="my-orders-section">
                <article className="shopping-card-item my-orders__item">
                    <div className="part-up">
                        <span className="my-orders__item__date price-product">04.25.2021</span>
                        <span className="my-orders__item__amount">6 articles</span>
                    </div>
                    <div className="back-container part-down">
                        <span className="price-product">$ 120,00</span>
                        <img onClick={showDetails} className="close-icon close-item" src="../assets/icons/arrow-right.svg" alt="arrow right icon" />
                    </div>
                </article>
                <article className="shopping-card-item my-orders__item">
                    <div className="part-up">
                        <span className="my-orders__item__date price-product">02.20.2021</span>
                        <span className="my-orders__item__amount">6 articles</span>
                    </div>
                    <div className="back-container part-down">
                        <span className="price-product">$ 235,00</span>
                        <img onClick={showDetails} className="close-icon close-item" src="../assets/icons/arrow-right.svg" alt="arrow right icon" />
                    </div>
                </article>
                <article className="shopping-card-item my-orders__item">
                    <div className="part-up">
                        <span className="my-orders__item__date price-product">01.09.2021</span>
                        <span className="my-orders__item__amount">4 articles</span>
                    </div>
                    <div className="back-container part-down">
                        <span className="price-product">$ 112,00</span>
                        <img onClick={showDetails} className="close-icon close-item" src="../assets/icons/arrow-right.svg" alt="arrow right icon" />
                    </div>
                </article>
                <article className="shopping-card-item my-orders__item">
                    <div className="part-up">
                        <span className="my-orders__item__date price-product">01.08.2021</span>
                        <span className="my-orders__item__amount">7 articles</span>
                    </div>
                    <div className="back-container part-down">
                        <span className="price-product">$ 210,00</span>
                        <img onClick={showDetails} className="close-icon close-item" src="../assets/icons/arrow-right.svg" alt="arrow right icon" />
                    </div>
                </article>
                <article className="shopping-card-item my-orders__item">
                    <div className="part-up">
                        <span className="my-orders__item__date price-product">03.02.2021</span>
                        <span className="my-orders__item__amount">10 articles</span>
                    </div>
                    <div className="back-container part-down">
                        <span className="price-product">$ 551,00</span>
                        <img onClick={showDetails} className="close-icon close-item" src="../assets/icons/arrow-right.svg" alt="arrow right icon" />
                    </div>
                </article>
            </main>
        </div>
    );
}

export { MyOrders };