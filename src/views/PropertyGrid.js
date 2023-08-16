import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import NexusEliteCounty from "../assets/img/property-1.jpg";
import NexusElitePrideImage from "../assets/img/property-3.jpg";
import NexusEliteJewel from "../assets/img/property-6.jpg";
import NexusElitePlatinum from "../assets/img/property-6.jpg";
import PropertyDetails from "./PropertyDetails";
import jewel_layoutGallery1 from "../assets/img/jewel_layoutGallery1.png";
import jewel_layoutGallery2 from "../assets/img/jewel_layoutGallery2.JPG";
import jewel_layoutGallery3 from "../assets/img/jewel_layoutGallery3.JPG";
import jewel_projectLayout from "../assets/img/jewel_projectLayout.png";
import pride_projectLayout from "../assets/img/pride_projectLayout.jpg";
import pride_LayoutGallery1 from "../assets/img/pride_LayoutGallery1.jpg";
import pride_LayoutGallery2 from "../assets/img/pride_LayoutGallery2.jpg";
import pride_LayoutGallery3 from "../assets/img/pride_LayoutGallery3.jpg";
import pride_LayoutGallery4 from "../assets/img/pride_LayoutGallery4.jpg";
import pride_LayoutGallery5 from "../assets/img/pride_LayoutGallery5.jpg";
import pride_LayoutGallery6 from "../assets/img/pride_LayoutGallery6.jpg";
import county_projectLayout from "../assets/img/county_projectLayout.jpg";
import county_LayoutGallery1 from "../assets/img/county_LayoutGallery1.jpg";
import county_LayoutGallery2 from "../assets/img/county_LayoutGallery2.jpg";
import county_LayoutGallery3 from "../assets/img/county_LayoutGallery3.jpg";
import county_LayoutGallery4 from "../assets/img/county_LayoutGallery4.jpg";
import county_LayoutGallery5 from "../assets/img/county_LayoutGallery5.jpg";
import { useState } from "react";

