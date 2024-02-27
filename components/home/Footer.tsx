import React from "react";
import Link from "next/link";

const socialMediaLinks = [
  { icon: "fab fa-facebook-f", href: "#" },
  { icon: "fab fa-twitter", href: "#" },
  { icon: "fab fa-instagram", href: "#" },
  { icon: "fab fa-linkedin", href: "#" },
];

const products = ["SSO", "User management", "Service Providers"];

const usefulLinks = [
  { label: "Pricing", href: "#" },
  { label: "Support", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const contactInfo = [
  { label: "Address", info: "Delhi Technological University, Rohini sector-17, Bawana Road, Delhi, India" },
  { label: "Email", info: "hello@onekey.com" },
  { label: "Phone", info: "+123 456 789" },
];

const SimpleFooter: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 pt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h5 className="text-lg font-bold mb-4">About Us</h5>
            <p className="text-gray-600 dark:text-gray-300">One Login, Many Services simplifies authentication and user management, providing access to different resources for employees within the organization.</p>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">Our Services</h5>
            <ul>
              {products.map((product, index) => (
                <li key={index} className="mb-2">
                  <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">Useful Links</h5>
            <ul>
              {usefulLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300">
                  {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">Contact Us</h5>
            <ul>
              {contactInfo.map((info, index) => (
                <li key={index} className="mb-2">
                  <span className="text-gray-600 dark:text-gray-300 font-semibold">{info.label}: </span>{info.info}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-700 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">&copy;2024 Onekey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
