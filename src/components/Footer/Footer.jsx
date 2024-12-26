import React from "react";
import logo from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white pt-20 relative">
      {/* Overlapping Newsletter Area */}
      <div className="absolute -top-16 w-full flex justify-center">
        {/* Ensure Newsletter is placed here */}
      </div>

      <div className="justify-items-center mb-5">
        <img src={logo} alt="" />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* About Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-gray-300"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-gray-400 border-t border-gray-700 pt-4">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
