import React from 'react';

function changeFilterSinceNav(value) {
    console.log("changeFilterSinceNav is clicked!" + value);
}

const MenuTab = ({ showMenuTab, setShowMenuTab, setCanScrollHome }) => {
    console.log("showing menu tab");
    function hideMenu() {
        setShowMenuTab(false);
        setCanScrollHome(true);
    }

    return (
        <div id="js-menu-tab" className={`menu-tab ${showMenuTab ? "menu-active" : ""}`}>
            <img onClick={hideMenu} className="close-icon" src="../assets/icons/x-icon.svg" alt="close icon" />
            <div>
                <h2 className="menu-tab__tittle">CATEGORIES</h2>
                <ul className="menu-tab__main-list">
                    <li onClick={() => changeFilterSinceNav('all')} className="menu-tab__main-list__item">All</li>
                    <li onClick={() => changeFilterSinceNav('clothes')} className="menu-tab__main-list__item">Clothes</li>
                    <li onClick={() => changeFilterSinceNav('electronics')} className="menu-tab__main-list__item">Electronics</li>
                    <li onClick={() => changeFilterSinceNav('furnitures')} className="menu-tab__main-list__item">Furnitures</li>
                    <li onClick={() => changeFilterSinceNav('toys')} className="menu-tab__main-list__item">Toys</li>
                    <li onClick={() => changeFilterSinceNav('others')} className="menu-tab__main-list__item">Others</li>
                </ul>
                <ul className="menu-tab__logged">
                    <li className="menu-tab__logged__item"><a className="style-no-link" href="./my-orders.html">My orders</a></li>
                    <li className="menu-tab__logged__item"><a className="style-no-link" href="./my-account.html">My account</a></li>
                </ul>
            </div>
            <div>
                <span className="menu-tab__email">stivenb1994@gmail.com</span>
                <a href="../" className="menu-tab__logging">Sign out</a>
            </div>
        </div>
    );
}

export { MenuTab };