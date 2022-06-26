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
    
    function calcShoppingTabRightMargin() {
        if(window.innerWidth < 500) {
            setRightPosition("0px"); // js-product-detail  js-shopping-card-tab
            setSearchLeftPosition("5%"); // .search-home-section
        } else if(window.innerWidth < 1187) {
            setRightPosition("5px"); // productDetailWrapper.style.right = "5px";  btnShowShoppingCard.style.right = "5px";
            setSearchLeftPosition("5%"); // searchInputElement.style.left = "5%";
        } else {
            /* const shoppingTabMarginRight = (window.innerWidth - headerHomeNav.offsetWidth) / 2;
            setRightPosition(shoppingTabMarginRight + "px");
            setSearchLeftPosition(shoppingTabMarginRight + 15 + "px"); */
        }
    }

    React.useEffect(() => {
        const checkWhenResizing = () => {
            calcShoppingTabRightMargin();
        }

        window.addEventListener("resize", checkWhenResizing);

        return () => {
            window.removeEventListener("resize", checkWhenResizing);
        }
    }, []);



    return (
        <section id="body-home" className={canScroll ? "" : "no-scroll"}>
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
            />
            <Header 
                setShowMenuTab={setShowMenuTab} 
                setCanScrollHome={setCanScroll} 
                showShoppingCardTab={showShoppingCardTab}
                setShowShoppingCardTab={setShowShoppingCardTab}
                searchLeftPosition={searchLeftPosition}
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