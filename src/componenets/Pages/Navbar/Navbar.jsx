import React from "react";
import { FaHamburger, FaList } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { FiList } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";

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

const Navbar = () => {
  const [dark, setDark] = React.useState(false);

  /*const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };*/
  const [menu, setMenu] = React.useState(false);
  function openMenu() {
    setMenu(true);
  }
  function closeMenu() {
    setMenu(false);
  }
  return (
    <>
      <div className=" shadow-lg bg-[#ffffff]">
        <nav className="container    mx-auto flex items-center justify-between font-bold  py-3  font-poppins">
          {/* Logo Section*/}
          <div>
            {/* Hamburger Section*/}
            <div className="md:hidden relative inline-block -inset-y-3">
              {menu ? (
                <IoIosCloseCircleOutline onClick={closeMenu} />
              ) : (
                <FaBars onClick={openMenu} />
              )}
            </div>
            <a href="/">
              {" "}
              <h3 className="text-lg font-bold inline-block pl-3">
                <img src="/assets/APSSLogo.png" className="w-10 h-10" />
              </h3>
            </a>
          </div>
          {/* Menu Section*/}
          <div className="hidden md:block">
            <ul className="flex items-center gap-5">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="text-sm/7 font-semibold">
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/*<div>
            <button onClick={() => darkModeHandler()}>
              {dark && <IoSunny />}
              {!dark && <IoMoon />}
            </button>
          </div>*/}

          <div>
            <a href="mailto:support@apssorg.com">
              <FontAwesomeIcon
                size="xl"
                icon={faEnvelope}
                style={{
                  color: "#082056",
                }}
              />
            </a>
          </div>
        </nav>
        <div>
          {menu && (
            <div className="">
              <div className="absolute start-0 top-16 bg-white w-full max-h-full z-20 text-white font-bold">
                <ul>
                  {NavbarMenu.map((item) => (
                    <li
                      className="text-center p-5 text-black dark:text-white"
                      key={item.id}
                    >
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
