import React from "react";
import PropTypes from "prop-types";

const Contact = (props) => {
  return (
    <div>
      <div>
        <div
          className="intro-section"
          style={{ backgroundImage: 'url("/dist/images/hero_1.jpg")' }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                <h1>Contact Us</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                  nihil.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Explore Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="mb-5 text-black">
                  Get <strong>In Touch</strong>
                </h2>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      id="fname"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="text"
                      id="lname"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="eaddress">Email Address</label>
                    <input
                      type="text"
                      id="eaddress"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="tel">Tel. Number</label>
                    <input
                      type="text"
                      id="tel"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name
                      id="message"
                      cols={30}
                      rows={10}
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="btn btn-primary btn-lg px-5"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 ml-auto">
                <div className="mb-3 bg-white">
                  <h3 className="mb-5 text-black">Contact Info</h3>
                  <p className="mb-0 font-weight-bold text-black">Address</p>
                  <p className="mb-4 text-black">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                  <p className="mb-0 font-weight-bold text-black">Phone</p>
                  <p className="mb-4">
                    <a href="#">+1 232 3235 324</a>
                  </p>
                  <p className="mb-0 font-weight-bold text-black">
                    Email Address
                  </p>
                  <p className="mb-0">
                    <a href="#">youremail@domain.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-bg style-1"
          style={{ backgroundImage: 'url("/dist/images/hero_1.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 text-center mx-auto">
                <span className="caption text-white">Testimonials</span>
                <h2 className=" text-center mb-5 text-white">
                  Happy <strong>Clients</strong>
                </h2>
              </div>
            </div>
            <div className="owl-slide owl-carousel owl-testimonial">
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_1.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!”
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_2.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_4.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!”
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_3.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_2.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!”
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_4.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
