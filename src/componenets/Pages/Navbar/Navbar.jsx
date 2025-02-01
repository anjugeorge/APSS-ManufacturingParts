import React from "react";
import { FaHamburger } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
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
];

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
  function openMenu() {
    setMenu(true);
  }
  function closeMenu() {
    setMenu(false);
  }
  return (
    <>
      <div className=" shadow-sm border-b-0 bg-[url('/assets/APSSBg.png')] bg-cover bg-center-bottom">
        <nav className="container   mx-auto flex items-center justify-between text-white font-bold  py-5  font-poppins">
          {/* Logo Section*/}
          <div>
            <a href="/">
              {" "}
              <h3 className="text-xl font-bold flex">
                <FontAwesomeIcon icon={faGears} />
                APSS
              </h3>
            </a>
          </div>
          {/* Menu Section*/}
          <div className="hidden md:block">
            <ul className="flex items-center gap-5">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Hamburger Section*/}
          <div className="md:hidden relative">
            {menu ? (
              <IoIosCloseCircleOutline onClick={closeMenu} />
            ) : (
              <HiOutlineDotsHorizontal onClick={openMenu} />
            )}
          </div>
        </nav>
        <div>
          {menu && (
            <div className="">
              <div className="absolute start-0 top-12 w-full max-h-full  bg-black z-10 text-white font-bold">
                <ul>
                  {NavbarMenu.map((item) => (
                    <li className="text-center p-5" key={item.id}>
                      <a href={item.link}>{item.title}</a>
                    </li>
                  ))}{" "}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
