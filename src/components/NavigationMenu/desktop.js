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
          <Nav.Link className="menu-item eCommerce" href="#">
            eCommerce
            <div className="navbar-content">
              <Container>
                <Row className="navbar-content-list">
                  <Col className="navbar-col" xs={12} md={4}>
                    <h5>WEBSITE DESIGN & DEVELOPMENT</h5>
                    <Nav.Link href="#">
                      Web Design
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="#">
                      eCommerce Website Design
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="#">
                      Corporate Website Design
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="#">
                      B2B Website Design
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="#">
                      Website Maintenance
                      <Icon.ArrowRight />
                    </Nav.Link>
                    <Nav.Link href="#">
                      Website Consulting
                      <Icon.ArrowRight />
                    </Nav.Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Nav.Link>
          <Nav.Link className="menu-item" href="#">
            Expertise
            <div className="navbar-content ">
              <Container>
                <Row className="navbar-content-list">
                  <Col>
                    <Row>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>IOT</h5>
                        <Nav.Link href="#">
                          Internet of things(IOT)
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Artificial Intelligence
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Chatbot
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Agumented Reality
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Virtual Reality
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>BLPCKCHAIN DEVELOPMENT</h5>
                        <Nav.Link href="#">
                          Backchain App Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Smart Contracts Development & Audit
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          DApp Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Enterprise Blockchain Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Cryptocurrency Wallet Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>DATA INTELLIGENCE</h5>
                        <Nav.Link href="#">
                          Big Data
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Business Intelligence
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Machine Learning
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Data Mining
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Data Analytics
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Data Consulting
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Web Scraping
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Power BI
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Tableau
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>COMPLIANCES</h5>
                        <Nav.Link href="#">
                          GDPR
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          HIPAA
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Corporate Website Design
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          B2B Website Design
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Website Maintenance
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Website Consulting
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>DEVOPS AUTOMATION</h5>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}></Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </Nav.Link>
          <Nav.Link className="menu-item" href="#">
            Technologies
            <div className="navbar-content ">
              <Container>
                <Row className="navbar-content-list">
                  <Col>
                    <Row>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>MOBILE</h5>
                        <Nav.Link href="#">
                          iOS App Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Android App Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          React Native App Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Flutter App Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Progressive Web App Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>BACKEND</h5>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="#">
                            PHP Development
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="#">
                            Node js
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="#">
                            Java Development
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="#">
                            ROR
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="#">
                            Sharepoint
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="#">
                            Python
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <Nav.Link href="#">
                          .NET Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>CMS DEVELOPMENTE</h5>
                        <Nav.Link href="#">
                          Wordpress Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Joomla Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                        <Nav.Link href="#">
                          Drupal Development
                          <Icon.ArrowRight />
                        </Nav.Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>FRONTEND</h5>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="#">
                            Angular js
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="#">
                            React js
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="#">
                            MEAN Stack
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="#">
                            MERN Stack
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>CRM & ERP</h5>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="#">
                            SalesForce
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="#">
                            Sugar CRM
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="#">
                            Odoo
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="#">
                            Britix
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                      </Col>
                      <Col className="navbar-col" xs={12} md={4}>
                        <h5>CLOUD</h5>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="#">
                            AWS
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="#">
                            Google Cloud
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="#">
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
                          <Nav.Link href="#">
                            Ethereum
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="#">
                            Hedera Hashgraph
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="#">
                            Hyperledger
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="#">
                            R3 Corda
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="#">
                            Quorum
                            <Icon.ArrowRight />
                          </Nav.Link>
                          <Nav.Link href="#">
                            EOS
                            <Icon.ArrowRight />
                          </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Nav.Link href="#">
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
          <Nav.Link className="menu-item" href="#">
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
