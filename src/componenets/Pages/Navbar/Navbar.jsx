import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
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
    title: "Contact Us",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <div className=" ">
        <nav className="container bg-gray-30000 fixed shadow-sm mx-auto flex items-center justify-between text-buttonHoverColor lg:px-32 py-5">
          {/* Logo Section*/}
          <div>
            <a href="#">
              <h3>APSS</h3>
            </a>
          </div>
          {/* Menu Section*/}
          <div>
            <ul className="flex items-center gap-5">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Hamburger Section*/}
          <div className="md:hidden">
            <GiHamburgerMenu />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
