import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1A1919] text-neutral-content">
      <div className="lg:mx-48">
        <footer className="footer p-10 mt-12">
          <div>
            <Link to="/" className="text-4xl font-bold mb-3">
              JobsHunter
            </Link>
            <p>
              There are many variations of passages <br /> of Lorem Ipsum , but
              the majority have <br /> suffered alteration in some form.
            </p>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link className="link link-hover">About Us</Link>
            <Link className="link link-hover">Work</Link>
            <Link className="link link-hover">Latest News</Link>
            <Link className="link link-hover">Careers</Link>
          </div>
          <div>
            <span className="footer-title">product</span>
            <Link className="link link-hover">Prototype</Link>
            <Link className="link link-hover">Plans & Pricing</Link>
            <Link className="link link-hover">Customers</Link>
            <Link className="link link-hover">Integrations</Link>
          </div>
          <div>
            <span className="footer-title">support</span>
            <Link className="link link-hover">Help Desk</Link>
            <Link className="link link-hover">Sales</Link>
            <Link className="link link-hover">Become a Partner</Link>
            <Link className="link link-hover">Developers</Link>
          </div>
          <div>
            <span className="footer-title">contact</span>
            <Link className="link link-hover">524 Broadway , NYC</Link>
            <Link className="link link-hover">+1 777 - 978 - 5570</Link>
          </div>
        </footer>
        <footer className="footer items-center p-4 ">
          <p className="text-current">@2023 CareerHub. All Rights Reserved</p>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <p>
              Powered by{" "}
              <span className="text-current font-bold">CareerHub</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
