import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-black text-white ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Column 1: CS — Ticket System */}
        <div>
          <h6 className="footer-title text-xl font-bold mb-3">CS — Ticket System</h6>
          <p className="text-sm opacity-80">
            Providing reliable customer service solutions since 2026.
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-3">Company</h6>
          <ul className="space-y-1 text-sm opacity-90">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Sales</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-3">Services</h6>
          <ul className="space-y-1 text-sm opacity-90">
            <li><a href="#">Products & Services</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Download Apps</a></li>
          </ul>
        </div>

        {/* Column 4: Information */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-3">Information</h6>
          <ul className="space-y-1 text-sm opacity-90">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Join Us</a></li>
          </ul>
        </div>

        {/* Column 5: Social Links */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-3">Social Links</h6>
          <ul className="space-y-1 text-sm opacity-90">
            <li>@CS — Ticket System (Facebook)</li>
            <li>@CS — Ticket System (Twitter)</li>
            <li>@CS — Ticket System (Instagram)</li>
            <li>support@cst.com</li>
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