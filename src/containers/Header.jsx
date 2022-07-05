import React, { Component } from 'react';
import { SearchProducts } from '@components/SearchProducts';
import { ListMenu } from '@components/ListMenu';
import { ListMenuItem } from '@components/ListMenuItem';
import { UserMenu } from '@components/UserMenu';
import { CartCircle } from "@components/CartCircle";

import logoSvg from "@icons/logo.svg";
import menuSvg from "@icons/menu-icon.svg";
// import shopeCartSvg from "@icons/shopping-cart.svg";
import shoppingIconSvg from "@icons/shopping-icon.svg";


const userEmail = "stivenb1994@gmail.com";

function searchHandler(event) {
    console.log(event);
}

function cleanSearchInput() {
    console.log("something clicked!");
}

const initialNavItems = [
	{ selected: true, name: 'all', categoryId: 0 },
	{ selected: false, name: 'closes', categoryId: 1 },
	{ selected: false, name: 'electronics', categoryId: 2 },
	{ selected: false, name: 'furnitures', categoryId: 3 },
	{ selected: false, name: 'shoes', categoryId: 4 },
	{ selected: false, name: 'others', categoryId: 5 }
];

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showNav: false,
            showLogoApp: true,
            headerLoaded: false,
            navListItems: initialNavItems
        };

        this.handleHomeList = this.handleHomeList.bind(this);
        this.isCorrectPosition = this.isCorrectPosition.bind(this);
        this.getLeftPosition = this.getLeftPosition.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.handleMenuNav = this.handleMenuNav.bind(this);
        this.removeShoppingTabStyle = this.removeShoppingTabStyle.bind(this);
        this.showProductsSelected = this.showProductsSelected.bind(this);
        this.showShoppingCard = this.showShoppingCard.bind(this);
    }

    componentDidMount() {
        this.setState({ headerLoaded: true });        
    }

    handleHomeList(event) {
        if(event.target.classList[1] !== "selected-item-desk") {
            const itemToSelect = event.target.innerText.toLowerCase();
            let idCategory;
            const newNavListState = this.state.navListItems.map((item) => {
                if(item.name === itemToSelect) idCategory = item.categoryId;
                return {
                    selected: (item.selected === true || item.name !== itemToSelect ? false : true),
                    name: item.name,
                    categoryId: item.categoryId
                };
            });
            this.setState({ navListItems: newNavListState });
            this.props.updateProducts(idCategory);
        }
    }

    isCorrectPosition() {
        if(this.props.searchLeftPosition === "5%") {
            if(window.innerWidth < 1187) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    getLeftPosition() {
        if(this.props.refHeader.current !== undefined) {
            if(window.innerWidth >= 1187) {
                const leftMargin = (window.innerWidth - this.props.refHeader.current.offsetWidth) / 2;
                return leftMargin + "px";
            }
        } else {
            return "5%";
        }
    }

    showMenu() {
        this.props.setShowMenuTab(true);
        this.props.setCanScrollHome(false);
    }

    handleMenuNav() {
        this.setState({ showNav: !this.state.showNav });
    }

    removeShoppingTabStyle() {
        this.props.setShowShoppingCardTab(false);
        this.props.setCanScrollHome(true);
        this.setState({ showLogoApp: true });
    }

    showProductsSelected() {
        console.log("showProductsSelected message");
    }

    showShoppingCard() {
        if(window.innerWidth < 500) { // if the screen size is more less than 500px then work with the mobile class for menu.  
            if(this.props.showShoppingCardTab === true) {
                this.removeShoppingTabStyle();
            } else {
                this.props.setShowShoppingCardTab(true);
                this.props.setCanScrollHome(false);
                this.setState({ showLogoApp: false });
                this.showProductsSelected();
            }
        } else { // if screen size >= 500px then work with the menu class for larger devices.
            if(this.props.showShoppingCardTab === true) {
                this.removeShoppingTabStyle();
            } else {
                this.props.setShowShoppingCardTab(true);
                this.showProductsSelected();
            }
        }
    }

    render() {
        // making sure the right position for larger devices is provided when the component is completely loaded.
        let leftPosition = ((!this.isCorrectPosition() && this.state.headerLoaded) ?  
        this.getLeftPosition() : 
        this.props.searchLeftPosition);

        return (
            <header className="header-home-section">
                <nav className="nav-section">
                    <div ref={this.props.refHeader} className="header-home-nav">
                        <img className="menu-icon" onClick={this.showMenu} src={menuSvg} alt="menu icon" />
                        <div id="js-left-nav" className={`left-nav ${this.state.showLogoApp ? "" : "hide-logo"}`}>
                            <img id="js-link-logo" className="logo-icon-small" src={logoSvg} alt="logo of the webpage" />
                            <ListMenu
                                mobile={false}
                                menuTab={false}
                                listInfo={this.state.navListItems}
                                render={(item, index) => (
                                    <ListMenuItem 
                                        key={index} 
                                        {...item} 
                                        mobile={false} 
                                        menuTab={false} 
                                        handleHomeList={this.handleHomeList} 
                                    />
                                )}
                            />
                        </div>
                        <h2 id="js-tittle-logo" className={this.state.showLogoApp ? "hide-logo" : ""}>Shopping cart</h2>
                        <div className="right-nav">
                            <UserMenu
                                userEmail={userEmail}
                                showNav={this.state.showNav}
                                handleMenuNav={this.handleMenuNav}
                            />
                            <CartCircle />
                            <img className="shopping-cart" 
                                onClick={this.showShoppingCard} 
                                src={shoppingIconSvg} 
                                alt="shopping cart icon" 
                            />
                        </div>
                    </div>
                </nav>
                <SearchProducts 
                    leftPosition={leftPosition} 
                    searchHandler={searchHandler} 
                    cleanSearchInput={cleanSearchInput} 
                />
                <ListMenu 
                    mobile={true}
                    menuTab={false}
                    listInfo={this.state.navListItems}
                    render={(item, index) => (
                        <ListMenuItem 
                            key={index} 
                            {...item} 
                            mobile={true}
                            menuTab={false}
                            handleHomeList={this.handleHomeList} 
                        />
                    )}
                />
            </header>
        );
    }
}

export { Header };