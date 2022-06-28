import React from 'react';

const ListMenu = ({ mobile, listInfo, render, children }) => {
    return (
        <ul id={`nav-list-${mobile ? 'mobile' : 'desk'}`} 
            className={`header-home-section__list ${mobile ? '' : 'hide-section'}`}
        >
            {listInfo.map(render || children)}
        </ul>
    );
}

export { ListMenu };