import React, { useState } from 'react';

const useHome = () => {
    const [ showMenuTab, setShowMenuTab ] = useState(false);
    const [ canScroll, setCanScroll ] = useState(true);
    const [ showShoppingCardTab, setShowShoppingCardTab ] = useState(false);
    const [ showProductDetail, setShowProductDetail ] = useState(false);
    const [ productSelectedInfo, setProductSelectedInfo ] = useState({});

    const [ searchLeftPosition, setSearchLeftPosition ] = useState("5%");
    const [ rightPosition, setRightPosition ] = useState("0px");
    const refHeader = React.useRef();
    
    function gettingResizedMargin() {
        if(window.innerWidth < 500) {
            setRightPosition("0px");
            setSearchLeftPosition("5%");
        } else if(window.innerWidth < 1187) {
            setRightPosition("5px");
            setSearchLeftPosition("5%");
        } else {
            const shoppingTabMarginRight = (window.innerWidth - refHeader.current.offsetWidth) / 2;
            setRightPosition(shoppingTabMarginRight + "px");
            setSearchLeftPosition(shoppingTabMarginRight + 15 + "px");
        }
    }

    // this receives the product info from ProductItem to then pass it to productDetail, and also it show it.
    function getProductDetailInfo( productInfo ) {        
        if(productInfo.showDetailTab) {
            setShowProductDetail(true);
        }
        setProductSelectedInfo(productInfo);
    }

    // this receives from productDetail the setState to remove the visibility class, and then it close the element after 200s
    function closeProductDetailTab( showTab, updateProductDetailOpen ) {
        showTab(false);
        // setting to null the global state that indicates if the current product detail tab is open.
        updateProductDetailOpen(null);
        setTimeout(() => {
            setShowProductDetail(false);
        }, 200);
    }

    return { 
        showMenuTab, 
        setShowMenuTab, 
        canScroll,
        setCanScroll,
        showShoppingCardTab,
        setShowShoppingCardTab,
        showProductDetail,
        productSelectedInfo,
        searchLeftPosition,
        rightPosition,
        refHeader,
        gettingResizedMargin,
        getProductDetailInfo,
        closeProductDetailTab
    };
};

export { useHome };