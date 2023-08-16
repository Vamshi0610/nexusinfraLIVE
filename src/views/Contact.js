import Header from "./Header";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import errorToast from "../assets/img/errorToast.jpg";
import successToast from "../assets/img/successToast.jpg";

export default function Contact() {
  const [msgSuccess, setMsgSuccess] = useState(false);
  const [showToastMsg, setShowToastMsg] = useState("");
  const formRef = React.useRef();
  const navigate = useNavigate();
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
  return (
    <>
      <div className="click-closed"></div>
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
                    At Nexus Elite, we believe that communication is key to a
                    successful relationship with our clients. That's why we are
                    always available to answer any questions you may have and to
                    keep you updated. Our goal is to ensure that you are fully
                    satisfied with the outcome and that your experience with us
                    is positive and hassle-free.
                    <br />
                    <br />
                    Whether you're looking to invest in real estate, we have the
                    knowledge and expertise to make it happen. Contact us today
                    to schedule a consultation and take the first step towards
                    achieving your real estate goals. We look forward to hearing
                    from you!
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
                    <li className="breadcrumb-item active" aria-current="page">
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
      <Footer activeTab="contact" />

      {/* <div id="preloader"></div>
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
              className="bi bi-arrow-up-short"></i></a> */}
    </>
  );
}
