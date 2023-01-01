import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';


import unitedstates from '../../assets/images/country/united-states.png'
// import Germany from '../../assets/images/country/germany.png'
import turkish from '../../assets/images/country/turkish.png'
import product1 from '../../assets/images/vegetable/product/1.png'
import product2 from '../../assets/images/vegetable/product/2.png'
// import product3 from '../../assets/images/vegetable/product/3.png'
// import product4 from '../../assets/images/vegetable/product/4.png'
// import product5 from '../../assets/images/vegetable/product/5.png'
// import product6 from '../../assets/images/vegetable/product/6.png'
import logo1 from '../../assets/images/logo/1.png'





function Header() {
    const location = useLocation()

    const navigate = useNavigate();

    const homeClick = () => {
        navigate('/');

    }

    const shopClick = () => {
        navigate('/shop');

    }
    const productClick = () => {
        navigate('/product');

    }
    const megamenuClick = () => {
        navigate('/megamenu');

    }

    const blogsClick = () => {
        navigate('/blog');

    }

    const pagesClick = () => {
        navigate('/pages');

    }

    const sellerClick = () => {
        navigate('/seller');

    }

    const loginClick = () => {
        navigate('/login');

    }


    const registrationClick = () => {
        navigate('/registration');

    }
    const forgotpasswordClick = () => {
        navigate('/forgot-password');

    }












    return (
        <>
            {/* <!-- Header Start --> */}
            <header className="pb-md-4 pb-0">
                <div className="header-top">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-xxl-3 d-xxl-block d-none">
                                <div className="top-left-header">
                                    <i className="iconly-Location icli text-white" />
                                    <span className="text-white">1418 Riverwood Drive, CA 96052, US</span>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
                                <div className="header-offer">
                                    <div className="notification-slider">

                                        <div>
                                            <div className="timer-notification">
                                                <h6>Something you love is now on sale!
                                                    <a href="shop-left-sidebar.html" className="text-white">Buy Now
                                                        !</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <ul className="about-list right-nav-about">
                                    <li className="right-nav-list">
                                        <div className="dropdown theme-form-select">
                                            <button className="btn dropdown-toggle" type="button" id="select-language" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={unitedstates} className="img-fluid  lazyload" alt />
                                                <span>English</span>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="select-language">
                                                <li>
                                                    <a className="dropdown-item" href="#" id="english">
                                                        <img src={unitedstates} className="img-fluid  lazyload" alt />
                                                        <span>English</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li className="right-nav-list">
                                        <div className="dropdown theme-form-select">
                                            <button className="btn dropdown-toggle" type="button" id="select-dollar" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span>USD</span>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end sm-dropdown-menu" aria-labelledby="select-dollar">
                                                <li>
                                                    <a className="dropdown-item" id="aud" href="#">AUD</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="top-nav top-header sticky-header">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-12">
                                <div className="navbar-top">
                                    <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                                        <span className="navbar-toggler-icon">
                                            <i className="fa-solid fa-bars" />
                                        </span>
                                    </button>
                                    <a href="index.html" className="web-logo nav-logo">
                                        <img src={logo1} className="img-fluid  lazyload" alt="Fast Cart" />
                                    </a>
                                    <div className="middle-box">
                                        <div className="location-box">
                                            <button className="btn location-button" data-bs-toggle="modal" data-bs-target="#locationModal">
                                                <span className="location-arrow">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                </span>
                                                {/* <span className="locat-name">Your Location</span> */}

                                            </button>
                                        </div>
                                        <div className="search-box">
                                            <div className="input-group">
                                                <input type="search" className="form-control" placeholder="I'm searching for..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                <button className="btn" type="button" id="button-addon2">
                                                    <i className="fa-solid fa-magnifying-glass"></i>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rightside-box">
                                        <div className="search-full">
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i data-feather="search" className="font-light" />
                                                </span>
                                                <input type="text" className="form-control search-type" placeholder="Search here.." />
                                                <span className="input-group-text close-search">
                                                    <i data-feather="x" className="font-light" />
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="right-side-menu">
                                            <li className="right-side">
                                                <div className="delivery-login-box">
                                                    <div className="delivery-icon">
                                                        <div className="search-box">
                                                            <i data-feather="search" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="right-side">
                                                <a href="contact-us.html" className="delivery-login-box">
                                                    <div className="delivery-icon">
                                                        <i className="fa-solid fa-phone-volume"></i>
                                                    </div>
                                                    <div className="delivery-detail">
                                                        <h6>24/7 Delivery</h6>
                                                        <h5>+91 888 104 2340</h5>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="right-side">
                                                <a href="wishlist.html" className="btn p-0 position-relative header-wishlist">
                                                    <i className="fa-thin fa-heart"></i>
                                                </a>
                                            </li>
                                            <li className="right-side">
                                                <div className="onhover-dropdown header-badge">
                                                    <button type="button" className="btn p-0 position-relative header-wishlist">
                                                        <i className="fa-light fa-cart-shopping"></i>
                                                        <span className="position-absolute top-0 start-100 translate-middle badge">2
                                                            <span className="visually-hidden">unread messages</span>
                                                        </span>
                                                    </button>
                                                    <div className="onhover-div">
                                                        <ul className="cart-list">
                                                            <li className="product-box-contain">
                                                                <div className="drop-cart">
                                                                    <a href="product-left-thumbnail.html" className="drop-image">
                                                                        <img src={product1} className=" lazyload" alt />
                                                                    </a>
                                                                    <div className="drop-contain">
                                                                        <a href="product-left-thumbnail.html">
                                                                            <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                                                        </a>
                                                                        <h6><span>1 x</span> $80.58</h6>
                                                                        <button className="close-button close_button">
                                                                            <i className="fa-thin fa-phone-volume"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="product-box-contain">
                                                                <div className="drop-cart">
                                                                    <a href="product-left-thumbnail.html" className="drop-image">
                                                                        {/* <img src={product2} className=" lazyload" alt /> */}
                                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                                    </a>
                                                                    <div className="drop-contain">
                                                                        <a href="product-left-thumbnail.html">
                                                                            <h5>Peanut Butter Bite Premium Butter Cookies 600 g
                                                                            </h5>
                                                                        </a>
                                                                        <h6><span>1 x</span> $25.68</h6>
                                                                        <button className="close-button close_button">
                                                                            <i className="fa-solid fa-xmark" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="price-box">
                                                            <h5>Total :</h5>
                                                            <h4 className="theme-color fw-bold">$106.58</h4>
                                                        </div>
                                                        <div className="button-group">
                                                            <a href="cart.html" className="btn btn-sm cart-button">View Cart</a>
                                                            <a href="checkout.html" className="btn btn-sm cart-button theme-bg-color
                                              text-white">Checkout</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="right-side onhover-dropdown">
                                                <div className="delivery-login-box">
                                                    <div className="delivery-icon">
                                                        <i className="fa-solid fa-user"></i>
                                                    </div>
                                                    <div className="delivery-detail">
                                                        <h6>Hello,</h6>
                                                        <h5>My Account</h5>
                                                    </div>
                                                </div>
                                                <div className="onhover-div onhover-div-login">
                                                    <ul className="user-box-name">
                                                        <li className="product-box-contain">

                                                            <a onClick={loginClick}>Log In</a>
                                                        </li>
                                                        <li className="product-box-contain">
                                                            <a onClick={registrationClick} >Register</a>
                                                        </li>
                                                        <li className="product-box-contain" widht="100px !important">
                                                            <span>  <a onClick={forgotpasswordClick}>Forgot Password </a></span>

                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-nav">
                                <div className="header-nav-left">
                                    <button className="dropdown-category">
                                        <i className="fa-solid fa-list"></i>
                                        <span style={{ "paddingLeft": "10px" }}> All Categories</span>
                                    </button>
                                    <div className="category-dropdown">
                                        <div className="category-title">
                                            <h5>Categories</h5>
                                            <button type="button" className="btn p-0 close-button text-content">
                                                <i className="fa-solid fa-xmark" />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <div className="header-nav-middle">
                                    <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                                        <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                                            <div className="offcanvas-header navbar-shadow">
                                                <h5>Menu</h5>
                                                <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close" />
                                            </div>
                                            <div className="offcanvas-body">
                                                <ul className="navbar-nav">
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" onClick={homeClick} data-bs-toggle="dropdown">
                                                            <i className="fa-thin fa-house-chimney" />Home</a>

                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" onClick={shopClick} data-bs-toggle="dropdown">
                                                            <i className="fa-thin fa-shop" />Shop</a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="shop-category-slider.html">Shop
                                                                    Category Slider</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="shop-category.html">Shop
                                                                    Category Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="shop-banner.html">Shop Banner</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="shop-left-sidebar.html">Shop Left
                                                                    Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="shop-list.html">Shop List</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="shop-right-sidebar.html">Shop
                                                                    Right Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="shop-top-filter.html">Shop Top
                                                                    Filter</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" onClick={productClick} data-bs-toggle="dropdown">Product</a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="product-4-image.html">Product
                                                                    4 Image</a>
                                                            </li>
                                                            <li className="sub-dropdown-hover">
                                                                <a href="#" className="dropdown-item">Product
                                                                    Thumbnail</a>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <a href="product-left-thumbnail.html">Left Thumbnail</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="product-right-thumbnail.html">Right
                                                                            Thumbnail</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="product-bottom-thumbnail.html">Bottom
                                                                            Thumbnail</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="product-bundle.html" className="dropdown-item">Product
                                                                    Bundle</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-slider.html" className="dropdown-item">Product
                                                                    Slider</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-sticky.html" className="dropdown-item">Product
                                                                    Sticky</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown dropdown-mega">
                                                        <a className="nav-link dropdown-toggle ps-xl-2 ps-0" onClick={megamenuClick} data-bs-toggle="dropdown">Mega Menu</a>
                                                        {/* <div className="dropdown-menu dropdown-menu-2">
                                                            <div className="row">
                                                                <div className="dropdown-column col-xl-3">
                                                                    <h5 className="dropdown-header">Daily Vegetables</h5>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Beans
                                                                        &amp; Brinjals</a>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli &amp; Cauliflower</a>
                                                                    <a href="shop-left-sidebar.html" className="dropdown-item">Chilies, Garlic</a>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Vegetables &amp; Salads</a>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Gourd, Cucumber</a>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Herbs
                                                                        &amp; Sprouts</a>
                                                                    <a href="demo-personal-portfolio.html" className="dropdown-item">Lettuce &amp; Leafy</a>
                                                                </div>
                                                                <div className="dropdown-column col-xl-3">
                                                                    <h5 className="dropdown-header">Baby Tender</h5>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Beans
                                                                        &amp; Brinjals</a>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli &amp; Cauliflower</a>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Chilies, Garlic</a>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Vegetables &amp; Salads</a>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Gourd, Cucumber</a>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Potatoes &amp; Tomatoes</a>
                                                                    <a href="shop-left-sidebar.html" className="dropdown-item">Peas
                                                                        &amp; Corn</a>
                                                                </div>
                                                                <div className="dropdown-column col-xl-3">
                                                                    <h5 className="dropdown-header">Exotic Vegetables</h5>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Asparagus &amp; Artichokes</a>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Avocados &amp; Peppers</a>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli &amp; Zucchini</a>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Celery, Fennel &amp; Leeks</a>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Chilies &amp; Lime</a>
                                                                </div>
                                                                <div className="dropdown-column dropdown-column-img col-3" />
                                                            </div>
                                                        </div> */}
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" onClick={blogsClick} data-bs-toggle="dropdown">Blog</a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="blog-detail.html">Blog Detail</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="blog-grid.html">Blog Grid</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="blog-list.html">Blog List</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown new-nav-item">
                                                        <label className="new-dropdown">New</label>
                                                        <a className="nav-link dropdown-toggle" onClick={pagesClick} data-bs-toggle="dropdown">Pages</a>
                                                        {/* <ul className="dropdown-menu">
                                                            <li className="sub-dropdown-hover">
                                                                <a className="dropdown-item" href="#">Email
                                                                    Template <span className="new-text"><i className="fa-solid fa-bolt-lightning" /></span></a>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/email-templete/abandonment-email.html">Abandonment</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/email-templete/offer-template.html">Offer
                                                                            Template</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/email-templete/order-success.html">Order
                                                                            Success</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/email-templete/reset-password.html">Reset
                                                                            Password</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/email-templete/welcome.html">Welcome
                                                                            template</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="sub-dropdown-hover">
                                                                <a className="dropdown-item" href="#">Invoice
                                                                    Template <span className="new-text"><i className="fa-solid fa-bolt-lightning" /></span></a>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/invoice/invoice-1.html">Invoice 1</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/invoice/invoice-2.html">Invoice 2</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/invoice/invoice-3.html">Invoice 3</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="404.html">404</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="about-us.html">About Us</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="cart.html">Cart</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="contact-us.html">Contact</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="checkout.html">Checkout</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="compare.html">Compare</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="faq.html">Faq</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="order-success.html">Order
                                                                    Success</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="order-tracking.html">Order
                                                                    Tracking</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="otp.html">OTP</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="search.html">Search</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="user-dashboard.html">User
                                                                    Dashboard</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                                                            </li>
                                                        </ul> */}
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" onClick={sellerClick} data-bs-toggle="dropdown">Seller</a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="seller-become.html">Become a
                                                                    Seller</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="seller-dashboard.html">Seller
                                                                    Dashboard</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="seller-detail.html">Seller
                                                                    Detail</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="seller-detail-2.html">Seller
                                                                    Detail 2</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="seller-grid.html">Seller Grid</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="seller-grid-2.html">Seller Grid
                                                                    2</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-nav-right">
                                    <button className="btn deal-button" data-bs-toggle="modal" data-bs-target="#deal-box">
                                        <i className="fa-thin fa-bolt"></i>
                                        <span>Deal Today</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Header End --> */}





            {/* <!-- mobile fix menu start --> */}
            {/* <div className="mobile-menu d-md-none d-block mobile-cart">
                <ul>
                    <li className="active">
                        <a href="index.html">
                        <i className="fa-solid fa-house-blank"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="mobile-category">
                        <a href="#">
                            <i className="iconly-Category icli js-link" />
                            <span>Category</span>
                        </a>
                    </li>
                    <li>
                        <a href="search.html" className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                            <span>Search</span>
                        </a>
                    </li>
                    <li>
                        <a href="wishlist.html" className="notifi-wishlist">
                            <i className="iconly-Heart icli" />
                            <span>My Wish</span>
                        </a>
                    </li>
                    <li>
                        <a href="cart.html">
                        <i className="fa-solid fa-house-blank"></i>
                            <span>Cart</span>
                        </a>
                    </li>
                </ul>
            </div> */}
            {/* mobile fix menu end */}


        </>
    )
}

export default Header