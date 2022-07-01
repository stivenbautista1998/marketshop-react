import React from "react";
import { Header } from "@containers/Header";
import { MenuTab } from '@containers/MenuTab';
import { ProductDetailTab } from '@containers/ProductDetailTab';
import { ShoppingCardTab } from "@containers/ShoppingCardTab";
import { ProductList } from "@components/ProductList";
import { useProducts } from '@hooks/useProducts';

const userEmail = "stivenb1994@gmail.com";

const Home = () => {
    const [ showMenuTab, setShowMenuTab ] = React.useState(false);
    const [ canScroll, setCanScroll ] = React.useState(true);
    const [ showShoppingCardTab, setShowShoppingCardTab ] = React.useState(false);
    const [ showProductDetail, setShowProductDetail ] = React.useState(false);
    const [ productSelectedInfo, setProductSelectedInfo ] = React.useState({});

    const [ searchLeftPosition, setSearchLeftPosition ] = React.useState("5%");
    const [ rightPosition, setRightPosition ] = React.useState("0px");
    const refHeader = React.useRef();

    const { products, updateProducts } = useProducts(); // using custom hooks    

    
    function gettingResizedMargin() {
        if(window.innerWidth < 500) {
            setRightPosition("0px"); // js-product-detail  js-shopping-card-tab
            setSearchLeftPosition("5%"); // .search-home-section
        } else if(window.innerWidth < 1187) {
            setRightPosition("5px"); // productDetailWrapper.style.right = "5px";  btnShowShoppingCard.style.right = "5px";
            setSearchLeftPosition("5%"); // searchInputElement.style.left = "5%";
        } else {
            const shoppingTabMarginRight = (window.innerWidth - refHeader.current.offsetWidth) / 2;
            setRightPosition(shoppingTabMarginRight + "px");
            setSearchLeftPosition(shoppingTabMarginRight + 15 + "px");
        }
    }

    React.useEffect(() => {
        window.addEventListener("resize", gettingResizedMargin);

        return () => {
            window.removeEventListener("resize", gettingResizedMargin);
        }
    }, []);

    // this receives the product info from ProductItem to then pass it to productDetail, and also it show it.
    function getProductDetailInfo( productInfo ) {
        if(productInfo.showDetailTab) {
            setShowProductDetail(true);        
        }
        setProductSelectedInfo(productInfo);
    }

    // this receives from productDetail the setState to remove the visibility class, and then it close the element after 200s
    function closeProductDetailTab( showTab ) {
        showTab(false);
        setTimeout(() => {
            setShowProductDetail(false);
        }, 200);
    }


    return (
        <section id="body-home" className={canScroll ? "" : "no-scroll"}>
            <Header 
                setShowMenuTab={setShowMenuTab} 
                setCanScrollHome={setCanScroll} 
                showShoppingCardTab={showShoppingCardTab}
                setShowShoppingCardTab={setShowShoppingCardTab}
                searchLeftPosition={searchLeftPosition}
                updateProducts={updateProducts}
                refHeader={refHeader}
            />
            <MenuTab 
                userEmail={userEmail}
                showMenuTab={showMenuTab} 
                setShowMenuTab={setShowMenuTab}
                setCanScrollHome={setCanScroll}
            />
            {showProductDetail && <ProductDetailTab
                closeProductDetailTab={closeProductDetailTab}
                pDetailRightPosition={rightPosition}
                productInfo={productSelectedInfo}
                refHeader={refHeader}
            />}
            <ShoppingCardTab
                showShoppingCardTab={showShoppingCardTab}
                shoppingCardRightPosition={rightPosition}
                refHeader={refHeader}
            />
        
            <ProductList 
                products={products} 
                setProductDetailTab={getProductDetailInfo}
            />
        </section>
    );
}

export { Home };