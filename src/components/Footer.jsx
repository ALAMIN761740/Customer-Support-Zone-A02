import React from 'react';

const Footer = () => {
    return (
         <footer className="footer footer-center p-6 bg-base-200 text-base-content mt-10">
      
      <aside>
        <p className="font-bold text-lg">
          Customer Support Zone
        </p>
        <p>
          Providing reliable customer service solutions since 2026.
        </p>
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </aside>

    </footer>
    );
};

export default Footer;