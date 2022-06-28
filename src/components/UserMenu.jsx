import React from 'react';

import arrowDownSvg from "@icons/arrow-down.svg";

const UserMenu = ({ userEmail, showNav, handleMenuNav }) => {
    return (
        <div className="email-menu">
            <div onClick={handleMenuNav} className="email-menu__front">
                <span className="email-menu__text">{userEmail}</span>
                <img className="arrow-down-icon" src={arrowDownSvg} alt="arrow down image" />
            </div>
            <div id="js-menu-nav" className={`email-menu__list ${showNav ? "show-section" : ""}` }>
                <ul className="email-list-ul">
                    <li className="email-list-ul__item"><a className="style-no-link" href="./my-orders.html">My orders</a></li>
                    <li className="email-list-ul__item"><a className="style-no-link" href="./my-account.html">My account</a></li>
                    <a href="../" className="email-list-ul__item menu-tab__logging">Sign out</a>
                </ul>
            </div>
        </div>
    );
}

export { UserMenu };