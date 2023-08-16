import "../assets/css/style.css";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
// import "../assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "../assets/vendor/swiper/swiper-bundle.min.js";
// import "../assets/vendor/php-email-form/validate.js";
// import "../assets/js/main.js";
import Footer from "./Footer";
import Header from "./Header";
import slideAbout1 from "../assets/img/slide-about-1.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PropertyDetails from "./PropertyDetails";

export default function About(props) {
  const navigate = useNavigate();
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [openPropertyDetails, setOpenPropertyDetails] = useState(false);

  const handlePropertySelect = (val) => {
    let details = props.propertyValues.filter((each) => each.name === val);
    setPropertyDetails(details);
    setOpenPropertyDetails(true);
    // navigate("/nexusElitePride")
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* ======= Property Search Section ======= */}
      <div className="click-closed"></div>
      {openPropertyDetails ? (
        <PropertyDetails
          details={propertyDetails}
          setOpenPropertyDetails={setOpenPropertyDetails}
        />
      ) : (
        <>
          <Header activeTab="about" />

          <main id="main">
            {/* ======= Intro Single ======= */}
            <section className="intro-single">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-8">
                    <div className="title-single-box">
                      <h1 className="title-single">We build your dreams</h1>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                    <nav
                      aria-label="breadcrumb"
                      className="breadcrumb-box d-flex justify-content-lg-end"
                    >
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a onClick={() => navigate("/")}>Home</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          About
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </section>
            {/* End Intro Single*/}

            {/* ======= About Section ======= */}
            <section className="section-about">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 position-relative">
                    <div className="about-img-box">
                      <img src={slideAbout1} alt="" className="img-fluid" />
                    </div>
                    <div className="sinse-box">
                      <h3 className="sinse-title">
                        Empowering Dreams
                        <span></span>
                        <br /> Since 2020
                      </h3>
                      {/* <p>Art & Creative</p> */}
                    </div>
                  </div>
                  <div className="col-md-12 section-t8 position-relative">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="title-box-d about">
                          <h3 className="title-d">
                            Vision
                            {/* <span className="color-d">porttitor</span> lectus
                    <br> nibh. */}
                          </h3>
                        </div>
                        <p className="color-text-a">
                          Our real estate solutions are designed to be eternal
                          classics, never out of fashion even in the future.
                        </p>
                        {/* <p className="color-text-a">
                  Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                  Mauris blandit aliquet
                  elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus.
                </p> */}
                      </div>
                      <div className="col-md-6">
                        <div className="title-box-d about">
                          <h3 className="title-d">
                            Mission
                            {/* <span className="color-d">porttitor</span> lectus
                    <br> nibh. */}
                          </h3>
                        </div>
                        <p className="color-text-a">
                          Our non-negotiable commitment to delivery ensures that
                          each project is delivered on-time, and to your
                          complete satisfaction.{" "}
                        </p>
                        {/* <p className="color-text-a">
                  Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                  Mauris blandit aliquet
                  elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus.
                </p> */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="title-box-d about">
                          <h3 className="title-d">
                            Quality Policy
                            {/* <span className="color-d">porttitor</span> lectus
                    <br> nibh. */}
                          </h3>
                        </div>
                        <p className="color-text-a">
                          Enriching your ownership experience with strong focus
                          on quality at every stage of planning, development,
                          and delivery.
                        </p>
                        {/* <p className="color-text-a">
                  Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                  Mauris blandit aliquet
                  elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus.
                </p> */}
                      </div>
                      <div className="col-md-6">
                        <div className="title-box-d about">
                          <h3 className="title-d">
                            Plotting as a service
                            {/* <span className="color-d">porttitor</span> lectus
                    <br> nibh. */}
                          </h3>
                        </div>
                        <p className="color-text-a">
                          We expanded beyond developing residential and
                          commercial properties to take the lead in hunting for
                          the spaces for our customers and plotting it as per
                          their requirements.{" "}
                        </p>
                        {/* <p className="color-text-a">
                  Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                  Mauris blandit aliquet
                  elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus.
                </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =======Team Section ======= */}
            {/*<section className="section-agents section-t8">
       <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Meet Our Agents</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src="assets/img/agent-7.jpg" alt="" className="img-d img-fluid">
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">Margaret Sotillo
                        <br> Escala</a>
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
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
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
                <img src="assets/img/agent-6.jpg" alt="" className="img-d img-fluid">
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">Stiven Spilver
                        <br> Darw</a>
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
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
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
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-dribbble" aria-hidden="true"></i>
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
                <img src="assets/img/agent-5.jpg" alt="" className="img-d img-fluid">
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">Emma Toledo
                        <br> Cascada</a>
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
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
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
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-dribbble" aria-hidden="true"></i>
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
    </section>*/}
            {/* End About Section*/}
          </main>
        </>
      )}
      {/* End #main */}
      <Footer handlePropertySelect={handlePropertySelect} />
    </>
  );
}
