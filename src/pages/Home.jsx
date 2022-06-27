import React from "react";
import { Header } from "../containers/Header";
import { MenuTab } from '../containers/MenuTab';
import { ProductDetailTab } from '../containers/ProductDetailTab';
import { ShoppingCardTab } from "../containers/ShoppingCardTab";
import { ProductItem } from "../components/ProductItem";

const Home = () => {
    const [ showMenuTab, setShowMenuTab ] = React.useState(false);
    const [ canScroll, setCanScroll ] = React.useState(true);
    const [ showShoppingCardTab, setShowShoppingCardTab ] = React.useState(false);

    const [ searchLeftPosition, setSearchLeftPosition ] = React.useState("5%");
    const [ rightPosition, setRightPosition ] = React.useState("0px");
    const refHeader = React.useRef();
    
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
        console.log("checking resize!!");
    }

    React.useEffect(() => {
        window.addEventListener("resize", gettingResizedMargin);

        return () => {
            window.removeEventListener("resize", gettingResizedMargin);
        }
    }, []);


    return (
        <section id="body-home" className={canScroll ? "" : "no-scroll"}>
            <Header 
                setShowMenuTab={setShowMenuTab} 
                setCanScrollHome={setCanScroll} 
                showShoppingCardTab={showShoppingCardTab}
                setShowShoppingCardTab={setShowShoppingCardTab}
                searchLeftPosition={searchLeftPosition}
                refHeader={refHeader}
            />
            <MenuTab 
                showMenuTab={showMenuTab} 
                setShowMenuTab={setShowMenuTab}
                setCanScrollHome={setCanScroll}
            />
            <ProductDetailTab 
                pDetailRightPosition={rightPosition}
            />
            <ShoppingCardTab
                showShoppingCardTab={showShoppingCardTab}
                shoppingCardRightPosition={rightPosition}
                refHeader={refHeader}
            />
        
            <div className="wrapper-home">
                <main id="js-products-container" className="article-section">
                    <ProductItem />
                </main>
            </div>
        </section>
    );
}

export { Home };