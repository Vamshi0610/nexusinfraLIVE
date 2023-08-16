import { useNavigate } from "react-router-dom";
import NexusEliteLogo from "../assets/img/nexusEliteLogo.svg";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div className="container">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {/* <a className="navbar-brand text-brand" onClick={() => navigate("/")}>
            NexusElite
          </a> */}
          <img
            src={NexusEliteLogo}
            height="80px"
            style={{ cursor: "pointer" , marginRight: "30px"}}
            onClick={() => {
              navigate("/");
              props.setOpenPropertyDetails &&
                props.setOpenPropertyDetails(false);
            }}
          />

          <div
            className="navbar-collapse collapse justify-content-center"
            id="navbarDefault"
          >
            <ul
              className="navbar-nav"
              onclick="event.stopPropagation()"
              style={{ backgroundColor: "white" }}
            >
              <li
                className="nav-item"
                onClick={() => {
                  navigate("/");
                  props.setOpenPropertyDetails &&
                    props.setOpenPropertyDetails(false);
                }}
              >
                <a
                  className={
                    props.activeTab == "home" ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  navigate("/about");
                  props.setOpenPropertyDetails &&
                    props.setOpenPropertyDetails(false);
                }}
              >
                <a
                  className={
                    props.activeTab == "about" ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </a>
              </li>
              <li className="nav-item" onClick={() => navigate("/properties")}>
                <a
                  className={
                    props.activeTab == "properties"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Properties
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  navigate("/contact");
                  props.setOpenPropertyDetails &&
                    props.setOpenPropertyDetails(false);
                }}
              >
                <a
                  className={
                    props.activeTab == "contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
