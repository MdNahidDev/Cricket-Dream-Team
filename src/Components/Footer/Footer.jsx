import React from "react";

const Footer = ({ setToggle }) => {
  return (
    <footer className="footer mt-8 sm:footer-horizontal bg-neutral text-neutral-content p-10 bottom-0">
      <nav>
        <h5 className="font-bold text-xl">About Us</h5>
        <div className="text-gray-500">
          <p>
            We are a passionate team <br></br>dedicated to providing the best
            <br></br>services to our customers.
          </p>
        </div>
      </nav>
      <nav>
        <h5 className="font-bold text-xl">Quick Links</h5>
        <div className="text-gray-500 ml-4">
          <ol>
            <li
              onClick={() => setToggle(true)}
              className="list-disc link link-hover"
            >
              Home
            </li>
            <li className="list-disc link link-hover">Services</li>
            <li className="list-disc link link-hover">About</li>
            <li className="list-disc link link-hover">Contact</li>
          </ol>
        </div>
      </nav>
      <nav>
        <h5 className="font-bold text-xl">Subscribe</h5>
        <div className="text-gray-500">
          <p>
            Subscribe to our newsletter for the<br></br>latest updates.
          </p>
        </div>
        <div>
          <div className="join">
            <div>
              <label className="input validator join-item">
                <input
                  className="text-gray-400"
                  type="email"
                  placeholder="Enter your e-mail"
                  required
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <button className="btn join-item bg-linear-to-r from-amber-200 to-pink-300">
              Subscribe
            </button>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
