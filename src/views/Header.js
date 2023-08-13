import { Link } from "react-router-dom";

export default function Header() {
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
              <li className="nav-item">
                <a className="nav-link active">
                  <Link to={{ pathname: "/" }}>Home</Link>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link ">
                  <Link to={{ pathname: "/about" }}>About</Link>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="property-grid.html">
                  Properties
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link ">
                  <Link to={{ pathname: "/contact" }}>Contact</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
