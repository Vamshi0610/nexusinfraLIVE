import { useNavigate } from "react-router-dom";

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
          <a className="navbar-brand text-brand" href="index.html">
            NexusElite
          </a>

          <div
            className="navbar-collapse collapse justify-content-center"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item" onClick={() => navigate("/")}>
                <a
                  className={
                    props.activeTab == "home" ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </a>
              </li>
              <li className="nav-item" onClick={() => navigate("/about")}>
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
              <li className="nav-item" onClick={() => navigate("/contact")}>
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
