import React from "react";
import "./Footer.css";
import image from "../../UI/Facebook.png";
import image2 from "../../UI/instgram.png";
import image3 from "../../UI/Twitter.png";
import image4 from "../../UI/Location.png";
import image5 from "../../UI/Phone.png";
import image6 from "../../UI/letter.svg";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-3 mt-md-0 mt-3">
          <h5 className=" footerTitle">YourCar</h5>
          <p className="Footerp">
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find
          </p>
          <p className="Footerp ">
            we are dedicated to providing our customers with a first-class car
            buying, selling, and renting experience
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text">News Letter</h5>
          <p className="Footerp ">
            Subscribe to our news letter for
            <span className="anotherline">
              updates, news and exclusive offers
            </span>
          </p>
          <input type="email" className="footerEmail" placeholder="Email" /><button className="footerbutton">Subscribe</button>
          <div>
            <img src={image} alt="facebook logo" className="Footerlogos" />
            <img src={image2} alt="twitter logo" className="Footerlogos" />
            <img src={image3} alt="instgram logo" className="Footerlogos" />
          </div>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text">Contact</h5>
          <div className="footer-collector">
            <img src={image4} alt="location" />
            <div>
              <p>
                2038 2nd Avenue,{" "}
                <span className="">Las Vegas, United States</span>
              </p>
            </div>
          </div>
          <div className="footer-collector">
            <img src={image5} alt="phone" />
            <div className="footer-text">
              01444773421423 <p>01477678449405</p>
            </div>
          </div>
          <div className="footer-collector">
            <img src={image6} alt="envolp" />
            <p>info@YourCar.com</p>
          </div>
        </div>
      </div>
      <hr class="divider"></hr>
    </div>

    <div className="footer-copyright text-center py-3 copyrigth">
      © Copyright 2023 · YourCar All rights reserved Osama Islam
    </div>
  </footer>
);

export default Footer;
