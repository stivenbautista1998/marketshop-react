import React from 'react';
import { Link } from 'react-router-dom';
import { ListMenu } from '../components/ListMenu';
import { ListMenuItem } from '../components/ListMenuItem';

import closeIconSvg from "@icons/x-icon.svg";

function changeFilterSinceNav(event) {
    console.log(event.target.innerText);
}

const navListItems = [
	{selected: true, name: 'all'},
	{selected: false, name: 'closes'},
	{selected: false, name: 'electronics'},
	{selected: false, name: 'furnitures'},
	{selected: false, name: 'shoes'},
	{selected: false, name: 'others'}
];

const MenuTab = ({ userEmail, showMenuTab, setShowMenuTab, setCanScrollHome }) => {
    function hideMenu() {
        setShowMenuTab(false);
        setCanScrollHome(true);
    }

    return (
        <div className={`menu-tab ${showMenuTab ? "menu-active" : ""}`}>
            <img onClick={hideMenu} className="close-icon" src={closeIconSvg} alt="close icon" />
            <div>
                <h2 className="menu-tab__tittle">CATEGORIES</h2>
                <ListMenu
                    menuTab={true}
                    listInfo={navListItems}
                    render={(item, index) => (
                        <ListMenuItem
                            key={index}
                            menuTab={true}
                            {...item}
                            handleHomeList={changeFilterSinceNav}
                        />
                    )}
                />
                <ul className="menu-tab__logged">
                    <li className="menu-tab__logged__item"><Link className="style-no-link" to="/my-orders">My orders</Link></li>
                    <li className="menu-tab__logged__item"><Link className="style-no-link" to="/my-account">My account</Link></li>
                </ul>
            </div>
            <div>
                <span className="menu-tab__email">{userEmail}</span>
                <Link to="/" className="menu-tab__logging">Sign out</Link>
            </div>
        </div>
    );
}

export { MenuTab };