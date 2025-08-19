// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   IoHomeOutline,
//   IoNewspaperOutline,
//   IoFileTrayStackedOutline,
// } from "react-icons/io5";
// import { FaGun } from "react-icons/fa6";
// import { FaRegMoneyBillAlt } from "react-icons/fa";
// import { IoIosContact, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

// import "./NavMenu.css";

// const NavMenu = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [collapsed, setCollapsed] = useState(true);
//   const [iconRotation, setIconRotation] = useState(0);

//   const toggleMenu = (menuName) => {
//     setActiveMenu((prev) => (prev === menuName ? null : menuName));
//   };

//   const toggleCollapse = () => {
//     setIconRotation((prevRotation) => prevRotation + 360);
//     setCollapsed((prev) => {
//       // Zawsze zamykamy otwarte submenu przy zwijaniu/rozwijaniu
//       setActiveMenu(null);
//       // Zmieniamy stan zwinięcia
//       return !prev;
//     });
//   };

//   const renderMenuItem = (icon, title, path, submenuKey, submenuItems) => {
//     // --- KLUCZOWA ZMIANA TUTAJ ---
//     // Tworzymy klon ikony, dodając JEDNOCZEŚNIE klasę i styl.
//     // To gwarantuje, że każda obracana ikona ma klasę `.nav-icon` z animacją.
//     const rotatedIcon = React.cloneElement(icon, {
//       className: "nav-icon",
//       style: { transform: `rotate(${iconRotation}deg)` },
//     });

//     if (collapsed) {
//       return (
//         <li className="nav-main_menu">
//           <div className="nav-link" onClick={toggleCollapse}>
//             {rotatedIcon}
//           </div>
//         </li>
//       );
//     }

//     return (
//       <li className="nav-main_menu">
//         {submenuKey ? (
//           // Element z submenu
//           <div className="nav-link" onClick={() => toggleMenu(submenuKey)}>
//             {rotatedIcon}
//             <span className="nav-title">{title}</span>
//             <span className="nav-arrow">
//               {activeMenu === submenuKey ? (
//                 <IoIosArrowUp />
//               ) : (
//                 <IoIosArrowDown />
//               )}
//             </span>
//           </div>
//         ) : (
//           // Zwykły link
//           <Link
//             to={path || "/"}
//             className="nav-link"
//             onClick={() => setActiveMenu(null)}
//           >
//             {rotatedIcon}
//             <span className="nav-title">{title}</span>
//           </Link>
//         )}

//         {submenuKey && (
//           <ul
//             className={`nav-submenu ${activeMenu === submenuKey ? "open" : ""}`}
//           >
//             {submenuItems.map((item, idx) => (
//               <li key={idx}>
//                 <Link to={item.path || "/"} className="nav-sublink">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </li>
//     );
//   };

//   return (
//     <ul className={`navmenu__container ${collapsed ? "collapsed" : ""}`}>
//       <li className="nav-main_menu">
//         <section className="nav-logo" onClick={toggleCollapse}>
//           <span className="nav-title nav-title-www">Pjoter WWW</span>
//           <MdKeyboardDoubleArrowLeft
//             className="nav-icon"
//             style={{
//               transform: `rotate(${
//                 collapsed ? iconRotation : iconRotation + 180
//               }deg)`,
//             }}
//           />
//         </section>
//       </li>

//       {/* --- KLUCZOWA ZMIANA TUTAJ --- */}
//       {/* Przekazujemy "czyste" ikony, bez className. Klasa zostanie dodana w renderMenuItem */}
//       {renderMenuItem(<IoHomeOutline />, "Home", "/")}
//       {renderMenuItem(<IoNewspaperOutline />, "Aktualności", "/")}
//       {renderMenuItem(<IoFileTrayStackedOutline />, "Oferta", "/", "oferta", [
//         { label: "Pełna oferta" },
//         { label: "Paintball dla dorosłych" },
//         { label: "Wycieczki szkolne" },
//       ])}
//       {renderMenuItem(<FaGun />, "Nasz Poligon", "/")}
//       {renderMenuItem(<FaRegMoneyBillAlt />, "Cennik", "/", "cennik", [
//         { label: "Plan podstawowy" },
//         { label: "Plan premium" },
//       ])}
//       {renderMenuItem(<IoIosContact />, "Kontakt", "/")}
//     </ul>
//   );
// };

// export default NavMenu;

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

  const renderMenuItem = (icon, title, path, submenuKey, submenuItems) => {
    // Obracamy każdą ikonę niezależnie od tego czy ma submenu
    const rotatedIcon = React.cloneElement(icon, {
      className: "nav-icon",
      style: {
        transform: `rotate(${iconRotation}deg)`,
        transition: "transform 0.3s",
      },
    });

    return (
      <li className="nav-main_menu">
        {submenuKey ? (
          <div className="nav-link" onClick={() => toggleMenu(submenuKey)}>
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
            onClick={() => setActiveMenu(null)} // <-- tu dodajemy
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
                collapsed ? iconRotation : iconRotation + 180
              }deg)`,
              transition: "transform 0.3s",
            }}
          />
        </section>
      </li>

      {renderMenuItem(<IoHomeOutline />, "Home", "/")}
      {renderMenuItem(<IoNewspaperOutline />, "Aktualności", "/")}
      {renderMenuItem(<IoIosFolder />, "Oferta", "/", "oferta", [
        { label: "Pełna oferta" },
        { label: "Paintball dla dorosłych" },
        { label: "Wycieczki szkolne" },
      ])}
      {renderMenuItem(<FaGun />, "Nasz Poligon", "/")}
      {renderMenuItem(<FaRegMoneyBillAlt />, "Cennik", "/", "cennik", [
        { label: "Plan podstawowy" },
        { label: "Plan premium" },
      ])}
      {renderMenuItem(<IoIosContact />, "Kontakt", "/")}
    </ul>
  );
};

export default NavMenu;
