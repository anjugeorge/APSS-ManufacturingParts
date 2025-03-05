import { Copyright } from "@mui/icons-material";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
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
      <footer className="bg-[url('/assets/footerBg.png')] bg-cover bg-right lg:bg-center bg-no-repeat text-white">
        <div className="container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:mx-auto">
              <h1 className="lg:text-3xl md:text-2xl text-lg text-start font-bold pb-5">
                APSS
              </h1>
              <p className=" text-sm/7 text-start text-gray-300">
                At APSS, we are your one-stop shop for all things mechanical.
                Whether you need industrial machinery parts, general mechanical
                spares, or automotive components, we have got you covered.
              </p>
            </div>
            <div className="lg:mx-auto">
              <h1 className="lg:text-xl md:text-lg text-sm text-start font-bold pb-5">
                Links
              </h1>
              <ul className="text-start text-gray-300 space-y-2 text-sm">
                {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:mx-auto">
              <h1 className="lg:text-xl md:text-lg text-start font-bold pb-5">
                Contact Us
              </h1>
              <div className="space-y-2 text-sm">
                <div className="flex text-gray-300">
                  <MapPin size={20} className="mr-2 mt-1" />
                  <span>
                    201 - 1065 Canadian Place #1175 Mississauga, ON L4W 0C2
                    Canada
                  </span>
                </div>
                <div className="flex text-gray-300">
                  <Phone size={20} className="mr-2 mt-1" />
                  <span>+1 (905) 941-6556</span>
                </div>
                <div className="flex text-gray-300">
                  <Mail size={20} className="mr-2 mt-1" />
                  <span>
                    <a href="mailto:support@apssorg.com">support@apssorg.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-t-gray-500 text-gray-300 text-sm text-center mt-5">
            <p className=" mt-5">
              © {new Date().getFullYear()} APSS. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
