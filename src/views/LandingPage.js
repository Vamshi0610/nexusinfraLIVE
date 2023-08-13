import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../assets/css/style.css";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
// import '../assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
// import "../assets/vendor/swiper/swiper-bundle.min.js";
// import "../assets/vendor/php-email-form/validate.js";
// import "../assets/js/main.js";
import testimonial1 from "../assets/img/testimonial-1.jpg";
import testimonial2 from "../assets/img/testimonial-2.jpg";
import CountyJewel from "../assets/img/Nexus-Elite-County-Jewel.svg";
import property6 from "../assets/img/property-6.jpg";
import property3 from "../assets/img/property-3.jpg";
import property7 from "../assets/img/property-7.jpg";

export default function LandingPage() {
  return (
    <>
      <div className="click-closed"></div>

      <Header activeTab="home"/>

      {/* ======= Intro Section ======= */}
      <div className="intro intro-carousel swiper position-relative">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide carousel-item-a intro-item bg-image"
            style={{ backgroundImage: "url(assets/img/County_Banner.jpg)" }}
          >
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="intro-body">
                        {/* <p className="intro-title-top">Doral, Florida
                      <br/> 78345
                    </p> */}
                        <img
                          src={CountyJewel}
                          alt=""
                          className="img-fluid"
                        />
                        <h1 className="intro-title mb-4 ">
                          <span className="color-b">NexusElite County </span>
                          <br />
                        </h1>
                        <p className="intro-subtitle intro-price">
                          <a href="#">
                            <span className="price-a">
                              kukunoorpally, Siddipet
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide carousel-item-a intro-item bg-image"
            style={{ backgroundImage: "url(assets/img/Pride_Banner.jpg)" }}
          >
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="intro-body">
                        {/* <p className="intro-title-top">Doral, Florida
                      <br/> 78345
                    </p> */}
                        <img
                          src={CountyJewel}
                          alt=""
                          className="img-fluid"
                        />

                        <h1 className="intro-title mb-4">
                          <span className="color-b">NexusElite Pride </span>
                          <br />
                        </h1>
                        <p className="intro-subtitle intro-price">
                          <a href="#">
                            <span className="price-a">
                              Bogaram, keesara, Hyderabad
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide carousel-item-a intro-item bg-image"
            style={{ backgroundImage: "url(assets/img/Jewel_Banner.jpg)" }}
          >
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="intro-body">
                        {/* <p className="intro-title-top">Doral, Florida
                      <br/> 78345
                    </p> */}
                        <img
                          src={CountyJewel}
                          alt=""
                          className="img-fluid"
                        />

                        <h1 className="intro-title mb-4">
                          <span className="color-b">NexusElite Jewel </span>
                          <br />
                        </h1>
                        <p className="intro-subtitle intro-price">
                          <a href="#">
                            <span className="price-a">Bhongir</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide carousel-item-a intro-item bg-image"
            style={{ backgroundImage: "url(assets/img/slide-3.jpg)" }}
          >
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="intro-body">
                        {/* <p className="intro-title-top">Doral, Florida
                      <br/> 78345
                    </p> */}
                        <img
                          src={CountyJewel}
                          alt=""
                          className="img-fluid"
                        />

                        <h1 className="intro-title mb-4">
                          <span className="color-b">NexusElite Platinum</span>
                          <br />
                        </h1>
                        <p className="intro-subtitle intro-price">
                          <a href="#">
                            <span className="price-a">Raigir</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
      {/* End Intro Section */}

      <main id="main">
        {/* ======= Latest Properties Section ======= */}
        <section className="section-property section-t8">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-wrap d-flex justify-content-between">
                  <div className="title-box">
                    <h2 className="title-a">Latest Properties</h2>
                  </div>
                  <div className="title-link">
                    {/* <a href="property-grid.html">All Property
                  <span className="bi bi-chevron-right"></span>
                </a> */}
                  </div>
                </div>
              </div>
            </div>

            <div id="property-carousel" className="swiper">
              <div className="swiper-wrapper">
                <div className="carousel-item-b swiper-slide">
                  <div className="card-box-a card-shadow">
                    <div className="img-box-a">
                      <img
                        src={property6}
                        alt=""
                        className="img-a img-fluid"
                      />
                      <div className="property-status">Upcoming</div>
                    </div>
                    <div className="card-overlay">
                      <div className="card-overlay-a-content">
                        <div className="card-header-a">
                          <h2 className="card-title-a">
                            {/* <a href="NexusEliteCounty.html"> */}
                            NexusElite Platinum
                            <br />
                            {/* </a> */}
                          </h2>
                        </div>
                        <div className="card-body-a">
                          <div className="price-box d-flex">
                            <span className="price-a">Raigir</span>
                          </div>
                          <a href="NexusElitePlatinum.html" className="link-a">
                            Click here to view
                            <span className="bi bi-chevron-right"></span>
                          </a>
                        </div>
                        <div className="card-footer-a">
                          <ul className="card-info d-flex justify-content-around">
                            <li>
                              <h4 className="card-info-title">Acres</h4>
                              <span>
                                20
                                {/* <sup>2</sup> */}
                              </span>
                            </li>
                            {/* <li>
                          <h4 className="card-info-title">No.of Plots</h4>
                          <span>195</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Minimum Plot Size</h4>
                          <span>146 Sq.yrds</span>
                        </li> */}
                            {/* <li>
                          <h4 className="card-info-title">LP.No.</h4>
                          <span>133/2021/H</span>
                        </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End carousel item */}

                <div className="carousel-item-b swiper-slide">
                  <div className="card-box-a card-shadow">
                    <div className="img-box-a">
                      <img
                        src={property3}
                        alt=""
                        className="img-a img-fluid"
                      />
                      <div className="property-status">Completed</div>
                    </div>
                    <div className="card-overlay">
                      <div className="card-overlay-a-content">
                        <div className="card-header-a">
                          <h2 className="card-title-a">
                            {/* <a href="NexusEliteCounty.html"> */}
                            NexusElite Pride
                            <br />
                            {/* </a> */}
                          </h2>
                        </div>
                        <div className="card-body-a">
                          <div className="price-box d-flex">
                            <span className="price-a">
                              Bogaram, keesara, Hyderabad
                            </span>
                          </div>
                          <a href="NexusElitePride.html" className="link-a">
                            Click here to view
                            <span className="bi bi-chevron-right"></span>
                          </a>
                        </div>
                        <div className="card-footer-a">
                          <ul className="card-info d-flex justify-content-around">
                            <li>
                              <h4 className="card-info-title">Acres</h4>
                              <span>7{/* <sup>2</sup> */}</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">No.of Plots</h4>
                              <span>100</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">
                                Minimum Plot Size
                              </h4>
                              <span>167 Sq.yrds</span>
                            </li>
                            {/* <li>
                          <h4 className="card-info-title">LP.No.</h4>
                          <span>000135/LO/Plg/HMDA/2020</span>
                        </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End carousel item */}

                <div className="carousel-item-b swiper-slide">
                  <div className="card-box-a card-shadow">
                    <div className="img-box-a">
                      <img
                        src={property7}
                        alt=""
                        className="img-a img-fluid"
                      />
                      <div className="property-status">On-Going</div>
                    </div>
                    <div className="card-overlay">
                      <div className="card-overlay-a-content">
                        <div className="card-header-a">
                          <h2 className="card-title-a">
                            {/* <a href="NexusEliteCounty.html"> */}
                            NexusElite Jewel
                            <br />
                            {/* </a> */}
                          </h2>
                        </div>
                        <div className="card-body-a">
                          <div className="price-box d-flex">
                            <span className="price-a">Bhongir</span>
                          </div>
                          <a href="NexusEliteJewel.html" className="link-a">
                            Click here to view
                            <span className="bi bi-chevron-right"></span>
                          </a>
                        </div>
                        <div className="card-footer-a">
                          <ul className="card-info d-flex justify-content-around">
                            <li>
                              <h4 className="card-info-title">Acres</h4>
                              <span>
                                13.65
                                {/* <sup>2</sup> */}
                              </span>
                            </li>
                            <li>
                              <h4 className="card-info-title">No.of Plots</h4>
                              <span>101</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">
                                Minimum Plot Size
                              </h4>
                              <span>167 Sq.yrds</span>
                            </li>
                            {/* <li>
                          <h4 className="card-info-title">LP.No.</h4>
                          <span>133/2021/H</span>
                        </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End carousel item */}

                {/* <div className="carousel-item-b swiper-slide">
              <div className="card-box-a card-shadow">
                <div className="img-box-a">
                  <img src="../assets/img/property-10.jpg" alt="" className="img-a img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-overlay-a-content">
                    <div className="card-header-a">
                      <h2 className="card-title-a">
                        <a href="NexusEliteCounty.html">204 Montal
                          <br /> South Bela Two</a>
                      </h2>
                    </div>
                    <div className="card-body-a">
                      <div className="price-box d-flex">
                        <span className="price-a">rent | $ 12.000</span>
                      </div>
                      <a href="NexusEliteCounty.html" className="link-a">Click here to view
                        <span className="bi bi-chevron-right"></span>
                      </a>
                    </div>
                    <div className="card-footer-a">
                      <ul className="card-info d-flex justify-content-around">
                        <li>
                          <h4 className="card-info-title">Area</h4>
                          <span>340m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Beds</h4>
                          <span>2</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Baths</h4>
                          <span>4</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Garages</h4>
                          <span>1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>End carousel item */}
              </div>
            </div>
            {/* <div className="propery-carousel-pagination carousel-pagination"></div> */}
          </div>
        </section>
        {/* End Latest Properties Section */}

        {/* ======= Agents Section ======= */}
        {/* <section className="section-agents section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Best Agents</h2>
              </div>
              <div className="title-link">
                <a href="agents-grid.html">All Agents
                  <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src="../assets/img/agent-4.jpg" alt="" className="img-d img-fluid"/>
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">Margaret Sotillo
                        <br/> Escala</a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="https://www.facebook.com/nexuseliteinfra" target="_blank" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.youtube.com/channel/UCDKluTsm6xhLKahU9EJtWRw" target="_blank" className="link-one">
                          <i className="bi bi-youtube" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src="../assets/img/agent-1.jpg" alt="" className="img-d img-fluid"/>
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">Stiven Spilver
                        <br/> Darw</a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="https://www.facebook.com/nexuseliteinfra" target="_blank" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.youtube.com/channel/UCDKluTsm6xhLKahU9EJtWRw" target="_blank" className="link-one">
                          <i className="bi bi-youtube" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                        </a>
                      </li> 
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src="../assets/img/agent-5.jpg" alt="" className="img-d img-fluid"/>
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">Emma Toledo
                        <br/> Cascada</a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="https://www.facebook.com/nexuseliteinfra" target="_blank" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.youtube.com/channel/UCDKluTsm6xhLKahU9EJtWRw" target="_blank" className="link-one">
                          <i className="bi bi-youtube" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
        {/* End Agents Section */}

        {/* ======= Latest News Section ======= */}
        {/* <section className="section-news section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Latest News</h2>
              </div>
              <div className="title-link">
                <a href="blog-grid.html">All News
                  <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div id="news-carousel" className="swiper">
          <div className="swiper-wrapper">

            <div className="carousel-item-c swiper-slide">
              <div className="card-box-b card-shadow news-box">
                <div className="img-box-b">
                  <img src="../assets/img/post-2.jpg" alt="" className="img-b img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-header-b">
                    <div className="card-category-b">
                      <a href="#" className="category-b">House</a>
                    </div>
                    <div className="card-title-b">
                      <h2 className="title-2">
                        <a href="blog-single.html">House is comming
                          <br/> new</a>
                      </h2>
                    </div>
                    <div className="card-date">
                      <span className="date-b">18 Sep. 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            End carousel item

            <div className="carousel-item-c swiper-slide">
              <div className="card-box-b card-shadow news-box">
                <div className="img-box-b">
                  <img src="../assets/img/post-5.jpg" alt="" className="img-b img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-header-b">
                    <div className="card-category-b">
                      <a href="#" className="category-b">Travel</a>
                    </div>
                    <div className="card-title-b">
                      <h2 className="title-2">
                        <a href="blog-single.html">Travel is comming
                          <br/> new</a>
                      </h2>
                    </div>
                    <div className="card-date">
                      <span className="date-b">18 Sep. 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>End carousel item

            <div className="carousel-item-c swiper-slide">
              <div className="card-box-b card-shadow news-box">
                <div className="img-box-b">
                  <img src="../assets/img/post-7.jpg" alt="" className="img-b img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-header-b">
                    <div className="card-category-b">
                      <a href="#" className="category-b">Park</a>
                    </div>
                    <div className="card-title-b">
                      <h2 className="title-2">
                        <a href="blog-single.html">Park is comming
                          <br/> new</a>
                      </h2>
                    </div>
                    <div className="card-date">
                      <span className="date-b">18 Sep. 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>End carousel item

            <div className="carousel-item-c swiper-slide">
              <div className="card-box-b card-shadow news-box">
                <div className="img-box-b">
                  <img src="../assets/img/post-3.jpg" alt="" className="img-b img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-header-b">
                    <div className="card-category-b">
                      <a href="#" className="category-b">Travel</a>
                    </div>
                    <div className="card-title-b">
                      <h2 className="title-2">
                        <a href="#">Travel is comming
                          <br/> new</a>
                      </h2>
                    </div>
                    <div className="card-date">
                      <span className="date-b">18 Sep. 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>End carousel item

          </div>
        </div> */}

        {/* <div className="news-carousel-pagination carousel-pagination"></div>
      </div>
    </section>End Latest News Section */}

        {/* ======= Testimonials Section ======= */}
        <section className="section-testimonials section-t8 nav-arrow-a">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-wrap d-flex justify-content-between">
                  <div className="title-box">
                    <h2 className="title-a">Testimonials</h2>
                  </div>
                </div>
              </div>
            </div>

            <div id="testimonial-carousel" className="swiper">
              <div className="swiper-wrapper">
                <div className="carousel-item-a swiper-slide">
                  <div className="testimonials-box">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div className="testimonial-img">
                          <img
                            src={testimonial1}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="testimonial-ico">
                          <i className="bi bi-chat-quote-fill"></i>
                        </div>
                        <div className="testimonials-content">
                          <p className="testimonial-text">
                            "I personally feel that they are the genuine people
                            with business ethics. We were treated with the
                            utmost respect and were never left with No
                            questions.I can call them for any time for expert
                            opinion on my idea of investment in real estate."
                          </p>
                        </div>
                        <div className="testimonial-author-box">
                          <img
                            src={testimonial1}
                            alt=""
                            className="testimonial-avatar"
                          />
                          <h5 className="testimonial-author">Kalyan Madas</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End carousel item */}

                <div className="carousel-item-a swiper-slide">
                  <div className="testimonials-box">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div className="testimonial-img">
                          <img
                            src={testimonial2}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="testimonial-ico">
                          <i className="bi bi-chat-quote-fill"></i>
                        </div>
                        <div className="testimonials-content">
                          <p className="testimonial-text">
                            I was highly convinced and satisfied with Nexuselite
                            team services.They explain everything in details and
                            proceed with the deal. They are genuine in task and
                            make the registration in time.
                          </p>
                        </div>
                        <div className="testimonial-author-box">
                          <img
                            src={testimonial2}
                            alt=""
                            className="testimonial-avatar"
                          />
                          <h5 className="testimonial-author">Ashwin Reddy</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End carousel item */}

                <div className="carousel-item-a swiper-slide">
                  <div className="testimonials-box">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div className="testimonial-img">
                          <img
                            src={testimonial1}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="testimonial-ico">
                          <i className="bi bi-chat-quote-fill"></i>
                        </div>
                        <div className="testimonials-content">
                          <p className="testimonial-text">
                            Nexuselite team experience and expertise in real
                            estate impressed me lot, my concern or queries are
                            addressed quickly and thoroughly. We were treated
                            with the utmost respect and were never left with No
                            questions.{" "}
                          </p>
                        </div>
                        <div className="testimonial-author-box">
                          <img
                            src={testimonial1}
                            alt=""
                            className="testimonial-avatar"
                          />
                          <h5 className="testimonial-author">
                            Lokesh Reddy Kalva
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End carousel item */}

                <div className="carousel-item-a swiper-slide">
                  <div className="testimonials-box">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div className="testimonial-img">
                          <img
                            src={testimonial2}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="testimonial-ico">
                          <i className="bi bi-chat-quote-fill"></i>
                        </div>
                        <div className="testimonials-content">
                          <p className="testimonial-text">
                            The ownership that Nexuselite tem takes impressed me
                            a lot, am happy with the prompt services that they
                            provide. I rely on the honesty, Great integrity and
                            outstanding business values of Nexuselite infra
                            developers.{" "}
                          </p>
                        </div>
                        <div className="testimonial-author-box">
                          <img
                            src={testimonial2}
                            alt=""
                            className="testimonial-avatar"
                          />
                          <h5 className="testimonial-author">
                            CA Chiranjeevi Rao K
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End carousel item */}
              </div>
            </div>
            <div className="testimonial-carousel-pagination carousel-pagination"></div>
          </div>
        </section>
        {/* End Testimonials Section */}
      </main>
      {/* End #main */}

      {/* ======= Footer ======= */}
      <Footer activeTab="home"/>
      {/* End  Footer */}

      {/* <div id="preloader"></div>
   <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}

      {/* Vendor JS Files */}
      {/* <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="../assets/vendor/php-email-form/validate.js"></script> */}

      {/* Template Main JS File */}
      {/* <script src="../assets/js/main.js"></script> */}
    </>
  );
}
