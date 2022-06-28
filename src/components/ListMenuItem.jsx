import React from 'react';

function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

const ListMenuItem = ({ name, selected, mobile, menuTab, handleHomeList }) => {
    let isMobile, isFrontTab;
    const isMenuTab = `menu-tab__main-list__item`;
    
    if(!menuTab) {
        isMobile = mobile ? 'selected-item-mobile' : 'selected-item-desk';
        isFrontTab = `header-home-section__list-option ${selected ? isMobile : ''}`;   
    }    
    
    return (
        <li onClick={handleHomeList} 
            className={menuTab ? isMenuTab : isFrontTab}
        >
            {capitalize(name)}
        </li>
    );
}

export { ListMenuItem };
