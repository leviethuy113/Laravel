import React from "react";
import PropTypes from "prop-types";

const Buy = (props) => {
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
                <h1>Buy, Sell, Bid</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                  nihil.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="side-box mb-5">
                  <h3>Categories</h3>
                  <ul className="list-unstyled auction-categories">
                    <li>
                      <a href="#">
                        Shoes <span>2109</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Electronics <span>102</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Clothing <span>392</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Watches <span>291</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Accessories <span>391</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="side-box">
                  <h3>Recent Bidders</h3>
                  <ul className="list-unstyled bidders">
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">1.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="/dist/images/person_1.jpg"
                            alt="Image"
                            className="mr-2"
                          />
                          <span>Jean Smith</span>
                        </div>
                      </div>
                      <span className="price">$40</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">2.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="/dist/images/person_2.jpg"
                            alt="Image"
                            className="mr-2"
                          />
                          <span>Chris Wilson</span>
                        </div>
                      </div>
                      <span className="price">$87</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">3.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="/dist/images/person_3.jpg"
                            alt="Image"
                            className="mr-2"
                          />
                          <span>Kyle Anderson</span>
                        </div>
                      </div>
                      <span className="price">$310</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">1.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="/dist/images/person_1.jpg"
                            alt="Image"
                            className="mr-2"
                          />
                          <span>Jean Smith</span>
                        </div>
                      </div>
                      <span className="price">$40</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">2.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="/dist/images/person_2.jpg"
                            alt="Image"
                            className="mr-2"
                          />
                          <span>Chris Wilson</span>
                        </div>
                      </div>
                      <span className="price">$87</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">3.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="/dist/images/person_3.jpg"
                            alt="Image"
                            className="mr-2"
                          />
                          <span>Kyle Anderson</span>
                        </div>
                      </div>
                      <span className="price">$310</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">1.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="/dist/images/person_1.jpg"
                            alt="Image"
                            className="mr-2"
                          />
                          <span>Jean Smith</span>
                        </div>
                      </div>
                      <span className="price">$40</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">2.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="/dist/images/person_2.jpg"
                            alt="Image"
                            className="mr-2"
                          />
                          <span>Chris Wilson</span>
                        </div>
                      </div>
                      <span className="price">$87</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">3.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="/dist/images/person_3.jpg"
                            alt="Image"
                            className="mr-2"
                          />
                          <span>Kyle Anderson</span>
                        </div>
                      </div>
                      <span className="price">$310</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mr-2">2.</span>
                        <div className="d-flex align-items-center">
                          <img
                            src="/dist/images/person_2.jpg"
                            alt="Image"
                            className="mr-2"
                          />
                          <span>Chris Wilson</span>
                        </div>
                      </div>
                      <span className="price">$87</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="row auctions-entry">
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="item">
                      <div>
                        <strong className="price">$95</strong>
                        <a href="item-single.html">
                          <img
                            src="/dist/images/product_1.jpg"
                            alt="Image"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="p-4">
                        <h3>
                          <a href="item-single.html">Pinky Shoes</a>
                        </h3>
                        <div className="d-flex mb-2">
                          <span>Shoes</span>
                          <span className="ml-auto">4 bids</span>
                        </div>
                        <a href="item-single.html" className="btn btn-bid">
                          Submit a Bid
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="item">
                      <div>
                        <strong className="price">$30</strong>
                        <a href="item-single.html">
                          <img
                            src="/dist/images/product_2.jpg"
                            alt="Image"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="p-4">
                        <h3>
                          <a href="item-single.html">Eye Glass Eye Protector</a>
                        </h3>
                        <div className="d-flex mb-2">
                          <span>Eye Glasses</span>
                          <span className="ml-auto">10 bids</span>
                        </div>
                        <a href="item-single.html" className="btn btn-bid">
                          Submit a Bid
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="item">
                      <div>
                        <strong className="price">$199</strong>
                        <a href="item-single.html">
                          <img
                            src="/dist/images/product_3.jpg"
                            alt="Image"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="p-4">
                        <h3>
                          <a href="item-single.html">Black Leather Jacket</a>
                        </h3>
                        <div className="d-flex mb-2">
                          <span>Clothing</span>
                          <span className="ml-auto">24 bids</span>
                        </div>
                        <a href="item-single.html" className="btn btn-bid">
                          Submit a Bid
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="item">
                      <div>
                        <strong className="price">$1,999</strong>
                        <a href="item-single.html">
                          <img
                            src="/dist/images/product_4.jpg"
                            alt="Image"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="p-4">
                        <h3>
                          <a href="item-single.html">MacBook 15-Inch Laptop</a>
                        </h3>
                        <div className="d-flex mb-2">
                          <span>Clothing</span>
                          <span className="ml-auto">224 bids</span>
                        </div>
                        <a href="item-single.html" className="btn btn-bid">
                          Submit a Bid
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="item">
                      <div>
                        <strong className="price">$777</strong>
                        <a href="item-single.html">
                          <img
                            src="/dist/images/product_5.jpg"
                            alt="Image"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="p-4">
                        <h3>
                          <a href="item-single.html">iPad</a>
                        </h3>
                        <div className="d-flex mb-2">
                          <span>Electronics</span>
                          <span className="ml-auto">11 bids</span>
                        </div>
                        <a href="item-single.html" className="btn btn-bid">
                          Submit a Bid
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="item">
                      <div>
                        <strong className="price">$78</strong>
                        <a href="item-single.html">
                          <img
                            src="/dist/images/product_6.jpg"
                            alt="Image"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="p-4">
                        <h3>
                          <a href="item-single.html">Shoe Sneakers</a>
                        </h3>
                        <div className="d-flex mb-2">
                          <span>Shoes</span>
                          <span className="ml-auto">4 bids</span>
                        </div>
                        <a href="item-single.html" className="btn btn-bid">
                          Submit a Bid
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="item">
                      <div>
                        <strong className="price">$1,999</strong>
                        <a href="item-single.html">
                          <img
                            src="/dist/images/product_7.jpg"
                            alt="Image"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="p-4">
                        <h3>
                          <a href="item-single.html">iMac</a>
                        </h3>
                        <div className="d-flex mb-2">
                          <span>Electronics</span>
                          <span className="ml-auto">293 bids</span>
                        </div>
                        <a href="item-single.html" className="btn btn-bid">
                          Submit a Bid
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="item">
                      <div>
                        <strong className="price">$450</strong>
                        <a href="item-single.html">
                          <img
                            src="/dist/images/product_8.jpg"
                            alt="Image"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="p-4">
                        <h3>
                          <a href="item-single.html">iWatch</a>
                        </h3>
                        <div className="d-flex mb-2">
                          <span>Electronics</span>
                          <span className="ml-auto">123 bids</span>
                        </div>
                        <a href="item-single.html" className="btn btn-bid">
                          Submit a Bid
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="item">
                      <div>
                        <strong className="price">$30</strong>
                        <a href="item-single.html">
                          <img
                            src="/dist/images/product_2.jpg"
                            alt="Image"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="p-4">
                        <h3>
                          <a href="item-single.html">Eye Glass Eye Protector</a>
                        </h3>
                        <div className="d-flex mb-2">
                          <span>Eye Glasses</span>
                          <span className="ml-auto">10 bids</span>
                        </div>
                        <a href="item-single.html" className="btn btn-bid">
                          Submit a Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-5">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg">
                  <div className="custom-pagination">
                    <a href="#" className="active">
                      1
                    </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section pt-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mb-5">
                  <span className="caption">How?</span>
                  <h2 className="text-black">
                    How <strong>It Works</strong>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="step">
                    <span className="wrap-icon icon-user" />
                    <h3>Register</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sed consequatur quaerat magnam sequi nobis ut et iure.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="step">
                    <span className="wrap-icon icon-money" />
                    <h3>Buy or Bid</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sed consequatur quaerat magnam sequi nobis ut et iure.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="step">
                    <span className="wrap-icon icon-glass" />
                    <h3>Submit a bid</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sed consequatur quaerat magnam sequi nobis ut et iure.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="step last">
                    <span className="wrap-icon icon-trophy" />
                    <h3>Win</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sed consequatur quaerat magnam sequi nobis ut et iure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-7">
                  <h2 className="text-black mb-4">
                    Create an account and start Buy, Bid or Sell Now!
                  </h2>
                  <a href="#" className="btn btn-primary">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Buy.propTypes = {};

export default Buy;
