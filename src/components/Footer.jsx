import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Column 1: CS — Ticket System */}
        <div>
          <h6 className="text-xl font-bold mb-3">CS — Ticket System</h6>
          <p className="text-sm opacity-80">
            Providing reliable and efficient customer service solutions since 2026. 
            We help businesses manage tickets, streamline support, and enhance customer satisfaction.
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Company</h6>
          <ul className="space-y-1 text-sm opacity-90">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Mission</a></li>
            <li><a href="#" className="hover:underline">Contact Sales</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Services</h6>
          <ul className="space-y-1 text-sm opacity-90">
            <li><a href="#" className="hover:underline">Products & Services</a></li>
            <li><a href="#" className="hover:underline">Customer Stories</a></li>
            <li><a href="#" className="hover:underline">Download Apps</a></li>
          </ul>
        </div>

        {/* Column 4: Information */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Information</h6>
          <ul className="space-y-1 text-sm opacity-90">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>

        {/* Column 5: Social Links */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Connect With Us</h6>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="flex items-center gap-2">
              <FaFacebookF /> <span>CS — Ticket System on Facebook</span>
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter /> <span>Follow CS — Ticket System on Twitter</span>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram /> <span>CS — Ticket System on Instagram</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>support@cst.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="text-center mt-10 text-sm opacity-70">
        © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;