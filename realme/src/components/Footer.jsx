import React from "react";
const Footer = () => (
  <footer className="contact bg-dark text-white py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h5>About Us</h5>
          <p>Learn more about Realme and our mission to innovate.</p>
        </div>
        <div className="col-md-3">
          <h5>Contact Us</h5>
          <p>Email: support@realme.com</p>
          <p>Phone: +92-300-1234567</p>
        </div>
        
        <div className="col-md-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#home" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#mobiles" className="text-white">
                Mobiles
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Follow Us</h5>
          <ul className="list-unstyled d-flex gap-3">
            <li>
              <a href="#" className="text-white">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="container p-4"></div>
      </div>
      <div className="text-center mt-3">
        © 2024 Realme. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
