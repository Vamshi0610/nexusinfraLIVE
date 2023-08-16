import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import NexusEliteCounty from "../assets/img/property-1.jpg";
import NexusElitePrideImage from "../assets/img/property-3.jpg";
import NexusEliteJewel from "../assets/img/property-6.jpg";
import NexusElitePlatinum from "../assets/img/property-6.jpg";
import PropertyDetails from "./PropertyDetails";
import { useState, useEffect } from "react";

export default function PropertyGrid(props) {
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
      {console.log(
        "deatils from property",
        openPropertyDetails,
        propertyDetails
      )}
      {/* ======= Property Search Section ======= */}
      <div className="click-closed"></div>

      <Header activeTab="properties" />

      {openPropertyDetails ? (
        <PropertyDetails
          details={propertyDetails}
          setOpenPropertyDetails={setOpenPropertyDetails}
        />
      ) : (
        <main id="main">
          {/* ======= Intro Single ======= */}
          <section className="intro-single">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="title-single-box">
                    <h1 className="title-single">Our Amazing Properties</h1>
                    <span className="color-text-a">Grid Properties</span>
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
                        Properties
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          {/* End Intro Single*/}

          {/* ======= Property Grid ======= */}
          <section className="property-grid grid">
            <div className="container">
              <div className="row">
                {/* <div className="col-sm-12">
                <div className="grid-option">
                  <form>
                    <select className="custom-select">
                      <option selected>All</option>
                      <option value="1">New to Old</option>
                      <option value="2">For Rent</option>
                      <option value="3">For Sale</option>
                    </select>
                  </form>
                </div>
              </div> */}
                <div className="col-xl-4 col-lg-6 col-sm-6">
                  <div className="card-box-a card-shadow">
                    <div className="img-box-a">
                      <img
                        src={NexusEliteCounty}
                        alt=""
                        className="img-a img-fluid"
                      />
                      <div className="property-status">Completed</div>
                    </div>
                    <div className="card-overlay">
                      <div className="card-overlay-a-content">
                        <div className="card-header-a">
                          <h2 className="card-title-a">
                            <a href="#">
                              NexusElite County
                              <br />{" "}
                            </a>
                          </h2>
                        </div>
                        <div className="card-body-a">
                          <div className="price-box d-flex">
                            <span className="price-a">
                              kukunoorpally, Siddipet
                            </span>
                          </div>
                          <a
                            onClick={() =>
                              handlePropertySelect("NexusElite County")
                            }
                            //   onClick={() => navigate("/nexusElitePride")}
                            className="link-a"
                          >
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
                              <span>195</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">
                                Minimum Plot Size
                              </h4>
                              <span>146 Sq.yrds</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-6">
                  <div className="card-box-a card-shadow">
                    <div className="img-box-a">
                      <img
                        src={NexusElitePrideImage}
                        alt=""
                        className="img-a img-fluid"
                      />
                      <div className="property-status">Completed</div>
                    </div>
                    <div className="card-overlay">
                      <div className="card-overlay-a-content">
                        <div className="card-header-a">
                          <h2 className="card-title-a">
                            <a href="#">
                              NexusElite Pride
                              <br />{" "}
                            </a>
                          </h2>
                        </div>
                        <div className="card-body-a">
                          <div className="price-box d-flex">
                            <span className="price-a">
                              Bogaram, keesara, Hyderabad
                            </span>
                          </div>
                          <a
                            onClick={() =>
                              handlePropertySelect("NexusElite Pride")
                            }
                            //   onClick={() => navigate("/nexusElitePride")}
                            className="link-a"
                          >
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
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-6">
                  <div className="card-box-a card-shadow">
                    <div className="img-box-a">
                      <img
                        src={NexusEliteJewel}
                        alt=""
                        className="img-a img-fluid"
                      />
                      <div className="property-status">On-Going</div>
                    </div>
                    <div className="card-overlay">
                      <div className="card-overlay-a-content">
                        <div className="card-header-a">
                          <h2 className="card-title-a">
                            <a href="#">
                              NexusElite Jewel
                              <br />{" "}
                            </a>
                          </h2>
                        </div>
                        <div className="card-body-a">
                          <div className="price-box d-flex">
                            <span className="price-a">Bhongir</span>
                          </div>
                          <a
                            onClick={() =>
                              handlePropertySelect("NexusElite Jewel")
                            }
                            //   onClick={() => navigate("/nexusElitePride")}
                            className="link-a"
                          >
                            Click here to view
                            <span className="bi bi-chevron-right"></span>
                          </a>
                        </div>
                        <div className="card-footer-a">
                          <ul className="card-info d-flex justify-content-around">
                            <li>
                              <h4 className="card-info-title">Acres</h4>
                              <span>
                                10.5
                                {/* <sup>2</sup> */}
                              </span>
                            </li>
                            <li>
                              <h4 className="card-info-title">No.of Plots</h4>
                              <span>154</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">
                                Minimum Plot Size
                              </h4>
                              <span>167 Sq.yrds</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-6">
                  <div className="card-box-a card-shadow">
                    <div className="img-box-a">
                      <img
                        src={NexusElitePlatinum}
                        alt=""
                        className="img-a img-fluid"
                      />
                      <div className="property-status">Upcoming</div>
                    </div>
                    <div className="card-overlay">
                      <div className="card-overlay-a-content">
                        <div className="card-header-a">
                          <h2 className="card-title-a">
                            <a href="#">
                              NexusElite Platina
                              <br />{" "}
                            </a>
                          </h2>
                        </div>
                        <div className="card-body-a">
                          <div className="price-box d-flex">
                            <span className="price-a">Raigir</span>
                          </div>
                          <a
                            onClick={() =>
                              handlePropertySelect("NexusElite Platina")
                            }
                            //   onClick={() => navigate("/nexusElitePride")}
                            className="link-a"
                          >
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
                            <span>101</span>
                          </li>
                          <li>
                            <h4 className="card-info-title">Minimum Plot Size</h4>
                            <span>167 Sq.yrds</span>
                          </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="card-box-a card-shadow">
                  <div className="img-box-a">
                    <img src="assets/img/property-7.jpg" alt="" className="img-a img-fluid">
                  </div>
                  <div className="card-overlay">
                    <div className="card-overlay-a-content">
                      <div className="card-header-a">
                        <h2 className="card-title-a">
                          <a href="#">204 Mount
                            <br /> Olive Road Two</a>
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
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="card-box-a card-shadow">
                  <div className="img-box-a">
                    <img src="assets/img/property-8.jpg" alt="" className="img-a img-fluid">
                  </div>
                  <div className="card-overlay">
                    <div className="card-overlay-a-content">
                      <div className="card-header-a">
                        <h2 className="card-title-a">
                          <a href="#">204 Mount
                            <br /> Olive Road Two</a>
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
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="card-box-a card-shadow">
                  <div className="img-box-a">
                    <img src="assets/img/property-10.jpg" alt="" className="img-a img-fluid">
                  </div>
                  <div className="card-overlay">
                    <div className="card-overlay-a-content">
                      <div className="card-header-a">
                        <h2 className="card-title-a">
                          <a href="#">204 Mount
                            <br /> Olive Road Two</a>
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
              </div> */}
              </div>
              {/* <div className="row">
              <div className="col-sm-12">
                <nav className="pagination-a">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabindex="-1">
                        <span className="bi bi-chevron-left"></span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item next">
                      <a className="page-link" href="#">
                        <span className="bi bi-chevron-right"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div> */}
            </div>
          </section>
          {/* End Property Grid Single*/}
        </main>
      )}
      {/* End #main */}
      {/* {openPropertyDetails && <PropertyDetails details={propertyDetails} />} */}
      <Footer handlePropertySelect={handlePropertySelect} />
    </>
  );
}
