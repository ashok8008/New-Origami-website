import {React, useState} from "react";
import { Nav } from "react-bootstrap";
import footerJson from "./data.json";

const FooterComponent = () => {
  const [isActive, setActive] = useState("");
  const ToggleClass = (e) => {
    setActive(prev => prev===e ? "" : e );  
  };
  return (
    <div className="og-footer-navlink d-lg-flex my-5">
      {footerJson.map((footer, i) => {
        return (
          <Nav key={i} defaultActiveKey="/home" className="flex-column ">
            <span onClick={() =>ToggleClass(footer.title)} className={`footer-title ${isActive === footer.title ? "footer-active" : ""}`}>{footer.title}</span>
            <ul className={`footer-menu ${isActive === footer.title ? "footer-wrap" : ""}`}>
              <li>
              {footer.children.map((links, j) => (
                <Nav.Link key={j} href={links.link}>
                  {links.title}
                </Nav.Link>
              ))}
              </li>
            </ul>
          </Nav>
        );
      })}
    </div>
  );
};

export default FooterComponent;
