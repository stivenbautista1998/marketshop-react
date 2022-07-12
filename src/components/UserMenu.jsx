import React from 'react';
import { Link } from 'react-router-dom';

import arrowDownSvg from "@icons/arrow-down.svg";

const UserMenu = ({ userEmail, showNav, handleMenuNav }) => {
    return (
        <div className="email-menu">
            <div onClick={handleMenuNav} className="email-menu__front">
                <span className="email-menu__text">{userEmail}</span>
                <img className="arrow-down-icon" src={arrowDownSvg} alt="arrow down image" />
            </div>
            <div className={`email-menu__list ${showNav ? "show-section" : ""}` }>
                <ul className="email-list-ul">
                    <li className="email-list-ul__item"><Link to="/my-orders" className="style-no-link">My orders</Link></li>
                    <li className="email-list-ul__item"><Link to="/my-account" className="style-no-link">My account</Link></li>
                    <Link to="/login" className="email-list-ul__item menu-tab__logging">Sign out</Link>
                </ul>
            </div>
        </div>
    );
}

export { UserMenu };