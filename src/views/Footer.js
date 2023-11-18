import { useNavigate } from "react-router-dom";

export default function Footer(props) {
  const { handlePropertySelect } = props;
  const navigate = useNavigate();
  return (
    <>
      <section class="section-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-7">
              <div class="widget-a">
                <div class="w-header-a">
                  <h3 class="w-title-a text-brand">About Us</h3>
                </div>
                <div class="w-body-a">
                  <p class="w-text-a color-text-a">
                    With a decade of unparalleled experience in residential
                    layouts, Nexus Elite Infra Developers is spearheaded by a
                    management team dedicated to providing the best investment
                    and housing solutions. We are driven by the pursuit of
                    offering affordability, amenities, and excellent
                    infrastructure to our clients. Your journey with Nexus Elite
                    is not just about owning a property; it's about experiencing
                    the pinnacle of quality, commitment and innovation in real
                    estate development. Welcome to a future where your
                    investment transcends time and trends.
                  </p>
                </div>
                <div class="w-footer-a">
                  <ul class="list-unstyled">
                    <li class="color-a">
                      <span class="color-text-a">Phone .</span> +91 83748 46106
                    </li>
                    <li class="color-a">
                      <span class="color-text-a">Email .</span>{" "}
                      info@nexuseliteinfradevelopers.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div class="col-sm-12 col-md-4 section-md-t3">
              <div class="widget-a">
                <div class="w-header-a">
                  <h3 class="w-title-a text-brand"></h3>
                </div>
                <div class="w-body-a">
                  <div class="w-body-a">
                    <ul class="list-unstyled"></ul>
                  </div>
                </div>
              </div>
            </div> */}
            <div class="col-sm-12 col-md-5 section-md-t3">
              <div class="widget-a">
                <div class="w-header-a">
                  <h3 class="w-title-a text-brand">Our sites</h3>
                </div>
                <div class="w-body-a">
                  <ul class="list-unstyled">
                    <li class="item-list-a">
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a
                        onClick={() =>
                          handlePropertySelect("NexusElite County")
                        }
                      >
                        NexusElite County
                      </a>
                    </li>
                    <li class="item-list-a">
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a
                        onClick={() => handlePropertySelect("NexusElite Pride")}
                      >
                        NexusElite Pride
                      </a>
                    </li>
                    <li class="item-list-a">
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a
                        onClick={() => handlePropertySelect("NexusElite Jewel")}
                      >
                        NexusElite Jewel
                      </a>
                    </li>
                    <li class="item-list-a">
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a
                        onClick={() =>
                          handlePropertySelect("NexusElite Platina")
                        }
                      >
                        NexusElite Platina
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="nav-footer">
                <ul className="list-inline">
                  <li
                    className="list-inline-item"
                    onClick={() => {
                      navigate("/");
                      props.setOpenPropertyDetails &&
                        props.setOpenPropertyDetails(false);
                    }}
                  >
                    <a>Home</a>
                  </li>
                  <li
                    className="list-inline-item"
                    onClick={() => {
                      navigate("/about");
                      props.setOpenPropertyDetails &&
                        props.setOpenPropertyDetails(false);
                    }}
                  >
                    <a>About</a>
                  </li>
                  <li
                    className="list-inline-item"
                    onClick={() => {
                      navigate("/properties");
                      props.setOpenPropertyDetails &&
                        props.setOpenPropertyDetails(false);
                    }}
                  >
                    <a>Properties</a>
                  </li>
                  <li
                    className="list-inline-item"
                    onClick={() => {
                      navigate("/contact");
                      props.setOpenPropertyDetails &&
                        props.setOpenPropertyDetails(false);
                    }}
                  >
                    <a>Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="socials-a">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/profile.php?id=61550926918337"
                      target="_blank"
                    >
                      <i className="bi bi-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.youtube.com/@nexuselite04"
                      target="_blank"
                    >
                      <i className="bi bi-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/company/nexus-elite-infra-developers/"
                      target="_blank"
                    >
                      <i className="bi bi-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://wa.link/8shgjg" target="_blank">
                      <i className="bi bi-whatsapp" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://instagram.com/nexus_elite_pvtltd?igshid=MzRIODBiNWFIZA=="
                      target="_blank"
                    >
                      <i className="bi bi-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="credits"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
