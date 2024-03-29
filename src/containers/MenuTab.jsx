import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListMenu } from '@components/ListMenu';
import { ListMenuItem } from '@components/ListMenuItem';

import closeIconSvg from "@icons/x-icon.svg";

const MenuTab = ({
        userEmail, 
        showMenuTab, 
        setShowMenuTab,
        navListItems,
        updateList,
        updateProducts,
        setCurrentUser
    }) => {

    const navigation = useNavigate();

    const singOut = () => {
        setCurrentUser(null);
        navigation("/login", { replace: true });
    };

    const goToMyOrders = () => {
        document.body.classList.remove("no-scroll");
        navigation("/my-orders");
    };

    const goToMyAccount = () => {
        document.body.classList.remove("no-scroll");
        navigation("/my-account");
    };

    function hideMenu() {
        setShowMenuTab(false);
        document.body.classList.remove("no-scroll");
    }

    function changeFilterSinceNav(event) {
        console.log(event.target.innerText);
        
        if(event.target.classList[1] !== "menu-tab-selected-item") {
            const itemToSelect = event.target.innerText.toLowerCase();            
            const idCategory = updateList(itemToSelect);
            updateProducts(idCategory);
            hideMenu();
        }
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
                    <li onClick={goToMyOrders} className="menu-tab__logged__item">
                        My orders
                    </li>
                    <li onClick={goToMyAccount} className="menu-tab__logged__item">
                        My account
                    </li>
                </ul>
            </div>
            <div>
                <span className="menu-tab__email">{userEmail}</span>
                <button onClick={singOut} className="menu-tab__logging">
                    Sign out
                </button>
            </div>
        </div>
    );
}

export { MenuTab };