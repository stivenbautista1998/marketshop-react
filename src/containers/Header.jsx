import React, { Component } from 'react';

function searchHandler(event) {
    console.log(event);
}

function handleHomeList(event) {
    console.log(event);
}

function cleanSearchInput() {
    console.log("something clicked!");
}


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showNav: false,
            showLogoApp: true,
            hasLoaded: false
        };

        this.isCorrectPosition = this.isCorrectPosition.bind(this);
        this.getLeftPosition = this.getLeftPosition.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.handleMenuNav = this.handleMenuNav.bind(this);
        this.removeShoppingTabStyle = this.removeShoppingTabStyle.bind(this);
        this.showProductsSelected = this.showProductsSelected.bind(this);
        this.showShoppingCard = this.showShoppingCard.bind(this);
    }

    componentDidMount() {
        this.setState({ hasLoaded: true });        
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
                /* calcShoppingTabRightMargin(); */
            } else {
                this.props.setShowShoppingCardTab(true);
                /* calcShoppingTabRightMargin(); */
                this.showProductsSelected();
            }
        }
    }

    render() {
        console.log("showing header!");

        // making sure the right position for larger devices is provided when the component is completely loaded.
        let leftPosition = ((!this.isCorrectPosition() && this.state.hasLoaded) ?  
        this.getLeftPosition() : 
        this.props.searchLeftPosition);

        return (
            <header className="header-home-section">
                <nav className="nav-section">
                    <div ref={this.props.refHeader} className="header-home-nav">
                        <img className="menu-icon" onClick={this.showMenu} src="../assets/icons/menu-icon.svg" alt="menu icon" />
                        <div id="js-left-nav" className={`left-nav ${this.state.showLogoApp ? "" : "hide-logo"}`}>
                            <img id="js-link-logo" className="logo-icon-small" src="../assets/icons/logo.svg" alt="logo of the webpage" />
                            <ul id="home-nav-desk" className="header-home-section__list hide-section">
                                <li id="js-all-desk" onClick={handleHomeList} className="header-home-section__list-option selected-item-desk">All</li>
                                <li id="js-clothes-desk" onClick={handleHomeList} className="header-home-section__list-option">Clothes</li>
                                <li id="js-electronics-desk" onClick={handleHomeList} className="header-home-section__list-option">Electronics</li>
                                <li id="js-furnitures-desk" onClick={handleHomeList} className="header-home-section__list-option">Furnitures</li>
                                <li id="js-toys-desk" onClick={handleHomeList} className="header-home-section__list-option">Toys</li>
                                <li id="js-others-desk" onClick={handleHomeList} className="header-home-section__list-option">Others</li>
                            </ul>
                        </div>
                        <h2 id="js-tittle-logo" className={/* showLogo */ this.state.showLogoApp ? "hide-logo" : ""}>Shopping cart</h2>
                        <div className="right-nav">
                            <div className="email-menu">
                                <div onClick={this.handleMenuNav} className="email-menu__front">
                                    <span className="email-menu__text">stivenb1994@gmail.com</span>
                                    <img className="arrow-down-icon" src="../assets/icons/arrow-down.svg" alt="arrow down image" />
                                </div>
                                <div id="js-menu-nav" className={`email-menu__list ${this.state.showNav ? "show-section" : ""}` }>
                                    <ul className="email-list-ul">
                                        <li className="email-list-ul__item"><a className="style-no-link" href="./my-orders.html">My orders</a></li>
                                        <li className="email-list-ul__item"><a className="style-no-link" href="./my-account.html">My account</a></li>
                                        <a href="../" className="email-list-ul__item menu-tab__logging">Sign out</a>
                                    </ul>
                                </div>
                            </div>
                            <div id="js-counter-circle" className="counter-circle">0</div>
                            <img className="shopping-cart" onClick={this.showShoppingCard} src="../assets/icons/shopping-cart.svg" alt="icon of a shopping cart" />
                        </div>
                    </div>
                </nav>
                <div className="search-wrapper">
                    <div className="general-input center-search search-home-section" style={{ left: leftPosition }}>
                        <img className="search-home-icon search-icon" src="../assets/icons/search-icon.svg" alt="search icon" />
                        <input id="search-input" onKeyUp={searchHandler} className="header-home-section__search" type="text" placeholder="Search product" />
                        <img id="js-clean-search" onClick={cleanSearchInput} className="search-home-icon clean-search" src="../assets/icons/x-icon.svg" alt="close icon" />
                    </div>
                </div>
                <ul id="home-nav-mobile" className="header-home-section__list">
                    <li id="js-all-mobile" onClick={handleHomeList} className="header-home-section__list-option selected-item-mobile">All</li>
                    <li id="js-clothes-mobile" onClick={handleHomeList} className="header-home-section__list-option">Clothes</li>
                    <li id="js-electronics-mobile" onClick={handleHomeList} className="header-home-section__list-option">Electronics</li>
                    <li id="js-furnitures-mobile" onClick={handleHomeList} className="header-home-section__list-option">Furnitures</li>
                    <li id="js-toys-mobile" onClick={handleHomeList} className="header-home-section__list-option">Toys</li>
                    <li id="js-others-mobile" onClick={handleHomeList} className="header-home-section__list-option">Others</li>
                </ul>
            </header>
        );
    }
}

export { Header };