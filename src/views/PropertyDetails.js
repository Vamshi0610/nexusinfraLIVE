import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Slide1 from "../assets/img/slide-1.jpg";
import Slide2 from "../assets/img/slide-2.jpg";
import pride_projectLayout from "../assets/img/pride_projectLayout.jpg";
import pride_LayoutGallery1 from "../assets/img/pride_LayoutGallery1.jpg";
import pride_LayoutGallery2 from "../assets/img/pride_LayoutGallery2.jpg";
import pride_LayoutGallery3 from "../assets/img/pride_LayoutGallery3.jpg";
import pride_LayoutGallery4 from "../assets/img/pride_LayoutGallery4.jpg";
import pride_LayoutGallery5 from "../assets/img/pride_LayoutGallery5.jpg";
import pride_LayoutGallery6 from "../assets/img/pride_LayoutGallery6.jpg";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar"
export default function PropertyDetails(props) {
  const navigate = useNavigate();
  const details = props.details[0];
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [details])
  return (
    <>
      {console.log("DETAILS", props, details)}
      {/* ======= Property Search Section ======= */}
      <div className="click-closed"></div>
      <Header activeTab = "properties" setOpenPropertyDetails={props.setOpenPropertyDetails}/>
      <main id="main">
        {/* ======= Intro Single ======= */}
        <section className="intro-single">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="title-single-box">
                  <h1 className="title-single">{details.name}</h1>
                  <span className="color-text-a">{details.location}</span>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <nav
                  aria-label="breadcrumb"
                  className="breadcrumb-box d-flex justify-content-lg-end"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a
                        onClick={() => {
                          navigate("/");
                          props.setOpenPropertyDetails(false);
                        }}
                      >
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a
                        onClick={() => {
                          navigate("/properties");
                          props.setOpenPropertyDetails(false);
                        }}
                      >
                        Properties
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {details.name}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* End Intro Single*/}

        {/* ======= Property Single ======= */}
        <section className="property-single nav-arrow-b">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div id="property-single-carousel" className="swiper">
                  <div className="swiper-wrapper">
                    <div className="carousel-item-b swiper-slide">
                      <img src={Slide1} alt="" />
                    </div>
                    <div className="carousel-item-b swiper-slide">
                      <img src={Slide2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="property-single-carousel-pagination carousel-pagination"></div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="row justify-content-between">
                  <div className="col-md-5 col-lg-4">
                    {/* <div className="property-price d-flex justify-content-center foo">
                  <div className="card-header-c d-flex">
                    <div className="card-box-ico">
                      <span className="bi bi-cash">$</span>
                    </div>
                    <div className="card-title-c align-self-center">
                      <h5 className="title-c">15000</h5>
                    </div>
                  </div>
                </div> */}
                    <div className="property-summary">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="title-box-d section-t4">
                            <h3 className="title-d">Quick Summary</h3>
                          </div>
                        </div>
                      </div>
                      <div className="summary-list">
                        <ul className="list">
                          <li className="d-flex justify-content-between">
                            {details.QuickSummary[0].developerName && (
                              <>
                                <strong>Name of the Developer:</strong>
                                <span>
                                  NexusElite Infra <br />
                                  Developer
                                  {/* {details.QuickSummary[0].developerName} */}
                                </span>
                              </>
                            )}
                          </li>
                          {details.QuickSummary[0].projectName && (
                            <li className="d-flex justify-content-between">
                              <strong>Name of the Project:</strong>
                              <span>{details.QuickSummary[0].projectName}</span>
                            </li>
                          )}
                          {details.QuickSummary[0].extent && (
                            <li className="d-flex justify-content-between">
                              <strong>Extent:</strong>
                              <span>{details.QuickSummary[0].extent}</span>
                            </li>
                          )}
                          {details.QuickSummary[0].totalPlots && (
                            <li className="d-flex justify-content-between">
                              <strong>Total No.of Plots:</strong>
                              <span>{details.QuickSummary[0].totalPlots}</span>
                            </li>
                          )}
                          {details.QuickSummary[0].minPlotSize && (
                            <li className="d-flex justify-content-between">
                              <strong>Minimum Plot Size:</strong>
                              <span>{details.QuickSummary[0].minPlotSize}</span>
                            </li>
                          )}
                          {details.QuickSummary[0].permission && (
                            <li className="d-flex justify-content-between">
                              <strong>Permission:</strong>
                              <span>{details.QuickSummary[0].permission}</span>
                            </li>
                          )}
                          {details.QuickSummary[0].zone && (
                            <li className="d-flex justify-content-between">
                              <strong>Zone:</strong>
                              <span>{details.QuickSummary[0].zone}</span>
                            </li>
                          )}
                          {details.QuickSummary[0].lp_No && (
                            <li className="d-flex justify-content-between">
                              <strong>LP.No.:</strong>
                              <span>{details.QuickSummary[0].lp_No}</span>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-7 section-md-t3">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="title-box-d">
                          <h3 className="title-d">Property Description</h3>
                        </div>
                      </div>
                    </div>
                    <div className="property-description">
                      <p className="description color-text-a">
                        {details.description}
                      </p>
                    </div>
                    {details.projectHighlights && (
                      <>
                        <div className="row section-t3">
                          <div className="col-sm-12">
                            <div className="title-box-d">
                              <h3 className="title-d">Project Highlights</h3>
                            </div>
                          </div>
                        </div>
                        <div className="amenities-list color-text-a">
                          <ul className="list-a no-margin">
                            {details.projectHighlights.map((each) => (
                              <li>{each}</li>
                            ))}
                            {/* <li>Underground Electricity</li>
                        <li>24x7 Security</li>
                        <li>Each Polt with ramp</li>
                        <li>40'' & 30'' Feet wide road</li>
                        <li>Beautiful entrance arch</li>
                        <li>Each block of Plots CRS wall</li> */}
                          </ul>
                        </div>
                      </>
                    )}
                    {details.locationHighlights && (
                      <>
                        <div className="row section-t3">
                          <div className="col-sm-12">
                            <div className="title-box-d">
                              <h3 className="title-d">Location Highlights</h3>
                            </div>
                          </div>
                        </div>
                        <div className="amenities-list color-text-a">
                          <ul className="list-a no-margin">
                            {details.locationHighlights.map((each) => (
                              <li>{each}</li>
                            ))}{" "}
                            {/* <li>15 mins drive to Pocharam SEZ</li>
                        <li>Beside Holy Mary Engineer College</li>
                        <li>5 Mins drive to Ghatkesar or Keesara</li>
                        <li>30 mins drive ECIL X Road or Uppal Circle</li> */}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-10 offset-md-1">
                <ul
                  className="nav nav-pills-a nav-pills mb-3 section-t3"
                  id="pills-tab"
                  role="tablist"
                >
                  {details.youtubeLink && (
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="pills-video-tab"
                        data-bs-toggle="pill"
                        href="#pills-video"
                        role="tab"
                        aria-controls="pills-video"
                        aria-selected="true"
                      >
                        Video
                      </a>
                    </li>
                  )}
                  <li className="nav-item">
                    {details.projectLayouts && (
                      <a
                        className={details.youtubeLink ? "nav-link": "nav-link active"}
                        id="pills-plans-tab"
                        data-bs-toggle="pill"
                        href="#pills-plans"
                        role="tab"
                        aria-controls="pills-plans"
                        aria-selected="false"
                      >
                        Project Layout
                      </a>
                    )}
                  </li>
                  <li className="nav-item">
                    {details.galleryLayouts && (
                      <a
                        className="nav-link"
                        id="pills-map-tab"
                        data-bs-toggle="pill"
                        href="#pills-map"
                        role="tab"
                        aria-controls="pills-map"
                        aria-selected="false"
                      >
                        Layout Gallery
                      </a>
                    )}
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  {details.youtubeLink && (
                    <div
                      className="tab-pane fade show active"
                      id="pills-video"
                      role="tabpanel"
                      aria-labelledby="pills-video-tab"
                    >
                      <iframe
                        src={details.youtubeLink}
                        width="100%"
                        height="460"
                        frameborder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                      ></iframe>
                    </div>
                  )}
                  {details.projectLayouts?.map((each) => (
                    <div
                      className={details.youtubeLink ? "tab-pane fade" :"tab-pane fade show active"}
                      id="pills-plans"
                      role="tabpanel"
                      aria-labelledby="pills-plans-tab"
                    >
                      <img
                        src={each}
                        alt=""
                        className="img-fluid"
                        width="100%"
                        height="460"
                      />
                    </div>
                  ))}
                  <div
                    className="tab-pane fade"
                    id="pills-map"
                    role="tabpanel"
                    aria-labelledby="pills-map-tab"
                  >
                    <div id="property-carousel" className="testimonial-intro pagination-bottom swiper">
                        <Swiper
                          modules={[
                            Navigation,
                            Pagination,
                            Scrollbar,
                            A11y,
                            Autoplay,
                          ]}
                          breakpoints={{
                            // when window width is >= 320px
                            320: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            // when window width is >= 640px
                            1024: {
                              slidesPerView: 2,
                              spaceBetween: 40,
                            },
                            // when window width is >= 640px
                            1140: {
                              slidesPerView: 3,
                              spaceBetween: 40,
                            },
                          }}
                          spaceBetween={50}
                          slidesPerView={1.5}
                          autoplay={true}
                          pagination={{ clickable: true }}
                          space-between="50"
                        >
                        <div className="swiper-wrapper">
                          {details.galleryLayouts?.map((each) => (
                            <SwiperSlide className="swiper-slide carousel-item-a intro-item bg-image">
                              <img
                                src={each}
                                alt=""
                                className="img-fluid"
                                width="100%"
                                height="460"
                              />
                            </SwiperSlide>
                          ))}
                          </div>
                        </Swiper>
                        {/* // )} */}
                        
                        <div className="propery-carousel-pagination carousel-pagination"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-12">
            <div className="row section-t3">
              <div className="col-sm-12">
                <div className="title-box-d">
                  <h3 className="title-d">Contact Agent</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <img src="assets/img/agent-4.jpg" alt="" className="img-fluid">
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="property-agent">
                  <h4 className="title-agent">Anabella Geller</h4>
                  <p className="color-text-a">
                    Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                    dui. Quisque velit nisi,
                    pretium ut lacinia in, elementum id enim.
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex justify-content-between">
                      <strong>Phone:</strong>
                      <span className="color-text-a">(222) 4568932</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>Mobile:</strong>
                      <span className="color-text-a">777 287 378 737</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>Email:</strong>
                      <span className="color-text-a">annabella@example.com</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>Skype:</strong>
                      <span className="color-text-a">Annabela.ge</span>
                    </li>
                  </ul>
                  <div className="socials-a">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="https://www.facebook.com/nexuseliteinfra" target="_blank">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="bi bi-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="property-contact">
                  <form className="form-a">
                    <div className="row">
                      <div className="col-md-12 mb-1">
                        <div className="form-group">
                          <input type="text" className="form-control form-control-lg form-control-a" id="inputName" placeholder="Name *" required>
                        </div>
                      </div>
                      <div className="col-md-12 mb-1">
                        <div className="form-group">
                          <input type="email" className="form-control form-control-lg form-control-a" id="inputEmail1" placeholder="Email *" required>
                        </div>
                      </div>
                      <div className="col-md-12 mb-1">
                        <div className="form-group">
                          <textarea id="textMessage" className="form-control" placeholder="Comment *" name="message" cols="45" rows="8" required></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 mt-3">
                        <button type="submit" className="btn btn-a">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
            </div>
          </div>
        </section>
        {/* End Property Single*/}
      </main>
      {/* End #main */}
      {/* <Footer /> */}
    </>
  );
}
