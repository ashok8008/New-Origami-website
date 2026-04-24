import React, { useState } from "react";
import "./menu.scss";
import menuJson from "./menu.json";

const HamMenu = () => {
  const [openMenu, setOpenMenu] = useState();
  const [selectedMenu, setSelectedMenu] = useState(-1);
  const [selectedSubMenu, setSelectedSubMenu] = useState(-1);

  const menuClick = (index) => {
    setSelectedMenu(index);
    setSelectedSubMenu(-1);
  };

  const subMenuClick = (index) => {
    setSelectedSubMenu((prevState) => {
      return prevState === -1 ? index : -1;
    });
  };

  const onMenuBackClick = () => {
    setSelectedMenu(-1);
    setSelectedSubMenu(-1);
  };

  const navBarClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="mo-toggle-menu-mobile">
      <button class={`humberger ${openMenu ? "active-menu":""}`} onClick={navBarClick}>
				<span class="line line-1">&nbsp;</span>
				<span class="line line-2">&nbsp;</span>
				<span class="line line-3">&nbsp;</span>
			</button>

      <ul
        className={`main-menu link-effect d-lg-flex ${
          openMenu ? "first-open" : ""
        }`}
      >
        {menuJson.map((menu, i) => (
          <li className={`overlay-open ${menu.children && menu.children.length ? 'child': ''}`}>
            <a
              href={menu.link}
              className="click-arrow link-event"
            >
              {menu.label}
            </a>
             <i onClick={menuClick.bind(this, i)} className="dropdown-arrow"></i>
            <div
              className={`sub-menu-wrap block-list service-link ${
                selectedMenu === i ? "open" : ""
              }`}
            >
              <span className="back" onClick={onMenuBackClick}>
                <i className="back-arrow"></i>Back
              </span>
              <ul className="sub-dropdown shadow-effect">
                {menu.children.map((submenu, j) => (
                  <li className={`link-line ${submenu.children && submenu.children.length ? 'child': ''}`} data={`${i}_menu_${j}`}>
                    <span
                      className={`heading-link remove-after click-arrow ${
                        selectedSubMenu === j ? "arrow" : ""
                      }`}
                      onClick={subMenuClick.bind(this, j)}
                    >
                      <a href={submenu.link}>
                        <span className="double-line">{submenu.label}</span>
                      </a>
                      <i class="dropdown-arrow"></i>
                    </span>
                    {submenu.children ? (
                      <div
                        className={`sub-drop-wrap child-wrap block-list ${
                          selectedSubMenu === j ? "open" : ""
                        }`}
                      >
                        <ul className="sub-menu grey-effect">
                          {submenu.children.map((innermenu, k) => (
                            <li className="menu-item" data="csk_2">
                              <a href={innermenu.link}>{innermenu.label}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HamMenu;
