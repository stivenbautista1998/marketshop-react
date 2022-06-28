import React from 'react';

function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

const ListMenuItem = ({ name, selected, mobile, handleHomeList }) => {
    const isMobile = mobile ? 'selected-item-mobile' : 'selected-item-desk';
    return (
        <li onClick={handleHomeList} 
            className={`header-home-section__list-option ${selected ? isMobile : ''}`}
        >
            {capitalize(name)}
        </li>
    );
}

export { ListMenuItem };
