import React from "react";
import { Container, Navbar, Nav, Button, Row, Col } from "react-bootstrap";
import Logo from "../../images/logo.svg";
import * as Icon from "react-feather";

const DesktopMenu = () => {
  return (
    <>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link className="menu-item services" href="/Services/Web-Design-Services">
            Services
            <div className="navbar-content ">
              <Container>
                <Row className="navbar-content-list">
                  <Col className="navbar-col" xs={12} md={4}>
                    <h5>WEBSITE DESIGN & DEVELOPMENT</h5>
                    <Nav.Link href="/Services/Web-Design-Services">
                      Web Design
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="/Services/ecommerce-Website-Services">
                      eCommerce Website Design
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="/Services/corporate-Website-Services">
                      Corporate Website Design
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="/Services/B2B-Website-Design">
                      B2B Website Design
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="/Services/Website-Maintenance">
                      Website Maintenance
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="/Services/Website-Consulting">
                      Website Consulting
                      <Icon.ArrowRight />
                    </Nav.Link>
                  </Col>
                  <Col className="navbar-col" xs={12} md={4}>
                    <h5>APP DEVELOPMENT</h5>
                    <Nav.Link href="/Services/Hybrid-App-Development">
                      Hybrid App Development
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="/Services/Wearable-App-Development">
                      Wearable App Development
                      <Icon.ArrowRight />
                    </Nav.Link>
                    {/* <Nav.Link href="#">
                      Corporate Website Design
                      <Icon.ArrowRight />
                    </Nav.Link> */}
                    <Nav.Link href="/Services/Backend-Development">
                      Backend & API
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="/Services/Mobile-Application-Testing">
                      Mobile App Testing
                      <Icon.ArrowRight />
                    </Nav.Link>
                  </Col>
                  <Col className="navbar-col" xs={12} md={4}>
                    <Col>
                      <h5>DISCOVERY & DESIGN</h5>
                      <Nav.Link href="/Services/Discovery&Design">
                        DISCOVERY & DESIGN
                        <Icon.ArrowRight />
                      </Nav.Link>
                      <Nav.Link href="/Services/Research&Planning">
                        Research & Planning
                        <Icon.ArrowRight />
                      </Nav.Link>
                      <Nav.Link href="/Services/UI-Design">
                        Interface Design
                        <Icon.ArrowRight />
                      </Nav.Link>
                      <Nav.Link href="/Services/UX-Design">
                        User Experience Design
                        <Icon.ArrowRight />
                      </Nav.Link>
                    </Col>
                    <Col className="border-top">
                      <Nav.Link href="/Services/Prototype-Development">
                        PROTOTYPING
                        <Icon.ArrowRight />
                      </Nav.Link>
                      <Nav.Link href="/Services/MVP-Development">
                        MVP
                        <Icon.ArrowRight />
                      </Nav.Link>
                      <Nav.Link href="/Services/Quality-Assurance">
                        QUALITY ASSURANCE
                        <Icon.ArrowRight />
                      </Nav.Link>
                    </Col>
                  </Col>
                </Row>
              </Container>
            </div>
          </Nav.Link>
          <Nav.Link className="menu-item eCommerce" href="/ecommerce/Ecommerce-App-Development">
            eCommerce
            <div className="navbar-content">
              <Container>
                <Row className="navbar-content-list">
                  <Col className="navbar-col" xs={12} md={4}>
                    <h5>WEBSITE DESIGN & DEVELOPMENT</h5>
                    <Nav.Link href="/ecommerce/Ecommerce-App-Development">
                      eCommerce App Development
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="/ecommerce/Ecommerce-Web-Development">
                      eCommerce Web Development
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="/ecommerce/B2B-Web-Design">
                      B2B Website Design
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="/ecommerce/Magento-Development">
                      Magento Development
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="/ecommerce/WooCommerce-Development">
                      WooCommerce Development
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="/ecommerce/Shopify-Development">
                      Shopify Development
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="/ecommerce/Prestashop-Development">
                      Prestashop Development
                      <Icon.ArrowRight />
                    </Nav.Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Nav.Link>
          <Nav.Link className="menu-item" href="/expertise/IoT-App-Development">
            Expertise
            <div className="navbar-content ">
              <Container>
                <Row className="navbar-content-list">
                  <Col>
                    <Row>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>IOT</h5>
                        <Nav.Link href="/expertise/IoT-App-Development">
                          Internet of things(IOT)
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Artificial-Intelligence">
                          Artificial Intelligence
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Chatbot">
                          Chatbot
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Agumented-Reality">
                          Agumented Reality
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Virtual-Reality">
                          Virtual Reality
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <Nav.Link href="/expertise/Blockchain-Development">
                          <h5 className="hoverRed">
                            BLOCKCHAIN DEVELOPMENT<Icon.ArrowRight />
                          </h5>
                        </Nav.Link>
                        <Nav.Link href="/expertise/Blockchain-App-Development">
                          Blockchain App Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Smart-Contracts-Development-&-Audit">
                          Smart Contracts Development & Audit
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/DApp-Development">
                          DApp Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Enterprise-Blockchain-Development">
                          Enterprise Blockchain Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Cryptocurrency-Wallet-Development">
                          Cryptocurrency Wallet Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Cryptocurrency-Exchange-Development">
                          Cryptocurrency Exchange Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <Nav.Link href="/expertise/Data-Intelligence">
                          <h5 className="hoverRed">
                            DATA INTELLIGENCE<Icon.ArrowRight />
                          </h5>
                        </Nav.Link>
                        <Nav.Link href="/expertise/Big-Data">
                          Big Data
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Business-Intelligence">
                          Business Intelligence
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Machine-Learning">
                          Machine Learning
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Data-Mining">
                          Data Mining
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Data-Analytics">
                          Data Analytics
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Data-Consulting">
                          Data Consulting
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Web-Scraping">
                          Web Scraping
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Power-BI">
                          Power BI
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/Tableau">
                          Tableau
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="navbar-col" xs={12} md={4}>
                        <Nav.Link href="/expertise/Compliances">
                          <h5 className="hoverRed">
                            COMPLIANCES<Icon.ArrowRight />
                          </h5>
                        </Nav.Link>
                        <Nav.Link href="/expertise/GDPR">
                          GDPR
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/expertise/HIPAA">
                          HIPAA
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <Nav.Link href="/expertise/Devops-Automation">
                          <h5 className="hoverRed">
                            DEVOPS AUTOMATION<Icon.ArrowRight />
                          </h5>
                        </Nav.Link>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}></Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </Nav.Link>
          <Nav.Link className="menu-item" href="/technologies/iOS-App-Development">
            Technologies
            <div className="navbar-content ">
              <Container>
                <Row className="navbar-content-list">
                  <Col>
                    <Row>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>MOBILE</h5>
                        <Nav.Link href="/technologies/iOS-App-Development">
                          iOS App Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/technologies/Android-App-Development">
                          Android App Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/technologies/React-Native-App-Development">
                          React Native App Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/technologies/Flutter-App-Development">
                          Flutter App Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/technologies/Progressive-Web-App-Development">
                          Progressive Web App Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>BACKEND</h5>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="/technologies/PHP-Development">
                            PHP Development
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="/technologies/Node-js">
                            Node js
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="/technologies/Java-Development">
                            Java Development
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="/technologies/ROR">
                            ROR
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="/technologies/Sharepoint">
                            Sharepoint
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="/technologies/Python">
                            Python
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <Nav.Link href="/technologies/DotNET-Development">
                          .NET Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>CMS DEVELOPMENTE</h5>
                        <Nav.Link href="/technologies/Wordpress-Development">
                          Wordpress Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/technologies/Joomla-Development">
                          Joomla Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="/technologies/Drupal-Development">
                          Drupal Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>FRONTEND</h5>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="/technologies/Angular-js">
                            Angular js
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="/technologies/React-js">
                            React js
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="/technologies/MEAN-Stack">
                            MEAN Stack
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="/technologies/MERN-Stack">
                            MERN Stack
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>CRM & ERP</h5>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="/technologies/SalesForce">
                            SalesForce
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="/technologies/Sugar-CRM">
                            Sugar CRM
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="/technologies/Odoo">
                            Odoo
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="/technologies/Britix">
                            Britix
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>CLOUD</h5>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="/technologies/AWS">
                            AWS
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="/technologies/Google-Cloud">
                            Google Cloud
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="/technologies/Azure">
                            Azure
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>BLOCKCHAIN</h5>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="/technologies/Ethereum">
                            Ethereum
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="/technologies/Hedera-Hashgraph">
                            Hedera Hashgraph
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="/technologies/Hyperledger">
                            Hyperledger
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="/technologies/R3-Corda">
                            R3 Corda
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="/technologies/Quorum">
                            Quorum
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="/technologies/EOS">
                            EOS
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="/technologies/Stellar">
                            Stellar
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}></Col>
                      <Col className="navbar-col" xs={12} md={4}></Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </Nav.Link>
          <Nav.Link className="menu-item" href="/Staffing">
            Staffing
          </Nav.Link>
          <Nav.Link className="menu-item" href="#">
            About Us
          </Nav.Link>
        </Nav>
        <Button>GET IN TOUCH</Button>
      </Navbar.Collapse>
    </>
  );
};

export default DesktopMenu;
