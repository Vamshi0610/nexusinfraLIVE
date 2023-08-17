import Header from "./Header";
import Footer from "./Footer";
import PropertyDetails from "./PropertyDetails";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import errorToast from "../assets/img/errorToast.jpg";
import successToast from "../assets/img/successToast.jpg";
import { useEffect } from "react";
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

export default function Contact() {
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [openPropertyDetails, setOpenPropertyDetails] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(false);
  const [showToastMsg, setShowToastMsg] = useState("");
  const formRef = React.useRef();
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

  const sendanemail = (e) => {
    e.preventDefault();
    console.log("formRef", formRef);
    var x = document.getElementById("toast");
    emailjs
      .sendForm(
        "service_2u0qt1p",
        "template_cw4i7cf",
        formRef.current,
        "uT5-ASjkm4JDtNtm4"
      )
      .then(
        function (response) {
          x.className = "show";
          setMsgSuccess(true);
          console.log("SUCCESS!", response.status, response.text);
          setShowToastMsg("Submitted successfully");
        },
        function (error) {
          x.className = "show";
          setMsgSuccess(false);
          console.log("FAILED...", error);
          setShowToastMsg("Error occured, Try again");
        }
      );
    document.getElementById("anchorMail").reset();
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  };

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
      <div className="click-closed"></div>
      {openPropertyDetails ? (
        <PropertyDetails
          details={propertyDetails}
          setOpenPropertyDetails={setOpenPropertyDetails}
          handlePropertySelect={handlePropertySelect}
        />
      ) : (
        <>
          <Header activeTab="contact" />

          <main id="main">
            {/* ======= Intro Single ======= */}
            <section className="intro-single">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-8">
                    <div className="title-single-box">
                      <h1 className="title-single">Contact US</h1>
                      <span className="color-text-a">
                        At Nexus Elite, we believe that communication is key to
                        a successful relationship with our clients. That's why
                        we are always available to answer any questions you may
                        have and to keep you updated. Our goal is to ensure that
                        you are fully satisfied with the outcome and that your
                        experience with us is positive and hassle-free.
                        <br />
                        <br />
                        Whether you're looking to invest in real estate, we have
                        the knowledge and expertise to make it happen. Contact
                        us today to schedule a consultation and take the first
                        step towards achieving your real estate goals. We look
                        forward to hearing from you!
                      </span>
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
                          Contact
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </section>
            {/* End Intro Single*/}

            {/* ======= Contact Single ======= */}
            <section className="contact">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="contact-map box">
                      <div id="map" className="contact-map">
                        <iframe
                          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=sri rajyalakshmi complex, nacharam, hansigudaf Oxford&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                          width="100%"
                          height="450"
                          frameborder="0"
                          style={{ border: 0 }}
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 section-t8">
                    <div className="row">
                      <div className="col-md-7">
                        <form
                          ref={formRef}
                          method="post"
                          id="anchorMail"
                          onSubmit={(e) => sendanemail(e)}
                        >
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  id="username"
                                  name="name"
                                  className="form-control form-control-lg form-control-a"
                                  placeholder="Your Name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <input
                                  name="email"
                                  id="useremail"
                                  type="email"
                                  className="form-control form-control-lg form-control-a"
                                  placeholder="Your Email"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  id="usertext"
                                  name="subject"
                                  className="form-control form-control-lg form-control-a"
                                  placeholder="Subject"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  name="message"
                                  id="usermessage"
                                  className="form-control"
                                  cols="45"
                                  rows="8"
                                  placeholder="Message"
                                  required
                                ></textarea>
                              </div>
                            </div>
                            {/* <div className="col-md-12 my-3">
                              <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                              </div>
                            </div> */}

                            <div className="col-md-12 text-center">
                              <button
                                type="submit"
                                className="btn btn-a send-message-button"
                                // onClick={(e)=>sendanemail(e)}
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-5 section-md-t3">
                        <div className="icon-box section-b2">
                          <div className="icon-box-icon">
                            <span className="bi bi-envelope"></span>
                          </div>
                          <div className="icon-box-content table-cell">
                            <div className="icon-box-title">
                              <h4 className="icon-title">Say Hello</h4>
                            </div>
                            <div className="icon-box-content">
                              <p className="mb-1">
                                Email.
                                <span className="color-a">
                                  nexuseliteinfradevelopers@gmail.com
                                </span>
                              </p>
                              <p className="mb-1">
                                Phone.
                                <span className="color-a">+91 83748 46106</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="icon-box section-b2">
                          <div className="icon-box-icon">
                            <span className="bi bi-geo-alt"></span>
                          </div>
                          <div className="icon-box-content table-cell">
                            <div className="icon-box-title">
                              <h4 className="icon-title">Find us in</h4>
                            </div>
                            <div className="icon-box-content">
                              <p className="mb-1">
                                H.No.4-7-83/2/SRC/101 TO 504,
                                <br />
                                SRI RAJYALAKSHMI COMPLEX,
                                <br />
                                NAGENDHAR NAGAR, NACHARAM, HABSIGUDA,
                                <br />
                                HYDERABAD - 500007.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="icon-box">
                          <div className="icon-box-icon">
                            <span className="bi bi-share"></span>
                          </div>
                          <div className="icon-box-content table-cell">
                            <div className="icon-box-title">
                              <h4 className="icon-title">Social networks</h4>
                            </div>
                            <div className="icon-box-content">
                              <div className="socials-footer">
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <a
                                      href="https://www.facebook.com/nexuseliteinfra"
                                      target="_blank"
                                    >
                                      <i
                                        className="bi bi-facebook"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a
                                      href="https://www.youtube.com/channel/UCDKluTsm6xhLKahU9EJtWRw"
                                      target="_blank"
                                    >
                                      <i
                                        className="bi bi-youtube"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </li>
                                  {/* <li className="list-inline-item">
                                    <a href="#" className="link-one">
                                      <i className="bi bi-instagram" aria-hidden="true"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#" className="link-one">
                                      <i className="bi bi-linkedin" aria-hidden="true"></i>
                                    </a>
                                  </li> */}
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
            </section>
            {/* End Contact Single*/}
          </main>
          {/* End #main */}
          <div id="toast">
            <div id="img">
              <img
                src={msgSuccess ? successToast : errorToast}
                height="25px"
                weight="25px"
              />
            </div>
            <div id="desc">{showToastMsg}</div>
          </div>
          <Footer handlePropertySelect={handlePropertySelect} />
        </>
      )}

      {/* <div id="preloader"></div>
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
              className="bi bi-arrow-up-short"></i></a> */}
    </>
  );
}
