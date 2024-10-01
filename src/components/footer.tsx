import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h4 className="text-uppercase">MNTN</h4>
            <p>Get out there & discover your next slope, mountain & destination!</p>
            <p className="text-mute">
              Copyright 2023 MNTN, Inc.{" "}
              <a href="#" className="text-mute">
                Terms & Privacy
              </a>
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="text-warning">More on The Blog</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">About MNTN</a></li>
              <li><a href="#" className="text-white">Contributors & Writers</a></li>
              <li><a href="#" className="text-white">Write For Us</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
              <li><a href="#" className="text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="text-warning">More on MNTN</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">The Team</a></li>
              <li><a href="#" className="text-white">Jobs</a></li>
              <li><a href="#" className="text-white">Press</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
