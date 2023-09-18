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
import jewel_layoutGallery1 from "../assets/img/jewel_layoutGallery1.png";
import jewel_layoutGallery2 from "../assets/img/jewel_layoutGallery2.JPG";
import jewel_layoutGallery3 from "../assets/img/jewel_layoutGallery3.JPG";
import jewel_layoutGallery5 from "../assets/img/jewel_layoutGallery5.jpg";
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

export default function About() {
  const navigate = useNavigate();
  
  const propertyValues = [
    {
      name: "NexusElite County",
      location: "kukunooripally, Siddipet",
      description:
        "The HMDA approved “NexusElite – County” plots at kukunooripally, Siddipet offer all the basic features such as Cement roads, Vaastu compliance, Overhead Electrical distribution network for the power supply and designer street lighting, Internet, beautiful landscaping, Compound Wall, Designed Front wall, Overhead Water Tank, Arch Gate, Each block with Granite Basement, 40 and 30 feets Cement Roads (CC), Footpath (Chambers - Power, Drainage and Harvesting pits), Every Plot with Individual Cement Ramp, Septic Tank, Underground Drainage System, Underground water supply line to each plot, Park (Open Gym, Pergola, Walkway, Cycling bay, Children play area etc.,), Avenue Plantation, Matting Curbing stones on both sides of the road, Water Harvesting pits, Name Boards, The landscape of Open Areas, 24/7 Security, 24/7 Engineering and Architect services, Site and Marketing Office",
      projectHighlights: [
        "Cement Road",
        "Overhead Electricity",
        "Each Plot with ramp",
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
        "Each Plot with ramp",
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
      // youtubeLink: "https://www.youtube.com/embed/0cB0sUzcijY",
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
          extent: "10.5 Acres",
          totalPlots: "154",
          minPlotSize: "167 Sq.yrds",
          permission: "HMDA",
          zone: "Not Applicable",
          lp_No: "007189/LO/HMDA/1446/GHT/2022",
        },
      ],
      projectLayouts: [jewel_projectLayout],
      galleryLayouts: [
        jewel_layoutGallery1,
        jewel_layoutGallery5,
        jewel_layoutGallery2,
        jewel_layoutGallery3,
      ],
      // youtubeLink:"https://www.youtube.com/channel/UCDKluTsm6xhLKahU9EJtWRw"
    },
    {
      name: "NexusElite Platina",
      location: "Raigir",
      description:
        "The YTDA approved “NexusElite – Platinum” plots at Warangal Highway ( Adjacent to Vivera Hotel ) offer all the basic features such as Club House (Library, Indoor Gym, Rooms, Kitchen etc.,), CC roads, Vaastu compliance, Underground Electrical distribution network for the power supply and designer street lighting, Internet, beautiful landscaping, Compound Wall, Designed Front wall, Overhead Water Tank, Arch Gate, Each block with Granite Basement, 40 and 30 feets Cement Roads (CC), Footpath (Chambers - Power, Drainage and Harvesting pits), Every Plot with Individual Cement Ramp, Septic Tank, Underground Drainage System, Underground water supply line to each plot, Park (Open Gym, Pergola, Walkway, Cycling bay, Children play area etc.,), Avenue Plantation, Matting Curbing stones on both sides of the road, Water Harvesting pits, Name Boards, The landscape of Open Areas, 24/7 Security, 24/7 Engineering and Architect services, Site and Marketing Office.",
      // projectHighlights: ["Cement Road", "Underground Electricity", "24x7 Security", "Each Plot with ramp","40'' & 30'' Feet wide road","Beautiful entrance arch" ,"Each block of Plots CRS wall"],
      // locationHighlights: ["10 Mins drive to ORR","15 mins drive to Pocharam SEZ","Beside Holy Mary Engineer College","5 Mins drive to Ghatkesar or Keesara","30 mins drive ECIL X Road or Uppal Circle"],
      QuickSummary: [
        {
          developerName: "NexusElite Infra Developers",
          projectName: "NexusElite Platina",
          extent: "20 Acres",
          // totalPlots: "100",
          // minPlotSize: "167 Sq.yrds",
          permission: "YTDA",
          // zone: "R1",
          // lp_No: "000135/LO/Plg/HMDA/2020"
        },
      ],
      // projectLayouts: [jewel_projectLayout],
      // galleryLayouts: [jewel_layoutGallery1,jewel_layoutGallery2,jewel_layoutGallery3],
      // youtubeLink:"https://www.youtube.com/embed/0cB0sUzcijY"
    },
  ];
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [openPropertyDetails, setOpenPropertyDetails] = useState(false);

  const handlePropertySelect = (val) => {
    let details = propertyValues.filter((each) => each.name === val);
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
          handlePropertySelect={handlePropertySelect}
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
          {/* End #main */}
          <Footer handlePropertySelect={handlePropertySelect} />
        </>
      )}
    </>
  );
}
