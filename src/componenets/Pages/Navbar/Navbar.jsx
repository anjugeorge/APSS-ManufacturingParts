import React from "react";
import { FaHamburger } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
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
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  const [menu, setMenu] = React.useState(false);
  function openMenu() {
    setMenu(true);
  }
  function closeMenu() {
    setMenu(false);
  }
  return (
    <>
      <div className=" shadow-sm border-b-0 bg-gray-100 dark:bg-[url('/assets/BlackBg.png')] bg-cover bg-center-bottom">
        <nav className="container   mx-auto flex items-center justify-between text-buttonHoverColor dark:text-white font-bold  py-5  font-poppins">
          {/* Logo Section*/}
          <div>
            <a href="/">
              {" "}
              <h3 className="text-xl font-bold flex ">
                <FontAwesomeIcon icon={faGears} />
                APSS
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
          <div>
            <button onClick={() => darkModeHandler()}>
              {dark && <IoSunny />}
              {!dark && <IoMoon />}
            </button>
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
              <div className="absolute start-0 top-12 w-full max-h-full bg-gray-100 dark:bg-[url('/assets/BlackBg.png')] bg-cover bg-center z-10 text-white font-bold">
                <ul>
                  {NavbarMenu.map((item) => (
                    <li
                      className="text-center p-5 text-buttonHoverColor dark:text-white"
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
