import React from "react";
import { Header } from "@containers/Header";
import { MenuTab } from '@containers/MenuTab';
import { ProductDetailTab } from '@containers/ProductDetailTab';
import { ShoppingCardTab } from "@containers/ShoppingCardTab";
import { ProductList } from "@components/ProductList";
import { useProducts } from '@hooks/useProducts';
import { useNavList } from "./hooks/useNavList";
import { useHome } from "./hooks/useHome";


const Home = ({ currentUser, setCurrentUser }) => {

    const {
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
    } = useHome();

    const {
        filteringProductsByMaximum: products,
        filteredProducts, 
        updateFilteredProducts,
        updateProducts,
        loadingProducts 
    } = useProducts(); // using custom hooks

    const { navListItems, updateList } = useNavList();


    React.useEffect(() => {
        window.addEventListener("resize", gettingResizedMargin);

        return () => {
            window.removeEventListener("resize", gettingResizedMargin);
        }
    }, []);
    

    return (
        <section className={canScroll ? "" : "no-scroll"}>
            <Header 
                setShowMenuTab={setShowMenuTab} 
                setCanScrollHome={setCanScroll} 
                showShoppingCardTab={showShoppingCardTab}
                setShowShoppingCardTab={setShowShoppingCardTab}
                searchLeftPosition={searchLeftPosition}
                filterBySearch={updateFilteredProducts}
                navListItems={navListItems}
                updateList={updateList}
                updateProducts={updateProducts}
                userInfo={currentUser}
                setCurrentUser={setCurrentUser}
                refHeader={refHeader}
            />
            <MenuTab
                userEmail={currentUser?.username}
                showMenuTab={showMenuTab} 
                setShowMenuTab={setShowMenuTab}
                setCanScrollHome={setCanScroll}
                navListItems={navListItems}
                updateList={updateList}
                updateProducts={updateProducts}
                setCurrentUser={setCurrentUser}
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
                products={filteredProducts === null ? products : filteredProducts} 
                setProductDetailTab={getProductDetailInfo}
                loadingProducts={loadingProducts}
            />
        </section>
    );
}

export { Home };