import {
  faFacebook,
  faGithub,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const icons = [
  {
    link: "facebook.com",
    icon: faFacebook,
  },
  {
    link: "twitter.com",
    icon: faTwitter,
  },
  {
    link: "instagram.com",
    icon: faInstagram,
  },
  {
    link: "pinterest.com",
    icon: faPinterest,
  },
  {
    link: "github.com",
    icon: faGithub,
  },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", url: "#" },
      { label: "Careers", url: "#" },
      { label: "Press", url: "#" },
      { label: "Blog", url: "#" },
    ],
  },
  {
    title: "Pages",
    links: [
      { label: "Login", url: "#" },
      { label: "Register", url: "#" },
      { label: "Add list", url: "#" },
      { label: "Contact", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", url: "#" },
      { label: "About Us", url: "#" },
      { label: "Team", url: "#" },
      { label: "Privacy", url: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", url: "#" },
      { label: "Service", url: "#" },
      { label: "Product", url: "#" },
      { label: "Pricing", url: "#" },
    ],
  },
];

function Footer() {
  return (
    <div className="">
      <div className="flex flex-wrap justify-around px-28">
        <div className="basis-1/4">
          <h6 className="text-gray-900 text-lg font-semibold mb-2">Hospital</h6>
          <p className="text-gray-700 pb-4">
            The next generation of design systems.
          </p>
          <div className="flex space-x-4">
            {icons.map((item: any, index: number) => {
              return (
                <a
                  href={item.link}
                  className="hover:scale-110 duration-300 transition-all ease-in-out"
                  key={index}
                >
                  <FontAwesomeIcon icon={item.icon} size="lg" />
                </a>
              );
            })}
          </div>
        </div>
        {footerLinks.map((section, index) => (
          <div
            key={index}
            className="pb-4 flex flex-col gap-2 justify-between text-start"
          >
            <h6 className="text-gray-700 text-base text-start">{section.title}</h6>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.url}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="bg-gray-800 mt-5 mb-4" />
      <div className="text-center text-gray-500 text-sm">
        Copyright © 2023 Designed By Mr.Punit Dwivedi Created By Mr.Aryan Raj &
        Handled By Mr.Sanju Kumar.
      </div>
    </div>
  );
}

export default Footer;
