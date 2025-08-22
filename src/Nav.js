// src/components/PaintballMenu/Nav.js

import { useState } from "react";
import { NavLink } from "react-router-dom";
import TargetCursor from "./TargetCursor";
import useMediaQuery from "./hooks/useMediaQuery";
import "./Nav.css";

// const menuItems = [
//   { name: "Strona Główna", path: "/", splatColor: "#ff6347" },
//   {
//     name: "Nasze Pola",
//     splatColor: "#32cd32",
//     submenu: [
//       { name: "Arena Leśna", path: "/pola/arena-lesna" },
//       { name: "Speedball", path: "/pola/speedball" },
//       { name: "Forteca", path: "/pola/forteca" },
//     ],
//   },
//   { name: "Cennik", path: "/cennik", splatColor: "#1e90ff" },
//   { name: "Galeria", path: "/galeria", splatColor: "#ffeb3b" },
//   {
//     name: "Rezerwacja",
//     splatColor: "#ff4500",
//     submenu: [
//       { name: "Rezerwacja Online", path: "/rezerwacja/online" },
//       { name: "Voucher Podarunkowy", path: "/rezerwacja/voucher" },
//       { name: "Organizacja Imprez", path: "/rezerwacja/imprezy" },
//     ],
//   },
//   { name: "Kontakt", path: "/kontakt", splatColor: "#9400d3" },
// ];
const menuItems = [
  { name: "Strona Główna", path: "#", splatColor: "#ff6347" },
  {
    name: "Nasze Pola",
    splatColor: "#32cd32",
    submenu: [
      { name: "Arena Leśna", path: "#" },
      { name: "Speedball", path: "#" },
      { name: "Forteca", path: "#" },
      { name: "Morskie Oko", path: "#" },
    ],
  },
  { name: "Cennik", path: "#", splatColor: "#1e90ff" },
  { name: "Galeria", path: "#", splatColor: "#ffeb3b" },
  {
    name: "Rezerwacja",
    splatColor: "#ff4500",
    submenu: [
      { name: "Rezerwacja Online", path: "#" },
      { name: "Voucher Podarunkowy", path: "#" },
      { name: "Organizacja Imprez", path: "#" },
    ],
  },
  { name: "Kontakt", path: "#", splatColor: "#9400d3" },
];

const getContrastColor = (hexColor) => {
  if (!hexColor) return "#1a1a1a";
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#1a1a1a" : "#f0f0f0";
};

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Dla mobile
  const [hasInteracted, setHasInteracted] = useState(false);
  const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState(null);

  const isDesktop = useMediaQuery("(min-width: 769px)");

  const handleSubmenuToggle = (itemName) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };

  const handleLinkClick = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    setIsMenuOpen(false);
    setOpenSubmenu(null);
    setDesktopSubmenuOpen(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {isDesktop && (
          <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        )}

        <NavLink
          to="/"
          className="brand-title cursor-target"
          onClick={handleLinkClick}
        >
          PAINTBALL
        </NavLink>

        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={() => {
            if (isMenuOpen) {
              setOpenSubmenu(null);
            }
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {menuItems.map((item) => {
            const contrastColor = getContrastColor(item.splatColor);
            return (
              <li
                key={item.name}
                className={`nav-item ${
                  item.submenu ? "nav-item--has-submenu" : ""
                }`}
                onMouseEnter={() => setDesktopSubmenuOpen(item.name)}
                onMouseLeave={() => setDesktopSubmenuOpen(null)}
                style={{
                  "--splat-color": item.splatColor,
                  "--hover-text-color": contrastColor,
                }}
              >
                {item.submenu ? (
                  <>
                    <button
                      // <<< POPRAWKA: Łączymy obie klasy spacją
                      className="submenu-toggle cursor-target"
                      onClick={() => handleSubmenuToggle(item.name)}
                    >
                      {item.name}
                    </button>
                    <ul
                      className={`submenu ${
                        openSubmenu === item.name ? "open" : ""
                      } ${
                        desktopSubmenuOpen === item.name ? "desktop-open" : ""
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <NavLink
                            to={subItem.path}
                            onClick={handleLinkClick}
                            className="cursor-target"
                          >
                            {subItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={handleLinkClick}
                    className="cursor-target"
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
