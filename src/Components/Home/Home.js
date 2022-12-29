import React from 'react'
import banner1 from '../../assets/images/vegetable/banner/1.jpg'
import banner2 from '../../assets/images/vegetable/banner/2.jpg'
import banner3 from '../../assets/images/vegetable/banner/3.jpg'
import banner4 from '../../assets/images/vegetable/banner/4.jpg'
import banner5 from '../../assets/images/vegetable/banner/5.jpg'
// import banner6 from '../../assets/images/vegetable/banner/6.jpg' 
import banner7 from '../../assets/images/vegetable/banner/7.jpg'
import banner8 from '../../assets/images/vegetable/banner/8.jpg'




function Home() {
    return (
        <>

            <div>
                {/* Home Section Start */}
                <section className="home-section pt-2">
                    <div className="container-fluid-lg">
                        <div className="row g-4">
                            <div className="col-xl-8 ratio_65">
                                <div className="home-contain h-100">
                                    <div className="h-100">
                                        <img src={banner1} className="bg-img blur-up lazyload" alt />
                                    </div>
                                    <div className="home-detail p-center-left w-75">
                                        <div>
                                            <h6>Exclusive offer <span>30% Off</span></h6>
                                            <h1 className="text-uppercase">Stay home &amp; delivered your <span className="daily">Daily
                                                Needs</span></h1>
                                            <p className="w-75 d-none d-sm-block">Vegetables contain many vitamins and minerals that are
                                                good for your health.</p>
                                            <button onclick="location.href = 'shop-left-sidebar.html';" className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto">Shop Now <i className="fa-solid fa-right-long icon" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 ratio_65">
                                <div className="row g-4">
                                    <div className="col-xl-12 col-md-6">
                                        <div className="home-contain">
                                            <img src={banner2} className="bg-img blur-up lazyload" alt />
                                            <div className="home-detail p-center-left home-p-sm w-75">
                                                <div>
                                                    <h2 className="mt-0 text-danger">45% <span className="discount text-title">OFF</span>
                                                    </h2>
                                                    <h3 className="theme-color">Nut Collection</h3>
                                                    <p className="w-75">We deliver organic vegetables &amp; fruits</p>
                                                    <a href="shop-left-sidebar.html" className="shop-button">Shop Now <i className="fa-solid fa-right-long" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-md-6">
                                        <div className="home-contain">
                                            <img src={banner3} className="bg-img blur-up lazyload" alt />
                                            <div className="home-detail p-center-left home-p-sm w-75">
                                                <div>
                                                    <h3 className="mt-0 theme-color fw-bold">Healthy Food</h3>
                                                    <h4 className="text-danger">Organic Market</h4>
                                                    <p className="organic">Start your daily shopping with some Organic food</p>
                                                    <a href="shop-left-sidebar.html" className="shop-button">Shop Now <i className="fa-solid fa-right-long" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Home Section End */}
                {/* Banner Section Start */}
                <section className="banner-section ratio_60 wow fadeInUp">
                    <div className="container-fluid-lg">
                        <div className="banner-slider">
                            <div>
                                <div className="banner-contain hover-effect">
                                    <img src={banner4} className="bg-img blur-up lazyload" alt />
                                    <div className="banner-details">
                                        <div className="banner-box">
                                            <h6 className="text-danger">5% OFF</h6>
                                            <h5>Hot Deals on New Items</h5>
                                            <h6 className="text-content">Daily Essentials Eggs &amp; Dairy</h6>
                                        </div>
                                        <a href="shop-left-sidebar.html" className="banner-button text-white">Shop Now <i className="fa-solid fa-right-long ms-2" /></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="banner-contain hover-effect">
                                    <img src={banner5} className="bg-img blur-up lazyload" alt />
                                    <div className="banner-details">
                                        <div className="banner-box">
                                            <h6 className="text-danger">5% OFF</h6>
                                            <h5>Buy More &amp; Save More</h5>
                                            <h6 className="text-content">Fresh Vegetables</h6>
                                        </div>
                                        <a href="shop-left-sidebar.html" className="banner-button text-white">Shop Now <i className="fa-solid fa-right-long ms-2" /></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="banner-contain hover-effect">
                                    <img src={banner7} className="bg-img blur-up lazyload" alt />
                                    <div className="banner-details">
                                        <div className="banner-box">
                                            <h6 className="text-danger">5% OFF</h6>
                                            <h5>Organic Meat Prepared</h5>
                                            <h6 className="text-content">Delivered to Your Home</h6>
                                        </div>
                                        <a href="shop-left-sidebar.html" className="banner-button text-white">Shop Now <i className="fa-solid fa-right-long ms-2" /></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="banner-contain hover-effect">
                                    <img src={banner8} className="bg-img blur-up lazyload" alt />
                                    <div className="banner-details">
                                        <div className="banner-box">
                                            <h6 className="text-danger">5% OFF</h6>
                                            <h5>Buy More &amp; Save More</h5>
                                            <h6 className="text-content">Nuts &amp; Snacks</h6>
                                        </div>
                                        <a href="shop-left-sidebar.html" className="banner-button text-white">Shop Now <i className="fa-solid fa-right-long ms-2" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Banner Section End */}
            </div>



        </>
    )
}

export default Home