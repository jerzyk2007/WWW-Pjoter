import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const menuItems = [
  { name: "Strona Główna", path: "/", splatColor: "#ff6347" },
  {
    name: "Nasze Pola",
    splatColor: "#32cd32",
    submenu: [
      { name: "Arena Leśna", path: "/pola/arena-lesna" },
      { name: "Speedball", path: "/pola/speedball" },
      { name: "Forteca", path: "/pola/forteca" },
    ],
  },
  { name: "Cennik", path: "/cennik", splatColor: "#1e90ff" },
  { name: "Galeria", path: "/galeria", splatColor: "#ffeb3b" },
  {
    name: "Rezerwacja",
    splatColor: "#ff4500",
    submenu: [
      { name: "Rezerwacja Online", path: "/rezerwacja/online" },
      { name: "Voucher Podarunkowy", path: "/rezerwacja/voucher" },
      { name: "Organizacja Imprez", path: "/rezerwacja/imprezy" },
    ],
  },
  { name: "Kontakt", path: "/kontakt", splatColor: "#9400d3" },
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
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSubmenuToggle = (itemName) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };

  const handleLinkClick = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="brand-title" onClick={handleLinkClick}>
          PAINTBALL
        </NavLink>

        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul
          className={`nav-links ${isMenuOpen ? "open" : ""} ${
            hasInteracted ? "user-interacted" : ""
          }`}
        >
          {menuItems.map((item) => {
            const contrastColor = getContrastColor(item.splatColor);
            return (
              <li
                key={item.name}
                className={`nav-item ${
                  item.submenu ? "nav-item--has-submenu" : ""
                }`}
                style={{
                  "--splat-color": item.splatColor,
                  "--hover-text-color": contrastColor,
                }}
              >
                {item.submenu ? (
                  <>
                    <button
                      className="submenu-toggle"
                      onClick={() => handleSubmenuToggle(item.name)}
                    >
                      {item.name}
                    </button>
                    <ul
                      className={`submenu ${
                        openSubmenu === item.name ? "open" : ""
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <NavLink to={subItem.path} onClick={handleLinkClick}>
                            {subItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink to={item.path} onClick={handleLinkClick}>
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
