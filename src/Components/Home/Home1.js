import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import banner1 from '../../assets/images/vegetable/banner/1.jpg'
import banner2 from '../../assets/images/vegetable/banner/2.jpg'
import banner3 from '../../assets/images/vegetable/banner/3.jpg'
// import banner4 from '../../assets/images/vegetable/banner/4.jpg'
// import banner5 from '../../assets/images/vegetable/banner/5.jpg'
// import banner6 from '../../assets/images/vegetable/banner/6.jpg'
// import banner7 from '../../assets/images/vegetable/banner/7.jpg'

import veg1 from '../../assets/images/veg-3/banner/1.png'

import home1 from '../../assets/images/veg-3/home/1.png'
import home2 from '../../assets/images/veg-3/home/2.png'
import home3 from '../../assets/images/veg-3/home/3.png'
import home4 from '../../assets/images/veg-3/home/4.png'
// import home5 from '../../assets/images/veg-3/home/5.png'

import category1 from '../../assets/images/veg-3/category/1.png'
import category2 from '../../assets/images/veg-3/category/2.png'
import category3 from '../../assets/images/veg-3/category/3.png'
import category4 from '../../assets/images/veg-3/category/4.png'
import category5 from '../../assets/images/veg-3/category/5.png'
import category6 from '../../assets/images/veg-3/category/6.png'
import category7 from '../../assets/images/veg-3/category/7.png'
import category8 from '../../assets/images/veg-3/category/8.png'

import value1 from '../../assets/images/veg-3/value/1.png'
import value2 from '../../assets/images/veg-3/value/2.png'
import value3 from '../../assets/images/veg-3/value/3.png'

import cate1 from '../../assets/images/veg-3/cate1/1.png'
import cate2 from '../../assets/images/veg-3/cate1/2.png'
import cate3 from '../../assets/images/veg-3/cate1/3.png'
import cate4 from '../../assets/images/veg-3/cate1/4.png'
import cate5 from '../../assets/images/veg-3/cate1/5.png'
import cate6 from '../../assets/images/veg-3/cate1/6.png'
import cate7 from '../../assets/images/veg-3/cate1/7.png'
import cate8 from '../../assets/images/veg-3/cate1/8.png'
import cate9 from '../../assets/images/veg-3/cate1/9.png'
import cate12 from '../../assets/images/veg-3/cate1/12.png'
import cate13 from '../../assets/images/veg-3/cate1/13.png'
import cate10 from '../../assets/images/veg-3/cate1/10.png'
import cate14 from '../../assets/images/veg-3/cate1/14.png'
import cate15 from '../../assets/images/veg-3/cate1/15.png'
import cate11 from '../../assets/images/veg-3/cate1/11.png'

import basket1 from '../../assets/images/veg-3/shape/basket.png'

import background1 from '../../assets/images/veg-3/shape/background.png'

import blog1 from '../../assets/images/veg-3/blog/1.jpg'
import blog2 from '../../assets/images/veg-3/blog/2.jpg'
import blog3 from '../../assets/images/veg-3/blog/3.jpg'

import pro1 from '../../assets/images/veg-3/pro1/1.png'
import pro2 from '../../assets/images/veg-3/pro1/2.png'
import pro3 from '../../assets/images/veg-3/pro1/3.png'
import pro4 from '../../assets/images/veg-3/pro1/4.png'
import pro5 from '../../assets/images/veg-3/pro1/5.png'
import pro6 from '../../assets/images/veg-3/pro1/6.png'
import pro7 from '../../assets/images/veg-3/pro1/7.png'
import pro8 from '../../assets/images/veg-3/pro1/8.png'
import pro9 from '../../assets/images/veg-3/pro1/9.png'
import pro10 from '../../assets/images/veg-3/pro1/10.png'
import pro11 from '../../assets/images/veg-3/pro1/11.png'
import pro12 from '../../assets/images/veg-3/pro1/12.png'