export default function PropertyGrid() {
  const propertyValues = [
    {
      name: "NexusElite County",
      location: "kukunoorpally, Siddipet",
      description:
        "The HMDA approved “NexusElite – Pride” plots at Bogaram, keesara, Hyderabad offer all the basic features such as CC roads, Vaastu compliance, Underground Electrical distribution network for the power supply and designer street lighting, Internet, beautiful landscaping, Compound Wall, Designed Front wall, Overhead Water Tank, Arch Gate, Each block with Granite Basement, 40 and 30 feets Cement Roads (CC), Footpath (Chambers - Power, Drainage and Harvesting pits), Every Plot with Individual Cement Ramp, Septic Tank, Underground Drainage System, Underground water supply line to each plot, Park (Open Gym, Pergola, Walkway, Cycling bay, Children play area etc.,), Avenue Plantation, Matting Curbing stones on both sides of the road, Water Harvesting pits, Name Boards, The landscape of Open Areas, 24/7 Security, 24/7 Engineering and Architect services, Site and Marketing Office",
      projectHighlights: [
        "Cement Road",
        "Overhead Electricity",
        "Each Polt with ramp",
        "40'' & 30'' feet wide road",
        "24x7 Security",
        "Children's park",
        "Club House",
        "Beautiful entrance arch",
        "Each block of plots with granite basement",
      ],
      locationHighlights: [
        "40 mins drive to ORR",
        "Attached to Karimnagar highway",
        "8 mins drive to kondapochamma temple",
        "10 mins drive to pragnapoor junction",
        "15 mins drive to proposed Duddeda IT Hub",
        "30 mins drive Biotech park Turkapally",
        "Close to Mallanna sagar reservoir (proposed tourism project)",
        "15 mins drive to Siddipet integrated collectorate office",
      ],
      QuickSummary: [
        {
          developerName: "NexusElite Infra Developers",
          projectName: "NexusElite County",
          extent: "13.65 Acres",
          totalPlots: "195",
          minPlotSize: "146 Sq.yrds",
          permission: "DTCP",
          zone: "Not Applicable",
          lp_No: "133/2021/H",
        },
      ],
      projectLayouts: [county_projectLayout],
      galleryLayouts: [
        county_LayoutGallery1,
        county_LayoutGallery2,
        county_LayoutGallery3,
        county_LayoutGallery4,
        county_LayoutGallery5,
      ],
      youtubeLink: "https://www.youtube.com/embed/_kYrrJyUopI",
    },
    {
      name: "NexusElite Pride",
      location: "Bogaram, keesara, Hyderabad",
      description:
        "The HMDA approved “NexusElite – Pride” plots at Bogaram, keesara, Hyderabad offer all the basic features such as CC roads, Vaastu compliance, Underground Electrical distribution network for the power supply and designer street lighting, Internet, beautiful landscaping, Compound Wall, Designed Front wall, Overhead Water Tank, Arch Gate, Each block with Granite Basement, 40 and 30 feets Cement Roads (CC), Footpath (Chambers - Power, Drainage and Harvesting pits), Every Plot with Individual Cement Ramp, Septic Tank, Underground Drainage System, Underground water supply line to each plot, Park (Open Gym, Pergola, Walkway, Cycling bay, Children play area etc.,), Avenue Plantation, Matting Curbing stones on both sides of the road, Water Harvesting pits, Name Boards, The landscape of Open Areas, 24/7 Security, 24/7 Engineering and Architect services, Site and Marketing Office",
      projectHighlights: [
        "Cement Road",
        "Underground Electricity",
        "24x7 Security",
        "Each Polt with ramp",
        "40'' & 30'' Feet wide road",
        "Beautiful entrance arch",
        "Each block of Plots CRS wall",
      ],
      locationHighlights: [
        "10 Mins drive to ORR",
        "15 mins drive to Pocharam SEZ",
        "Beside Holy Mary Engineer College",
        "5 Mins drive to Ghatkesar or Keesara",
        "30 mins drive ECIL X Road or Uppal Circle",
      ],
      QuickSummary: [
        {
          developerName: "NexusElite Infra Developers",
          projectName: "NexusElite Pride",
          extent: "7 Acres",
          totalPlots: "100",
          minPlotSize: "167 Sq.yrds",
          permission: "HMDA",
          zone: "R1",
          lp_No: "000135/LO/Plg/HMDA/2020",
        },
      ],
      projectLayouts: [pride_projectLayout],
      galleryLayouts: [
        pride_LayoutGallery1,
        pride_LayoutGallery2,
        pride_LayoutGallery3,
        pride_LayoutGallery4,
        pride_LayoutGallery5,
        pride_LayoutGallery6,
      ],
      youtubeLink: "https://www.youtube.com/embed/0cB0sUzcijY",
    },
    {
      name: "NexusElite Jewel",
      location: "Bhongir",
      description:
        "The HMDA approved “NexusElite – Jewel” plots at Bhongir Highway offer all the basic features such as CC roads, Vaastu compliance, Underground Electrical distribution network for the power supply and designer street lighting, Internet, beautiful landscaping, Compound Wall, Designed Front wall, Overhead Water Tank, Arch Gate, Each block with Granite Basement, 40 and 30 feets Cement Roads (CC), Footpath (Chambers - Power, Drainage and Harvesting pits), Every Plot with Individual Cement Ramp, Septic Tank, Underground Drainage System, Underground water supply line to each plot, Park (Open Gym, Pergola, Walkway, Cycling bay, Children play area etc.,), Avenue Plantation, Matting Curbing stones on both sides of the road, Water Harvesting pits, Name Boards, The landscape of Open Areas, 24/7 Security, 24/7 Engineering and Architect services, Site and Marketing Office",
      projectHighlights: [
        "Underground Electricity",
        "Model Duplex Villa",
        "Children's play area",
        "Water supply distribution network",
        "Granite basement blocks & individual plot ramps",
        "Foot Path Development with Parking Tiles and Harvesting points",
        "CC roads on north side and south side connecting to the moin road",
        "External Under ground sewerage systern (induding Septic tank) on either side of the road for all plots",
      ],
      locationHighlights: [
        "Near to Proposed Regional Ring Road (RRR)",
        "35-mins Drive to Uppa",
        "Beside Telangana Tourism Ropeway Project Hub",
        "Bhongir Railway Station (Proposed MMTC)",
        "3-mins Drive to District Collectorate",
        "3-mins Drive to Bhongir Bus Stand",
        "5-mins Drive to AIMS Hospital",
        "8-mins Drive to Bibi Nagar",
        "20-mins Drive to Pocharom",
        "15-mins Drive to Infosys, Outer Ring Road (ORR)",
        "2 mins Drive to Govt III College Proposed Central School",
      ],
      QuickSummary: [
        {
          developerName: "NexusElite Infra Developers",
          projectName: "NexusElite Jewel",
          extent: "13.65 Acres",
          totalPlots: "101",
          minPlotSize: "167 Sq.yrds",
          permission: "DTCP",
          zone: "Not Applicable",
          lp_No: "133/2021/H",
        },
      ],
      projectLayouts: [jewel_projectLayout],
      galleryLayouts: [
        jewel_layoutGallery1,
        jewel_layoutGallery2,
        jewel_layoutGallery3,
      ],
      // youtubeLink:"https://www.youtube.com/channel/UCDKluTsm6xhLKahU9EJtWRw"
    },
    {
      name: "NexusElite Platinum",
      location: "Raigir",
      description:
        "The YTDA approved “NexusElite – Platinum” plots at Warangal Highway ( Adjacent to Vivera Hotel ) offer all the basic features such as Club House (Library, Indoor Gym, Rooms, Kitchen etc.,), CC roads, Vaastu compliance, Underground Electrical distribution network for the power supply and designer street lighting, Internet, beautiful landscaping, Compound Wall, Designed Front wall, Overhead Water Tank, Arch Gate, Each block with Granite Basement, 40 and 30 feets Cement Roads (CC), Footpath (Chambers - Power, Drainage and Harvesting pits), Every Plot with Individual Cement Ramp, Septic Tank, Underground Drainage System, Underground water supply line to each plot, Park (Open Gym, Pergola, Walkway, Cycling bay, Children play area etc.,), Avenue Plantation, Matting Curbing stones on both sides of the road, Water Harvesting pits, Name Boards, The landscape of Open Areas, 24/7 Security, 24/7 Engineering and Architect services, Site and Marketing Office.",
      // projectHighlights: ["Cement Road", "Underground Electricity", "24x7 Security", "Each Polt with ramp","40'' & 30'' Feet wide road","Beautiful entrance arch" ,"Each block of Plots CRS wall"],
      // locationHighlights: ["10 Mins drive to ORR","15 mins drive to Pocharam SEZ","Beside Holy Mary Engineer College","5 Mins drive to Ghatkesar or Keesara","30 mins drive ECIL X Road or Uppal Circle"],
      QuickSummary: [
        {
          developerName: "NexusElite Infra Developers",
          projectName: "NexusElite Platinum",
          extent: "20 Acres",
          // totalPlots: "100",
          // minPlotSize: "167 Sq.yrds",
          // permission: "HMDA",
          // zone: "R1",
          // lp_No: "000135/LO/Plg/HMDA/2020"
        },
      ],
      // projectLayouts: [jewel_projectLayout],
      // galleryLayouts: [jewel_layoutGallery1,jewel_layoutGallery2,jewel_layoutGallery3],
      // youtubeLink:"https://www.youtube.com/embed/0cB0sUzcijY"
    },
  ];
  const navigate = useNavigate();
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [openPropertyDetails, setOpenPropertyDetails] = useState(false);

  const handlePropertySelect = (val) => {
    let details = propertyValues.filter((each) => each.name === val);
    setPropertyDetails(details);
    setOpenPropertyDetails(true);
    // navigate("/nexusElitePride")
  };
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
                              NexusElite Platinum
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
                              handlePropertySelect("NexusElite Platinum")
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
      <Footer activeTab="properties" />
    </>
  );
}
