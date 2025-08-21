import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline, IoNewspaperOutline } from "react-icons/io5";

import { FaGun } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import {
  IoIosContact,
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosFolder,
} from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

import "./NavMenu.css";

const NavMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [collapsed, setCollapsed] = useState(true);
  const [iconRotation, setIconRotation] = useState(0);

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const toggleCollapse = () => {
    setIconRotation((prev) => prev + 360);
    setCollapsed((prev) => {
      setActiveMenu(null);
      return !prev;
    });
  };

  const handleMenuItemClick = (submenuKey) => {
    if (collapsed) {
      toggleCollapse();
    } else {
      if (submenuKey) {
        toggleMenu(submenuKey);
      } else {
        setActiveMenu(null);
      }
    }
  };

  const renderMenuItem = (icon, title, path, submenuKey, submenuItems) => {
    const rotatedIcon = React.cloneElement(icon, {
      className: "nav-icon",
      style: {
        transform: `rotate(${iconRotation}deg)`,
        transition: "transform 0.8s",
      },
    });

    return (
      <li className="nav-main_menu">
        {submenuKey ? (
          <div
            className="nav-link"
            onClick={() => handleMenuItemClick(submenuKey)}
          >
            {rotatedIcon}
            <span className="nav-title">{title}</span>
            <span className="nav-arrow">
              {activeMenu === submenuKey ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </span>
          </div>
        ) : (
          <Link
            to={path || "/"}
            className="nav-link"
            onClick={() => handleMenuItemClick()}
          >
            {rotatedIcon}
            <span className="nav-title">{title}</span>
          </Link>
        )}

        {submenuKey && !collapsed && (
          <ul
            className={`nav-submenu ${activeMenu === submenuKey ? "open" : ""}`}
          >
            {submenuItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path || "/"} className="nav-sublink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <ul className={`navmenu__container ${collapsed ? "collapsed" : ""}`}>
      <li className="nav-main_menu">
        <section className="nav-logo" onClick={toggleCollapse}>
          <span className="nav-title nav-title-www">Pjoter WWW</span>
          <MdKeyboardDoubleArrowLeft
            className="nav-icon"
            style={{
              transform: `rotate(${
                collapsed ? iconRotation + 180 : iconRotation
              }deg)`,
              transition: "transform 0.3s",
            }}
          />
        </section>
      </li>

      {renderMenuItem(<IoHomeOutline />, "Home", "/")}
      {renderMenuItem(<IoNewspaperOutline />, "Aktualności", "/")}
      {renderMenuItem(<IoIosFolder />, "Oferta", "/", "oferta", [
        { label: "Pełna oferta", path: "/oferta" },
        { label: "Paintball dla dorosłych", path: "/oferta/paintball" },
        { label: "Wycieczki szkolne", path: "/oferta/wycieczki" },
      ])}
      {renderMenuItem(<FaGun />, "Nasz Poligon", "/poligon")}
      {renderMenuItem(<FaRegMoneyBillAlt />, "Cennik", "/", "cennik", [
        { label: "Plan podstawowy", path: "/cennik/podstawowy" },
        { label: "Plan premium", path: "/cennik/premium" },
      ])}
      {renderMenuItem(<IoIosContact />, "Kontakt", "/kontakt")}
    </ul>
  );
};

export default NavMenu;
