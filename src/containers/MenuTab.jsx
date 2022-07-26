import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ListMenu } from '@components/ListMenu';
import { ListMenuItem } from '@components/ListMenuItem';

import closeIconSvg from "@icons/x-icon.svg";

const defaultListItems = [
	{ selected: true, name: 'all', categoryId: 0 },
	{ selected: false, name: 'closes', categoryId: 1 },
	{ selected: false, name: 'electronics', categoryId: 2 },
	{ selected: false, name: 'furnitures', categoryId: 3 },
	{ selected: false, name: 'shoes', categoryId: 4 },
	{ selected: false, name: 'others', categoryId: 5 }
];

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
            // event.target.classList.add("menu-tab-selected-item");
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
                    <li className="menu-tab__logged__item"><Link className="style-no-link" to="/my-orders">My orders</Link></li>
                    <li className="menu-tab__logged__item"><Link className="style-no-link" to="/my-account">My account</Link></li>
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