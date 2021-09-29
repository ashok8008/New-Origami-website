import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Header.scss";
import "../NavigationMenu/menu.scss";
import Logo from "../../images/logo.svg";
import MobileMenu from "../NavigationMenu";
import DesktopMenu from "../NavigationMenu/desktop";

import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isTablet = useMediaQuery({ maxWidth: 992 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  // const isDesktop = useMediaQuery({ minWidth: 992 });
  return (
    <header className="main-header">
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          {isTablet ? <MobileMenu /> : <DesktopMenu />}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
