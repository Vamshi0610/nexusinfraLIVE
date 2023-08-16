import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import LandingPage from "./views/LandingPage";
import About from "./views/About";
import Contact from "./views/Contact";
import PropertyGrid from "./views/PropertyGrid";
import Sendemail from "./sendemail";
import jewel_layoutGallery1 from "./assets/img/jewel_layoutGallery1.png";
import jewel_layoutGallery2 from "./assets/img/jewel_layoutGallery2.JPG";
import jewel_layoutGallery3 from "./assets/img/jewel_layoutGallery3.JPG";
import jewel_projectLayout from "./assets/img/jewel_projectLayout.png";
import pride_projectLayout from "./assets/img/pride_projectLayout.jpg";
import pride_LayoutGallery1 from "./assets/img/pride_LayoutGallery1.jpg";
import pride_LayoutGallery2 from "./assets/img/pride_LayoutGallery2.jpg";
import pride_LayoutGallery3 from "./assets/img/pride_LayoutGallery3.jpg";
import pride_LayoutGallery4 from "./assets/img/pride_LayoutGallery4.jpg";
import pride_LayoutGallery5 from "./assets/img/pride_LayoutGallery5.jpg";
import pride_LayoutGallery6 from "./assets/img/pride_LayoutGallery6.jpg";
import county_projectLayout from "./assets/img/county_projectLayout.jpg";
import county_LayoutGallery1 from "./assets/img/county_LayoutGallery1.jpg";
import county_LayoutGallery2 from "./assets/img/county_LayoutGallery2.jpg";
import county_LayoutGallery3 from "./assets/img/county_LayoutGallery3.jpg";
import county_LayoutGallery4 from "./assets/img/county_LayoutGallery4.jpg";
import county_LayoutGallery5 from "./assets/img/county_LayoutGallery5.jpg";

function App() {
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
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage propertyValues={propertyValues}/>} />
        <Route exact path="/home" element={<LandingPage propertyValues={propertyValues}/>} />
        <Route exact path="/about" element={<About propertyValues={propertyValues}/>} />
        <Route exact path="/properties" element={<PropertyGrid propertyValues={propertyValues}/>} />
        <Route exact path="/contact" element={<Contact propertyValues={propertyValues}/>} />
        {/* <Route exact path="/contactForm" element={<Sendemail />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
