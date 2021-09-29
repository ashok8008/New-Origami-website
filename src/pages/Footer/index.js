import React from "react";
import "./footer.scss";
import { Container} from "react-bootstrap";
import FooterComponent from "../../components/Footer";
import FooterContact from "../../components/Footer/contact";
import FooterContent from "../../components/Footer/content";
import FooterCopyright from "../../components/Footer/copyright";

const Footer = () => {
  return (
    <footer className="og-footer">
      <Container>
        {/* Footer - Get In Touch Content Section */}
        <FooterContent />

        {/* Footer - Nav Links */}
        <FooterComponent />

        {/* Footer - Contacts Us */}
        <FooterContact />


        <hr className="my-4 mx-auto w-100" />

        {/* Footer Copyright */}
        <FooterCopyright />
      </Container>
    </footer>
  );
};

export default Footer;