function Home1() {

  // script.src = "../../assets/js/slick/custom_slick.js";




  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    dots: false,
    useCSS: true

  };

  const settings1 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    dots: false,
    useCSS: true

  };
  const settings2 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    dots: false,
    useCSS: true

  };

  const settings3 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    dots: false,
    slidesPerRow: 1,
    useCSS: true
  };
  const settings4 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    dots: false,
    slidesPerRow: 1
  };




  return (
    <>

      <div>
        {/* home section start */}
        <section className="home-section-2 home-section-small section-b-space">
          <div className="container-fluid-lg">
            <div className="row g-4">
              <div className="col-xxl-6 col-md-8">
                <div className="home-contain h-100">
                  <img src={home1} className="img-fluid bg-img  lazyload" alt />
                  <div className="home-detail home-width p-center-left position-relative">
                    <div>
                      <h6 className="ls-expanded theme-color">ORGANIC</h6>
                      <h1 className="fw-bold w-100">100% Fresh</h1>
                      <h3 className="text-content fw-light">Fruit &amp; Vegetables</h3>
                      <p className="d-sm-block d-none">Free shipping on all your order. we deliver you enjoy</p>
                      <button onclick="location.href = 'shop-left-sidebar.html';" className="btn mt-sm-4 btn-2 theme-bg-color text-white mend-auto btn-2-animation">Shop
                        Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-4 ratio_medium d-md-block d-none">
                <div className="home-contain home-small h-100">
                  <div className="h-100">
                    <img src={home2} className="img-fluid bg-img  lazyload" alt />
                  </div>
                  <div className="home-detail text-center p-top-center w-100 text-white">
                    <div>
                      <h4 className="fw-bold">Fresh &amp; 100% Organic</h4>
                      <h5 className="text-center">famer's market</h5>
                      <button className="btn bg-white theme-color mt-3 home-button mx-auto btn-2" onclick="location.href = 'shop-left-sidebar.html';">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 ratio_65 d-xxl-block d-none">
                <div className="row g-3">
                  <div className="col-xxl-12 col-sm-6">
                    <div className="home-contain">
                      <a href="shop-left-sidebar.html">
                        <img src={home3} className="img-fluid bg-img  lazyload" alt />
                      </a>
                      <div className="home-detail text-white p-center text-center">
                        <div>
                          <h4 className="text-center">Organic Lifestyle</h4>
                          <h5 className="text-center">Best Weekend Sales</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-12 col-sm-6">
                    <div className="home-contain">
                      <a href="shop-left-sidebar.html">
                        <img src={home4} className="img-fluid bg-img  lazyload" alt />
                      </a>
                      <div className="home-detail text-white w-50 p-center-left home-p-sm">
                        <div>
                          <h4 className="fw-bold">Safe food saves lives</h4>
                          <h5>Discount Offer</h5>
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
        {/* ---------------------------------------------------------------------------------------------------- */}







        {/* Category Section Start */}
        <section className="category-section-2">
          <div className="container-fluid-lg">
            <div className="title">



              <h2>Shop By Categories</h2>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="category-slider arrow-slider">
                  <Slider {...settings}>
                    <div>
                      <div className="shop-category-box border-0 wow fadeIn">
                        <a href="shop-left-sidebar.html" className="circle-1">
                          <img src={category1} className="img-fluid  lazyload" alt />
                        </a>
                        <div className="category-name">
                          <h6>Oils, Rofined &amp; Ghee</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="shop-category-box border-0 wow fadeIn" data-wow-delay="0.05s">
                        <a href="shop-left-sidebar.html" className="circle-2">
                          <img src={category2} className="img-fluid  lazyload" alt />
                        </a>
                        <div className="category-name">
                          <h6>Rice, Flour &amp; Grains</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="shop-category-box border-0 wow fadeIn" data-wow-delay="0.1s">
                        <a href="shop-left-sidebar.html" className="circle-3">
                          <img src={category3} className="img-fluid  lazyload" alt />
                        </a>
                        <div className="category-name">
                          <h6>Food Cupboard</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="shop-category-box border-0 wow fadeIn" data-wow-delay="0.15s">
                        <a href="shop-left-sidebar.html" className="circle-4">
                          <img src={category4} className="img-fluid  lazyload" alt />
                        </a>
                        <div className="category-name">
                          <h6>Dals &amp; Pulses</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="shop-category-box border-0 wow fadeIn" data-wow-delay="0.2s">
                        <a href="shop-left-sidebar.html" className="circle-4">
                          <img src={category5} className="img-fluid  lazyload" alt />
                        </a>
                        <div className="category-name">
                          <h6>Drinks &amp; Beverages</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="shop-category-box border-0 wow fadeIn" data-wow-delay="0.25s">
                        <a href="shop-left-sidebar.html" className="circle-1">
                          <img src={category6} className="img-fluid  lazyload" alt />
                        </a>
                        <div className="category-name">
                          <h6>Fresh Fruits &amp; Vegetables</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="shop-category-box border-0 wow fadeIn" data-wow-delay="0.3s">
                        <a href="shop-left-sidebar.html" className="circle-2">
                          <img src={category7} className="img-fluid  lazyload" alt />
                        </a>
                        <div className="category-name">
                          <h6>Ready to eat Meals</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="shop-category-box border-0 wow fadeIn" data-wow-delay="0.35s">
                        <a href="shop-left-sidebar.html" className="circle-3">
                          <img src={category8} className="img-fluid  lazyload" alt />
                        </a>
                        <div className="category-name">
                          <h6>Instant Mixes</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="shop-category-box border-0 wow fadeIn" data-wow-delay="0.4s">
                        <a href="shop-left-sidebar.html" className="circle-4">
                          <img src={category2} className="img-fluid  lazyload" alt />
                        </a>
                        <div className="category-name">
                          <h6>Rice, Flour &amp; Grains</h6>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Category Section End */}
        {/* Value Section Start */}
        <section>
          <div className="container-fluid-lg">
            <div className="title">
              <h2>Best Value</h2>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="three-slider arrow-slider ratio_65">
                  <Slider {...settings1}>
                    <div>
                      <div className="offer-banner hover-effect">
                        <img src={value1} className="img-fluid bg-img  lazyload" alt />
                        <div className="banner-detail">
                          <h5 className="theme-color">Buy more, Save more</h5>
                          <h6>Fresh Vegetable</h6>
                        </div>
                        <div className="offer-box">
                          <button onclick="location.href = 'shop-left-sidebar.html';" className="btn-category btn theme-bg-color text-white">View Offer</button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="offer-banner hover-effect">
                        <img src={value2} className="img-fluid bg-img  lazyload" alt />
                        <div className="banner-detail">
                          <h5 className="theme-color">Save More!</h5>
                          <h6>Organic Vegetable</h6>
                        </div>
                        <div className="offer-box">
                          <button onclick="location.href = 'shop-left-sidebar.html';" className="btn-category btn theme-bg-color text-white">View Offer</button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="offer-banner hover-effect">
                        <img src={value3} className="img-fluid bg-img  lazyload" alt />
                        <div className="banner-detail">
                          <h5 className="theme-color">Hot Deals!</h5>
                          <h6>Fruita &amp; Vagerables</h6>
                        </div>
                        <div className="offer-box">
                          <button onclick="location.href = 'shop-left-sidebar.html';" className="btn-category btn theme-bg-color text-white">View Offer</button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="offer-banner hover-effect">
                        <img src={value1} className="img-fluid bg-img  lazyload" alt />
                        <div className="banner-detail">
                          <h5 className="theme-color">Buy more, Save more</h5>
                          <h6>Fruita &amp; Vagerables</h6>
                        </div>
                        <div className="offer-box">
                          <button onclick="location.href = 'shop-left-sidebar.html';" className="btn-category btn theme-bg-color text-white">View
                            Offer</button>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Value Section End */}
        {/* Deal Section Start */}
        <section className="deal-section">
          <div className="container-fluid-lg">
            <div className="title">
              <h2>Deal Of The Day</h2>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="three-slider-1 arrow-slider">
                  <Slider {...settings2}>
                    <div>
                      <div className="deal-box wow fadeInUp">
                        <a href="shop-left-sidebar.html" className="category-image order-sm-2">
                          <img src={cate1} className="img-fluid  lazyload" alt />
                        </a>
                        <div className="deal-detail order-sm-1">
                          <button className="buy-box btn theme-bg-color text-white btn-cart">
                            <i class="fa-light fa-cart-shopping"></i>
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <li>
                              <i class="fa-sharp fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i class="fa-sharp fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i class="fa-sharp fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i class="fa-sharp fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i class="fa-sharp fa-solid fa-star"></i>
                            </li>
                          </ul>
                          <a href="shop-left-sidebar.html" className="text-title">
                            <h5>Bell pepper</h5>
                          </a>
                          <h5 className="price">$70.21 <span>$65.00</span></h5>
                          <div className="progress custom-progressbar">
                            <div className="progress-bar" style={{ width: '50%' }} role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <h4 className="item">Sold: <span>30 Items</span></h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div className="timer" id="clockdiv-4" data-hours={1} data-minutes={2} data-seconds={3}>
                            <ul>
                              <li>
                                <div className="counter">
                                  <div className="days">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="hours">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="minutes">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="deal-box wow fadeInUp" data-wow-delay="0.05s">
                        <a href="shop-left-sidebar.html" className="category-image order-sm-2">
                          <img src={cate2} className="img-fluid  lazyload" alt />
                        </a>
                        <div className="deal-detail order-sm-1">
                          <button className="buy-box btn theme-bg-color text-white btn-cart">
                            <i class="fa-light fa-cart-shopping"></i>
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                          </ul>
                          <a href="shop-left-sidebar.html" className="text-title">
                            <h5>Eggplant</h5>
                          </a>
                          <h5 className="price">$70.21 <span>$65.00</span></h5>
                          <div className="progress custom-progressbar">
                            <div className="progress-bar" style={{ width: '50%' }} role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <h4 className="item">Sold: <span>30 Items</span></h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div className="timer" id="clockdiv-1" data-hours={1} data-minutes={2} data-seconds={3}>
                            <ul>
                              <li>
                                <div className="counter">
                                  <div className="days">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="hours">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="minutes">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="deal-box wow fadeInUp" data-wow-delay="0.1s">
                        <a href="shop-left-sidebar.html" className="category-image order-sm-2">
                          <img src={cate3} className="img-fluid  lazyload" alt />
                        </a>
                        <div className="deal-detail order-sm-1">
                          <button className="buy-box btn theme-bg-color text-white btn-cart">
                            <i class="fa-light fa-cart-shopping"></i>
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                          </ul>
                          <a href="shop-left-sidebar.html" className="text-title">
                            <h5>Onion</h5>
                          </a>
                          <h5 className="price">$70.21 <span>$65.00</span></h5>
                          <div className="progress custom-progressbar">
                            <div className="progress-bar" style={{ width: '50%' }} role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <h4 className="item">Sold: <span>30 Items</span></h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div className="timer" id="clockdiv-2" data-hours={1} data-minutes={2} data-seconds={3}>
                            <ul>
                              <li>
                                <div className="counter">
                                  <div className="days">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="hours">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="minutes">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="deal-box wow fadeInUp" data-wow-delay="0.15s">
                        <div className="category-image order-sm-2">
                          <img src={cate1} className="img-fluid" alt />
                        </div>
                        <div className="deal-detail order-sm-1">
                          <button className="buy-box btn theme-bg-color text-white btn-cart">
                            <i class="fa-light fa-cart-shopping"></i>
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                          </ul>
                          <a href="shop-left-sidebar.html" className="text-title">
                            <h5>Bell pepper</h5>
                          </a>
                          <h5 className="price">$70.21 <span>$65.00</span></h5>
                          <div className="progress custom-progressbar">
                            <div className="progress-bar" style={{ width: '50%' }} role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <h4 className="item">Sold: <span>30 Items</span></h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div className="timer" id="clockdiv-3" data-hours={1} data-minutes={2} data-seconds={3}>
                            <ul>
                              <li>
                                <div className="counter">
                                  <div className="days">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="hours">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="minutes">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Deal Section End */}
        {/* Product Sction Start */}
        <section className="product-section">
          <div className="container-fluid-lg">
            <div className="title title-flex-2">
              <h2>Our Products</h2>
              <ul className="nav nav-tabs tab-style-color-2 tab-style-color" id="myTab">
                <li className="nav-item">
                  <button className="nav-link btn active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button">All</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" id="cooking-tab" data-bs-toggle="tab" data-bs-target="#cooking" type="button"> Cooking</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" id="fruits-tab" data-bs-toggle="tab" data-bs-target="#fruits" type="button">Fruits &amp; Vegetables</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" id="beverage-tab" data-bs-toggle="tab" data-bs-target="#beverage" type="button">Beverage</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" id="dairy-tab" data-bs-toggle="tab" data-bs-target="#dairy" type="button">Dairy</button>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                <div className="row g-8">
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate1} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Bell pepper</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.05s">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate3} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Potato</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <div className="discount">
                            <label>50%</label>
                          </div>
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate5} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Baby Chili</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.15s">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate6} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Broccoli</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <div className="discount">
                            <label>-25%</label>
                          </div>
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate7} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Peru</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.25s">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate9} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Avacado</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate7} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Cucumber</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.35s">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <div className="discount">
                            <label>-25%</label>
                          </div>
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate12} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Beetroot</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate13} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Strawberry</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.45s">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate1} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Corn</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <div className="discount">
                            <label>50%</label>
                          </div>
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate3} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Cabbage</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.55s">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <div className="discount">
                            <label>-25%</label>
                          </div>
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate4} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Ginger</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="cooking" role="tabpanel" aria-labelledby="cooking-tab">
                <div className="row g-8">
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate1} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Eggplant</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate1} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Eggplant</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate3} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Onion</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate2} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Potato</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate5} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Baby Chili</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate6} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Broccoli</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate6} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Pea</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate7} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Cucumber</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate3} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Cabbage</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate4} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Ginger</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="fruits" role="tabpanel" aria-labelledby="fruits-tab">
                <div className="row g-8">
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate7} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Apple</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate6} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Passion</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate6} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Blackberry</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate7} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Peru</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate9} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Apple</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate13} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Strawberry</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate12} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Bell pepper</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="beverage" role="tabpanel" aria-labelledby="beverage-tab">
                <div className="row g-8">
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate1} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Eggplant</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate1} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Eggplant</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate3} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Onion</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate2} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Potato</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate5} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Baby Chili</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate6} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Broccoli</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate6} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Pea</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate7} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Cucumber</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate3} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Cabbage</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate4} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Ginger</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="dairy" role="tabpanel" aria-labelledby="dairy-tab">
                <div className="row g-8">
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate1} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Eggplant</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate1} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Eggplant</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate3} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Onion</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate2} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Potato</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate5} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Baby Chili</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate6} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Broccoli</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate6} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Pea</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate7} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Cucumber</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate3} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Cabbage</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                    <div className="product-box-4">
                      <div className="product-image">
                        <div className="label-flex">
                          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                            <i class="fa-thin fa-heart"></i>
                          </button>
                        </div>
                        <a href="product-left-thumbnail.html">
                          <img src={cate4} className="img-fluid" alt />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                            <i class="fa-solid fa-eye"></i>

                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                            <i class="fa-solid fa-right-left"></i>

                          </li>
                        </ul>
                      </div>
                      <div className="product-detail">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">Ginger</h5>
                        </a>
                        <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                        <div className="price-qty">
                          <div className="counter-number">
                            <div className="counter">
                              <div className="qty-left-minus" data-type="minus" data-field>
                                <i className="fa-solid fa-minus" />
                              </div>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <div className="qty-right-plus" data-type="plus" data-field>
                                <i className="fa-solid fa-plus" />
                              </div>
                            </div>
                          </div>
                          <button className="buy-button buy-button-2 btn btn-cart">
                            <i className="fa-light fa-cart-shopping text-white m-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Product Sction End */}
        {/* Banner Section Start */}
        <section className="banner-section">
          <div className="container-fluid-lg">
            <div className="row gy-xl-0 gy-3">
              <div className="col-xl-6">
                <div className="banner-contain-3 hover-effect" style={{ "backgroundImage": "url('../../assets/images/veg-3/banner/1.png')","backgroundSize":"cover","backgroundPosition":"center","backgroundRepeat":"no-repeat","display":"block"}}>
       
                  <img src={veg1} className="bg-img img-fluid" alt />
                  <div className="banner-detail banner-details-dark text-white p-center-left w-50 position-relative mend-auto">
                    <div>
                      <h6 className="ls-expanded text-uppercase">Premium</h6>
                      <h3 className="mb-sm-3 mb-1">Fresh Vegetable &amp; Daily Eating</h3>
                      <h4>Get Extra 50% Off</h4>
                      <button className="btn theme-color bg-white btn-md fw-bold mt-sm-3 mt-1 mend-auto" onclick="location.href = 'shop-left-sidebar.html';">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="banner-contain-3 hover-effect">
                  <img src={banner2} className="bg-img img-fluid" alt />
                  <div className="banner-detail text-dark p-center-left w-50 position-relative mend-auto">
                    <div>
                      <h6 className=" ls-expanded text-uppercase">available</h6>
                      <h3 className="mb-sm-3 mb-1">100% Natural &amp; Healthy Fruits</h3>
                      <h4 className="text-content">Weekend Special</h4>
                      <button className="btn theme-bg-color text-white btn-md fw-bold mt-sm-3 mt-1 mend-auto" onclick="location.href = 'shop-left-sidebar.html';">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner Section End */}
        {/* Product Section Start */}
        <section className="product-section-2">
          <div className="container-fluid-lg">
            <div className="row gy-sm-5 gy-4">
              <div className="col-xxl-3 col-md-6">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="title title-border d-block">
                      <h3>NEW PRODUCTS</h3>
                    </div>

                    <div className="product-category-1 arrow-slider-2">

                      <div>
                        <div className="row gy-sm-4 gy-3">
                          <Slider {...settings3}>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro1} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Tomato</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro2} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Red onion</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro3} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Carrot</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro3} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Carrot</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Slider >
                        </div>
                      </div>
                      <div>
                        <div className="row gy-sm-4 gy-3">
                          <Slider {...settings3}>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro4} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Potato</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro5} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Broccoli</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro6} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Carrot</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro6} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Carrot</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Slider>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="title title-border d-block">
                      <h3>FEATURE PRODUCT</h3>
                    </div>
                    <div className="product-category-1 arrow-slider-2">
                      <div>
                        <div className="row gy-sm-4 gy-3">
                          <Slider {...settings3}>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro1} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Tomato</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro2} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Red onion</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro3} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Carrot</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro3} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                    <li>
                                      <i data-feather="star" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Carrot</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Slider >
                        </div>
                      </div>
                      <div>
                        <div className="row gy-sm-4 gy-3">
                          <Slider {...settings3}>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro4} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Potato</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro5} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Broccoli</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro6} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Carrot</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                <a href="shop-left-sidebar.html" className="product-image">
                                  <img src={pro6} className="img-fluid" alt />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                    <li>
                                      <i data-feather="star" className="fill" />
                                    </li>
                                  </ul>
                                  <a href="product-left-thumbnail.html">
                                    <h4 className="name">Carrot</h4>
                                  </a>
                                  <h5 className="price">$75.20<del>$65.21</del></h5>
                                  <ul className="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                      <a href="cart.html">
                                        <i className="fa-light fa-cart-shopping" />
                                      </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                      <i class="fa-solid fa-eye"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                      <i class="fa-thin fa-heart"></i>

                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                      <i class="fa-solid fa-right-left"></i>

                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Slider>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="title title-border d-block">
                      <h3>BEST SELLER</h3>
                    </div>
                    <div className="product-category-1 arrow-slider-2">
                      <div>
                        <div className="row gy-sm-4 gy-3">
                          <div className="col-12">
                            <div className="product-box-4 wow fadeInUp">
                              <a href="shop-left-sidebar.html" className="product-image">
                                <img src={pro1} className="img-fluid" alt />
                              </a>
                              <div className="product-details">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <a href="product-left-thumbnail.html">
                                  <h4 className="name">Tomato</h4>
                                </a>
                                <h5 className="price">$75.20<del>$65.21</del></h5>
                                <ul className="option">
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                    <a href="cart.html">
                                      <i className="fa-light fa-cart-shopping" />
                                    </a>
                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                    <i class="fa-solid fa-eye"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                    <i class="fa-thin fa-heart"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                    <i class="fa-solid fa-right-left"></i>

                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                              <a href="shop-left-sidebar.html" className="product-image">
                                <img src={pro2} className="img-fluid" alt />
                              </a>
                              <div className="product-details">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <a href="product-left-thumbnail.html">
                                  <h4 className="name">Red onion</h4>
                                </a>
                                <h5 className="price">$75.20<del>$65.21</del></h5>
                                <ul className="option">
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                    <a href="cart.html">
                                      <i className="fa-light fa-cart-shopping" />
                                    </a>
                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                    <i class="fa-solid fa-eye"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                    <i class="fa-thin fa-heart"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                    <i class="fa-solid fa-right-left"></i>

                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                              <a href="shop-left-sidebar.html" className="product-image">
                                <img src={pro3} className="img-fluid" alt />
                              </a>
                              <div className="product-details">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <a href="product-left-thumbnail.html">
                                  <h4 className="name">Carrot</h4>
                                </a>
                                <h5 className="price">$75.20<del>$65.21</del></h5>
                                <ul className="option">
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                    <a href="cart.html">
                                      <i className="fa-light fa-cart-shopping" />
                                    </a>
                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                    <i class="fa-solid fa-eye"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                    <i class="fa-thin fa-heart"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                    <i class="fa-solid fa-right-left"></i>

                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="row gy-sm-4 gy-3">
                          <div className="col-12">
                            <div className="product-box-4 wow fadeInUp">
                              <a href="shop-left-sidebar.html" className="product-image">
                                <img src={pro4} className="img-fluid" alt />
                              </a>
                              <div className="product-details">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                </ul>
                                <a href="product-left-thumbnail.html">
                                  <h4 className="name">Potato</h4>
                                </a>
                                <h5 className="price">$75.20<del>$65.21</del></h5>
                                <ul className="option">
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                    <a href="cart.html">
                                      <i className="fa-light fa-cart-shopping" />
                                    </a>
                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                    <i class="fa-solid fa-eye"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                    <i class="fa-thin fa-heart"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                    <i class="fa-solid fa-right-left"></i>

                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                              <a href="shop-left-sidebar.html" className="product-image">
                                <img src={pro5} className="img-fluid" alt />
                              </a>
                              <div className="product-details">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                </ul>
                                <a href="product-left-thumbnail.html">
                                  <h4 className="name">Broccoli</h4>
                                </a>
                                <h5 className="price">$75.20<del>$65.21</del></h5>
                                <ul className="option">
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                    <a href="cart.html">
                                      <i className="fa-light fa-cart-shopping" />
                                    </a>
                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                    <i class="fa-solid fa-eye"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                    <i class="fa-thin fa-heart"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                    <i class="fa-solid fa-right-left"></i>

                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                              <a href="shop-left-sidebar.html" className="product-image">
                                <img src={pro6} className="img-fluid" alt />
                              </a>
                              <div className="product-details">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                </ul>
                                <a href="product-left-thumbnail.html">
                                  <h4 className="name">Carrot</h4>
                                </a>
                                <h5 className="price">$75.20<del>$65.21</del></h5>
                                <ul className="option">
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                    <a href="cart.html">
                                      <i className="fa-light fa-cart-shopping" />
                                    </a>
                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                    <i class="fa-solid fa-eye"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                    <i class="fa-thin fa-heart"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                    <i class="fa-solid fa-right-left"></i>

                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="title title-border d-block">
                      <h3>ON SELL</h3>
                    </div>
                    <div className="product-category-1 arrow-slider-2">
                      <div>
                        <div className="row gy-sm-4 gy-3">
                          <div className="col-12">
                            <div className="product-box-4 wow fadeInUp">
                              <a href="shop-left-sidebar.html" className="product-image">
                                <img src={pro7} className="img-fluid" alt />
                              </a>
                              <div className="product-details">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <a href="product-left-thumbnail.html">
                                  <h4 className="name">Garlic</h4>
                                </a>
                                <h5 className="price">$75.20<del>$65.21</del></h5>
                                <ul className="option">
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                    <a href="cart.html">
                                      <i className="fa-light fa-cart-shopping" />
                                    </a>
                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                    <i class="fa-solid fa-eye"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                    <i class="fa-thin fa-heart"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                    <i class="fa-solid fa-right-left"></i>

                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                              <a href="shop-left-sidebar.html" className="product-image">
                                <img src={pro8} className="img-fluid" alt />
                              </a>
                              <div className="product-details">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <a href="product-left-thumbnail.html">
                                  <h4 className="name">Beetroot</h4>
                                </a>
                                <h5 className="price">$75.20<del>$65.21</del></h5>
                                <ul className="option">
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                    <a href="cart.html">
                                      <i className="fa-light fa-cart-shopping" />
                                    </a>
                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                    <i class="fa-solid fa-eye"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                    <i class="fa-thin fa-heart"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                    <i class="fa-solid fa-right-left"></i>

                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                              <a href="shop-left-sidebar.html" className="product-image">
                                <img src={pro9} className="img-fluid" alt />
                              </a>
                              <div className="product-details">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <a href="product-left-thumbnail.html">
                                  <h4 className="name">Eggplant</h4>
                                </a>
                                <h5 className="price">$75.20<del>$65.21</del></h5>
                                <ul className="option">
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                    <a href="cart.html">
                                      <i className="fa-light fa-cart-shopping" />
                                    </a>
                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                    <i class="fa-solid fa-eye"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                    <i class="fa-thin fa-heart"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                    <i class="fa-solid fa-right-left"></i>

                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="row gy-sm-4 gy-3">
                          <div className="col-12">
                            <div className="product-box-4 wow fadeInUp">
                              <a href="shop-left-sidebar.html" className="product-image">
                                <img src={pro10} className="img-fluid" alt />
                              </a>
                              <div className="product-details">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <a href="product-left-thumbnail.html">
                                  <h4 className="name">Bell pepper</h4>
                                </a>
                                <h5 className="price">$75.20<del>$65.21</del></h5>
                                <ul className="option">
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                    <a href="cart.html">
                                      <i className="fa-light fa-cart-shopping" />
                                    </a>
                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                    <i class="fa-solid fa-eye"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                    <i class="fa-thin fa-heart"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                    <i class="fa-solid fa-right-left"></i>

                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                              <a href="shop-left-sidebar.html" className="product-image">
                                <img src={pro11} className="img-fluid" alt />
                              </a>
                              <div className="product-details">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <a href="product-left-thumbnail.html">
                                  <h4 className="name">Pea</h4>
                                </a>
                                <h5 className="price">$75.20<del>$65.21</del></h5>
                                <ul className="option">
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                    <a href="cart.html">
                                      <i className="fa-light fa-cart-shopping" />
                                    </a>
                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                    <i class="fa-solid fa-eye"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                    <i class="fa-thin fa-heart"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                    <i class="fa-solid fa-right-left"></i>

                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                              <a href="shop-left-sidebar.html" className="product-image">
                                <img src={pro1} className="img-fluid" alt />
                              </a>
                              <div className="product-details">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <a href="product-left-thumbnail.html">
                                  <h4 className="name">Avacado</h4>
                                </a>
                                <h5 className="price">$75.20<del>$65.21</del></h5>
                                <ul className="option">
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
                                    <a href="cart.html">
                                      <i className="fa-light fa-cart-shopping" />
                                    </a>
                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                                    <i class="fa-solid fa-eye"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">

                                    <i class="fa-thin fa-heart"></i>

                                  </li>
                                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                                    <i class="fa-solid fa-right-left"></i>

                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Product Section End */}
      </div>


      <div>
        {/* Banner Section Start */}
        <section className="banner-section">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="banner-contain-3 section-b-space section-t-space hover-effect">
                  <img src={banner3} className="img-fluid bg-img" alt />
                  <div className="banner-detail p-center text-dark position-relative text-center p-0">
                    <div>
                      <h4 className="ls-expanded text-uppercase theme-color">Try Our New</h4>
                      <h2 className="my-3">100% Organic Best Quality Best Price</h2>
                      <h4 className="text-content fw-300">Best Fastkart Food Quality</h4>
                      <button className="btn theme-bg-color mt-sm-4 btn-md mx-auto text-white fw-bold" onclick="location.href = 'shop-left-sidebar.html';">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner Section End */}
        {/* Product Sction Start */}
        <section className="product-section">
          <div className="container-fluid-lg">
            <div className="title">
              <h2>Top Products</h2>
            </div>
            <div className="slider-6 img-slider slick-slider-1 arrow-slider">
              <div>
                <div className="product-box-4 wow fadeInUp">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i class="fa-thin fa-heart"></i>
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img src={cate1} className="img-fluid" alt />
                    </a>
                    <ul className="option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                        <i class="fa-solid fa-eye"></i>

                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                        <i class="fa-solid fa-right-left"></i>

                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Eggplant</h5>
                    </a>
                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <div className="qty-right-plus" data-type="plus" data-field>
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="fa-light fa-cart-shopping text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                  <div className="product-image">
                    <div className="label-flex">
                      <div className="discount">
                        <label>-25%</label>
                      </div>
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i class="fa-thin fa-heart"></i>
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img src={cate4} className="img-fluid" alt />
                    </a>
                    <ul className="option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                        <i class="fa-solid fa-eye"></i>

                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                        <i class="fa-solid fa-right-left"></i>

                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Ginger</h5>
                    </a>
                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <div className="qty-right-plus" data-type="plus" data-field>
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="fa-light fa-cart-shopping text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-4 wow fadeInUp">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i class="fa-thin fa-heart"></i>
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img src={cate1} className="img-fluid" alt />
                    </a>
                    <ul className="option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                        <i class="fa-solid fa-eye"></i>

                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                        <i class="fa-solid fa-right-left"></i>

                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Eggplant</h5>
                    </a>
                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <div className="qty-right-plus" data-type="plus" data-field>
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="fa-light fa-cart-shopping text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i class="fa-thin fa-heart"></i>
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img src={cate2} className="img-fluid" alt />
                    </a>
                    <ul className="option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                        <i class="fa-solid fa-eye"></i>

                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                        <i class="fa-solid fa-right-left"></i>

                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Potato</h5>
                    </a>
                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <div className="qty-right-plus" data-type="plus" data-field>
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="fa-light fa-cart-shopping text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-4 wow fadeInUp">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i class="fa-thin fa-heart"></i>
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img src={cate3} className="img-fluid" alt />
                    </a>
                    <ul className="option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                        <i class="fa-solid fa-eye"></i>

                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                        <i class="fa-solid fa-right-left"></i>

                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Onion</h5>
                    </a>
                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <div className="qty-right-plus" data-type="plus" data-field>
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="fa-light fa-cart-shopping text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i class="fa-thin fa-heart"></i>
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img src={cate6} className="img-fluid" alt />
                    </a>
                    <ul className="option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                        <i class="fa-solid fa-eye"></i>

                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                        <i class="fa-solid fa-right-left"></i>

                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Broccoli</h5>
                    </a>
                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <div className="qty-right-plus" data-type="plus" data-field>
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="fa-light fa-cart-shopping text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-4 wow fadeInUp">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i class="fa-thin fa-heart"></i>
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img src={cate6} className="img-fluid" alt />
                    </a>
                    <ul className="option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                        <i class="fa-solid fa-eye"></i>

                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                        <i class="fa-solid fa-right-left"></i>

                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Pea</h5>
                    </a>
                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <div className="qty-right-plus" data-type="plus" data-field>
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="fa-light fa-cart-shopping text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                  <div className="product-image">
                    <div className="label-flex">
                      <div className="discount">
                        <label>50%</label>
                      </div>
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i class="fa-thin fa-heart"></i>
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img src={cate3} className="img-fluid" alt />
                    </a>
                    <ul className="option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                        <i class="fa-solid fa-eye"></i>

                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                        <i class="fa-solid fa-right-left"></i>

                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Cabbage</h5>
                    </a>
                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <div className="qty-right-plus" data-type="plus" data-field>
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="fa-light fa-cart-shopping text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-4 wow fadeInUp">
                  <div className="product-image">
                    <div className="label-flex">
                      <div className="discount">
                        <label>-25%</label>
                      </div>
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i class="fa-thin fa-heart"></i>
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img src={cate13} className="img-fluid" alt />
                    </a>
                    <ul className="option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                        <i class="fa-solid fa-eye"></i>

                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                        <i class="fa-solid fa-right-left"></i>

                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Strawberry</h5>
                    </a>
                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <div className="qty-right-plus" data-type="plus" data-field>
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="fa-light fa-cart-shopping text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                  <div className="product-image">
                    <div className="label-flex">
                      <div className="discount">
                        <label>50%</label>
                      </div>
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i class="fa-thin fa-heart"></i>
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img src={cate7} className="img-fluid" alt />
                    </a>
                    <ul className="option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                        <i class="fa-solid fa-eye"></i>

                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                        <i class="fa-solid fa-right-left"></i>

                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Cucumber</h5>
                    </a>
                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <div className="qty-right-plus" data-type="plus" data-field>
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="fa-light fa-cart-shopping text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-4 wow fadeInUp">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i class="fa-thin fa-heart"></i>
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img src={cate7} className="img-fluid" alt />
                    </a>
                    <ul className="option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                        <i class="fa-solid fa-eye"></i>

                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                        <i class="fa-solid fa-right-left"></i>

                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Apple</h5>
                    </a>
                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <div className="qty-right-plus" data-type="plus" data-field>
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="fa-light fa-cart-shopping text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i class="fa-thin fa-heart"></i>
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img src={cate6} className="img-fluid" alt />
                    </a>
                    <ul className="option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                        <i class="fa-solid fa-eye"></i>

                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                        <i class="fa-solid fa-right-left"></i>

                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Blackberry</h5>
                    </a>
                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <div className="qty-right-plus" data-type="plus" data-field>
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="fa-light fa-cart-shopping text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-4 wow fadeInUp">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i class="fa-thin fa-heart"></i>
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img src={cate9} className="img-fluid" alt />
                    </a>
                    <ul className="option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                        <i class="fa-solid fa-eye"></i>

                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                        <i class="fa-solid fa-right-left"></i>

                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Apple</h5>
                    </a>
                    <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <div className="qty-right-plus" data-type="plus" data-field>
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="fa-light fa-cart-shopping text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div></div></div></div></section>
        <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
          <div className="product-image">
            <div className="label-flex">
              <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                <i class="fa-thin fa-heart"></i>
              </button>
            </div>
            <a href="product-left-thumbnail.html">
              <img src={cate12} className="img-fluid" alt />
            </a>
            <ul className="option">
              <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                <i class="fa-solid fa-eye"></i>

              </li>
              <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                <i class="fa-solid fa-right-left"></i>

              </li>
            </ul>
          </div>
          <div className="product-detail">
            <ul className="rating">
              <li>
                <i data-feather="star" className="fill" />
              </li>
              <li>
                <i data-feather="star" className="fill" />
              </li>
              <li>
                <i data-feather="star" />
              </li>
              <li>
                <i data-feather="star" />
              </li>
              <li>
                <i data-feather="star" />
              </li>
            </ul>
            <a href="product-left-thumbnail.html">
              <h5 className="name">Bell pepper</h5>
            </a>
            <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
            <div className="price-qty">
              <div className="counter-number">
                <div className="counter">
                  <div className="qty-left-minus" data-type="minus" data-field>
                    <i className="fa-solid fa-minus" />
                  </div>
                  <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                  <div className="qty-right-plus" data-type="plus" data-field>
                    <i className="fa-solid fa-plus" />
                  </div>
                </div>
              </div>
              <button className="buy-button buy-button-2 btn btn-cart">
                <i className="fa-light fa-cart-shopping text-white m-0" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="product-box-4 wow fadeInUp">
            <div className="product-image">
              <div className="label-flex">
                <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                  <i class="fa-thin fa-heart"></i>
                </button>
              </div>
              <a href="product-left-thumbnail.html">
                <img src={cate1} className="img-fluid" alt />
              </a>
              <ul className="option">
                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                  <i class="fa-solid fa-eye"></i>

                </li>
                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                  <i class="fa-solid fa-right-left"></i>

                </li>
              </ul>
            </div>
            <div className="product-detail">
              <ul className="rating">
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" className="fill" />
                </li>
              </ul>
              <a href="product-left-thumbnail.html">
                <h5 className="name">Eggplant</h5>
              </a>
              <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
              <div className="price-qty">
                <div className="counter-number">
                  <div className="counter">
                    <div className="qty-left-minus" data-type="minus" data-field>
                      <i className="fa-solid fa-minus" />
                    </div>
                    <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                    <div className="qty-right-plus" data-type="plus" data-field>
                      <i className="fa-solid fa-plus" />
                    </div>
                  </div>
                </div>
                <button className="buy-button buy-button-2 btn btn-cart">
                  <i className="fa-light fa-cart-shopping text-white m-0" />
                </button>
              </div>
            </div>
          </div>
          <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
            <div className="product-image">
              <div className="label-flex">
                <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                  <i class="fa-thin fa-heart"></i>
                </button>
              </div>
              <a href="product-left-thumbnail.html">
                <img src={cate2} className="img-fluid" alt />
              </a>
              <ul className="option">
                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                  <i class="fa-solid fa-eye"></i>

                </li>
                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                  <i class="fa-solid fa-right-left"></i>

                </li>
              </ul>
            </div>
            <div className="product-detail">
              <ul className="rating">
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" />
                </li>
              </ul>
              <a href="product-left-thumbnail.html">
                <h5 className="name">Potato</h5>
              </a>
              <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
              <div className="price-qty">
                <div className="counter-number">
                  <div className="counter">
                    <div className="qty-left-minus" data-type="minus" data-field>
                      <i className="fa-solid fa-minus" />
                    </div>
                    <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                    <div className="qty-right-plus" data-type="plus" data-field>
                      <i className="fa-solid fa-plus" />
                    </div>
                  </div>
                </div>
                <button className="buy-button buy-button-2 btn btn-cart">
                  <i className="fa-light fa-cart-shopping text-white m-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="product-box-4 wow fadeInUp">
            <div className="product-image">
              <div className="label-flex">
                <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                  <i class="fa-thin fa-heart"></i>
                </button>
              </div>
              <a href="product-left-thumbnail.html">
                <img src={cate6} className="img-fluid" alt />
              </a>
              <ul className="option">
                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                  <i class="fa-solid fa-eye"></i>

                </li>
                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                  <i class="fa-solid fa-right-left"></i>

                </li>
              </ul>
            </div>
            <div className="product-detail">
              <ul className="rating">
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" />
                </li>
                <li>
                  <i data-feather="star" />
                </li>
                <li>
                  <i data-feather="star" />
                </li>
              </ul>
              <a href="product-left-thumbnail.html">
                <h5 className="name">Broccoli</h5>
              </a>
              <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
              <div className="price-qty">
                <div className="counter-number">
                  <div className="counter">
                    <div className="qty-left-minus" data-type="minus" data-field>
                      <i className="fa-solid fa-minus" />
                    </div>
                    <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                    <div className="qty-right-plus" data-type="plus" data-field>
                      <i className="fa-solid fa-plus" />
                    </div>
                  </div>
                </div>
                <button className="buy-button buy-button-2 btn btn-cart">
                  <i className="fa-light fa-cart-shopping text-white m-0" />
                </button>
              </div>
            </div>
          </div>
          <div className="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
            <div className="product-image">
              <div className="label-flex">
                <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                  <i class="fa-thin fa-heart"></i>
                </button>
              </div>
              <a href="product-left-thumbnail.html">
                <img src={cate7} className="img-fluid" alt />
              </a>
              <ul className="option">
                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">

                  <i class="fa-solid fa-eye"></i>

                </li>
                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">

                  <i class="fa-solid fa-right-left"></i>

                </li>
              </ul>
            </div>
            <div className="product-detail">
              <ul className="rating">
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" className="fill" />
                </li>
                <li>
                  <i data-feather="star" className="fill" />
                </li>
              </ul>
              <a href="product-left-thumbnail.html">
                <h5 className="name">Cucumber</h5>
              </a>
              <h5 className="price theme-color">$70.21<del>$65.25</del></h5>
              <div className="price-qty">
                <div className="counter-number">
                  <div className="counter">
                    <div className="qty-left-minus" data-type="minus" data-field>
                      <i className="fa-solid fa-minus" />
                    </div>
                    <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                    <div className="qty-right-plus" data-type="plus" data-field>
                      <i className="fa-solid fa-plus" />
                    </div>
                  </div>
                </div>
                <button className="buy-button buy-button-2 btn btn-cart">
                  <i className="fa-light fa-cart-shopping text-white m-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Product Sction End */}
        {/* Blog Section Start */}
        <section className="blog-section">
          <div className="container-fluid-lg">
            <div className="title">
              <h2>Blog</h2>
            </div>
            <div className="slider-3 arrow-slider">
              <div>
                <div className="blog-box ratio_50">
                  <div className="blog-box-image">
                    <a href="blog-detail.html">
                      <img src={blog1} className="img-fluid bg-img" alt />
                    </a>
                  </div>
                  <div className="blog-detail">
                    <label>Conversion rate optimization</label>
                    <a href="blog-detail.html">
                      <h2>A Fresh Vegetable online market place a fresh...</h2>
                    </a>
                    <div className="blog-list">
                      <span>March 9, 2021</span>
                      <span>By Emil Kristensen</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="blog-box ratio_50">
                  <div className="blog-box-image">
                    <a href="blog-detail.html">
                      <img src={blog2} className="img-fluid bg-img" alt />
                    </a>
                  </div>
                  <div className="blog-detail">
                    <label>Email Marketing</label>
                    <a href="blog-detail.html">
                      <h2>A Fresh Vegetable online market place a fresh...</h2>
                    </a>
                    <div className="blog-list">
                      <span>March 9, 2021</span>
                      <span>By Emil Kristensen</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="blog-box ratio_50">
                  <div className="blog-box-image">
                    <a href="blog-detail.html">
                      <img src={blog3} className="img-fluid bg-img" alt />
                    </a>
                  </div>
                  <div className="blog-detail">
                    <label>Conversion rate optimization</label>
                    <a href="blog-detail.html">
                      <h2>A Fresh Vegetable online market place a fresh...</h2>
                    </a>
                    <div className="blog-list">
                      <span>March 9, 2021</span>
                      <span>By Emil Kristensen</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="blog-box ratio_50">
                  <div className="blog-box-image">
                    <a href="blog-detail.html">
                      <img src={blog1} className="img-fluid bg-img" alt />
                    </a>
                  </div>
                  <div className="blog-detail">
                    <label>Conversion rate optimization</label>
                    <a href="blog-detail.html">
                      <h2>A Fresh Vegetable online market place a fresh...</h2>
                    </a>
                    <div className="blog-list">
                      <span>March 9, 2021</span>
                      <span>By Emil Kristensen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Section End */}
        {/* Newsletter Section Start */}
        <section className="newsletter-section-2 section-b-space">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="newsletter-box hover-effect">
                  <img src={background1} className="img-fluid bg-img" alt />
                  <div className="row">
                    <div className="col-xxl-8 col-xl-7">
                      <div className="newsletter-detail p-center-left text-white">
                        <div>
                          <h2>Subscribe to the newsletter</h2>
                          <h4>Join our subscribers list to get the latest news, updates and special offers
                            delivered directly in your inbox.</h4>
                          <form className="row g-2">
                            <div className="col-sm-10 col-12">
                              <div className="newsletter-form">
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                <button type="submit" className="btn bg-white theme-color btn-md fw-500
                                                  submit-button">Subscribe</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 d-xl-block d-none">
                      <div className="shape-box">
                        <img src={basket1} alt className="img-fluid image-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>












    </>
  )
}

export default Home1