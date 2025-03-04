import { Copyright } from "@mui/icons-material";
import React from "react";
const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "/about-us",
  },
  {
    id: 3,
    title: "How We Works",
    link: "/how-we-works",
  },
  {
    id: 4,
    title: "Our Products",
    link: "/products",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "/contact-us",
  },
];
const Footer = () => {
  return (
    <div>
      {" "}
      {/*<footer>
        {" "}
        <div className="bg-[#0c2566]">
          <div className="container py-20 flex flex-col items-center text-white">
            <a href="/">
              {" "}
              <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
                APSS
              </h1>
            </a>

            <div>
              <ul className="flex items-center gap-5">
                {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-xs text-center pb-5 pt-2">
              Copyright <Copyright className="text-xs"></Copyright>2025. All
              Rights Reserved.
            </span>
          </div>
        </div>
      </footer>*/}
      <footer>
        {" "}
        <div className="bg-buttonHoverColor">
          <div className="container py-20 flex flex-col items-center text-white">
            <a href="/">
              {" "}
              <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold pb-5 lg:pb-10">
                APSS
              </h1>
            </a>

            <div>
              <ul className="flex flex-col lg:flex-row items-center gap-5">
                {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-xs text-center pb-5 pt-2">
              Copyright <Copyright className="text-xs"></Copyright>2025. All
              Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
