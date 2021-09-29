import {React, useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Banner from "../../images/banner.svg";
import Appimg from "../../images/services-app.svg";
import bussiness from "../../images/business.svg";
import cyber from "../../images/cyber.svg";
import blockchain from "../../images/blockchain.svg";
import design from "../../images/design.svg";
import test from "../../images/test.svg";
import pillar1 from "../../images/pillar1.svg";
import pillar2 from "../../images/pillar2.svg";
import pillar3 from "../../images/pillar3.svg";
import pillar4 from "../../images/pillar4.svg";
import health from "../../images/health.svg";
import media from "../../images/media.svg";
import fintech from "../../images/fintech.svg";
import analytics from "../../images/analytics.svg";
import game from "../../images/gaming.svg";
import market from "../../images/market.svg";
import clients from "../../images/clients1.svg";
import figma from "../../images/technology_image/figma.svg";
import './home.scss';
import { Container, Row, Col, Card   } from "react-bootstrap";
import * as Icon from 'react-feather';
import { withRouter } from "react-router";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2000, min: 1430 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1430, min: 1023 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

 const Home = () => {
    const [isActive, setActive] = useState("");
    const ToggleClass = (e) => {
      setActive(prev => prev===e ? "" : e );  
    };
    return (
      <div className="home-wrapper">
        <div className="home-banner pb-5 border-bottom">
          <Container>
            <Row className="align-items-center">
              <Col className="left-content"> 
                <h5>World-Class Digital Products.On-<span className="red">Time</span>. On-<span className="red">Budget</span>. On-<span className="red">Point</span>.</h5>
                <p>We are an acclaimed and certified web and mobile app design and development company committed to digital innovations and inventions.</p>
                <a className="red" href="#">Lets create something together <Icon.ArrowRight /></a>
              </Col>
              <Col className="right-image" xs lg="4">
                <img
                  src={Banner}
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="combined-section">
          <div className="ourmoto">
            <Container>
              <Row className="align-items-center">
                <Col xs="12" lg="6" className="left-content">
                  <p className="red">Our Motto</p>
                  <h1>Deliver only the<span className="red"> Best</span></h1>
                </Col>
                <Col xs="12" lg="6" className="right-content">
                  <h5>We are a leading global technology provider that helps businesses achieve efficiency, scalability, and lower cost of ownership by accelerating their digital transformation journey.</h5>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="ourservices">
            <Container>
              <Row>
                <Col lg="4" className="left-content">
                  <p className="red">Our Services</p>
                  <h1>Taking care of every <span className="red">digital</span> aspect</h1>
                </Col>
                <Col lg="8" className="right-content">
                  <Row>
                    <Col lg="6">
                      <div className="card card-block">
                        <img src={Appimg} className="card-img-top" alt="Appimg"/>
                        <div className="card-body">
                          <h5 className="card-title">Application Development</h5>
                          <p className="card-text">Mobile apps provide thrilling and engaging experiences that connect users with brands. Native, hybrid, and cross-platform mobile application development offers new and lasting competitive advantages.</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="card card-block">
                        <img src={bussiness} className="card-img-top" alt="Appimg"/>
                        <div className="card-body">
                          <h5 className="card-title">Business Analysis</h5>
                          <p className="card-text">Capitalizing on data is a straight path to revealing actionable insights on operations, customers, and company products. BI and Analytics define data-driven decisions for performance and growth..</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="card card-block">
                        <img src={cyber} className="card-img-top" alt="Appimg"/>
                        <div className="card-body">
                          <h5 className="card-title">Cyber Security</h5>
                          <p className="card-text">Cybersecurity is as relevant as ever, especially for large-scale projects. Managing security risks when handling sensitive data or business products is a priority in any modern software project..</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="card card-block">
                        <img src={blockchain} className="card-img-top" alt="Appimg"/>
                        <div className="card-body">
                          <h5 className="card-title">Blockchain</h5>
                          <p className="card-text">From cryptocurrencies to supply chain management, Blockchain’s decentralized, distributed, and public ledger offers the highest level of security, transparency, and traceability..</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="card card-block">
                        <img src={design} className="card-img-top" alt="Appimg"/>
                        <div className="card-body">
                          <h5 className="card-title">Design</h5>
                          <p className="card-text">Engaging and interactive UI/UX designs escalate conversions, reducing customer churn, and promote loyalty and advocacy. A great UI/UX design turns software into experiences.</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="card card-block">
                        <img src={test} className="card-img-top" alt="Appimg"/>
                        <div className="card-body">
                          <h5 className="card-title">QA & Testing</h5>
                          <p className="card-text">Quality Assurance is all about creating the best possible product for your customers. A proper QA & Testing process reveals valuable insights, mitigates downtime, and improves user experience.</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="whyus">
            <Container className="whyus-section">
              <Row className="align-items-center">
                <Col xs="12" lg="6" className="left-content">
                  <p className="red">Why us?</p>
                  <h1>Four pillars of <span className="red">Origami</span></h1>
                  <p className="descripe">We highly appreciate working with innovative and ambitious entrepreneurs. This is why we are our clients favourites.</p>
                </Col>
                <Col xs="12" lg="6" className="right-content">
                  <Row className="rc-image">
                    <Col className="pillar-image">
                        <img src={pillar1}/>
                    </Col>
                    <Col className="pillar-image">
                        <img src={pillar2}/>
                    </Col>
                  </Row>
                  <Row className="rc-image">
                    <Col className="pillar-image">
                      <img src={pillar3}/>
                    </Col>
                    <Col className="pillar-image">
                        <img src={pillar4}/>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="expertise">
          <Container className="expertise-section">
            <Row className="top-content">
              <Col>
                <p className="red">Our Expertise</p>
                <h1>We love being  <span className="red">Diversified</span></h1>
                <p className="descripe">We take pride in the expertise we have over diverse industustries. We have implemented out of the box web and mobile applications in these industries.</p>
              </Col>
            </Row>
          </Container>
          <div className="expertise-image">
            <Container className="expertise-img-section">
              <Row>
                <Col className="bottom-content">
                  <Row className="rc-image">
                    <Col xs="6" lg="2" className="exp-image">
                        <img src={game}/>
                        <h5>Fantasy Gaming</h5>
                    </Col>
                    <Col xs="6" lg="2" className="exp-image">
                        <img src={health}/>
                        <h5>Healthcare</h5>
                    </Col>
                    <Col xs="6" lg="2" className="exp-image">
                        <img src={analytics}/>
                        <h5>Analytics</h5>
                    </Col>
                    <Col xs="6" lg="2"className="exp-image">
                        <img src={fintech}/>
                        <h5>Fintech</h5>
                    </Col>
                    <Col xs="6" lg="2" className="exp-image">
                        <img src={media}/>
                        <h5>Entertainment & Media</h5>
                    </Col>
                    <Col xs="6" lg="2" className="exp-image">
                        <img src={market}/>
                        <h5>Ecommerce & Marketplace</h5>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="clients">
          <Container className="clients-section">
            <Row className="top-content">
              <Col>
                <p className="red">Our Clients</p>
                <h1>We go  <span className="red">above and beyond </span>together</h1>
                </Col>
            </Row>
            <div className="bottom-content">
              <Carousel 
              responsive={responsive}
              itemclass="p-2"
              autoPlaySpeed={1000}
              keyBoardControl={true}
              infinite={true}
              swipeable={true}
              draggable={true}
              autoPlay={ true }
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              >
                <Card className="align-items-center p-3 mx-3">
                  <Card.Img variant="top" src={clients} />
                  <Card.Body>
                    <Card.Text>
                    Capitalizing on data is a straight path to revealing actionable insights on operations, customers, and company products. BI and Analytics define data-driven decisions for performance and growth.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="align-items-center p-3 mx-3">
                  <Card.Img variant="top" src={clients} />
                  <Card.Body>
                    <Card.Text>
                    Capitalizing on data is a straight path to revealing actionable insights on operations, customers, and company products. BI and Analytics define data-driven decisions for performance and growth.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="align-items-center p-3 mx-3">
                  <Card.Img variant="top" src={clients} />
                  <Card.Body>
                    <Card.Text>
                    Capitalizing on data is a straight path to revealing actionable insights on operations, customers, and company products. BI and Analytics define data-driven decisions for performance and growth.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="align-items-center p-3 mx-3">
                  <Card.Img variant="top" src={clients} />
                  <Card.Body>
                    <Card.Text>
                    Capitalizing on data is a straight path to revealing actionable insights on operations, customers, and company products. BI and Analytics define data-driven decisions for performance and growth.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="align-items-center p-3 mx-3">
                  <Card.Img variant="top" src={clients} />
                  <Card.Body>
                    <Card.Text>
                    Capitalizing on data is a straight path to revealing actionable insights on operations, customers, and company products. BI and Analytics define data-driven decisions for performance and growth.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="align-items-center p-3 mx-3">
                  <Card.Img variant="top" src={clients} />
                  <Card.Body>
                    <Card.Text>
                    Capitalizing on data is a straight path to revealing actionable insights on operations, customers, and company products. BI and Analytics define data-driven decisions for performance and growth.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="align-items-center p-3 mx-3">
                  <Card.Img variant="top" src={clients} />
                  <Card.Body>
                    <Card.Text>
                    Capitalizing on data is a straight path to revealing actionable insights on operations, customers, and company products. BI and Analytics define data-driven decisions for performance and growth.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel>
            </div>
          </Container>
        </div>
        <div className="tech-expertise">
          <Container className="tech-expertise-section">
            <Row className="top-content">
              <Col>
                <p className="red">Our Technology Expertise----</p>
                <h1>We use <span className="red">best-in-class tools, state-of-the-art technologies and modern approaches</span> to scale up your business</h1>
              </Col>
            </Row>
            <Row>
              <Col className="bottom-content">
                <Row className="tech-software">
                  <Col xs="12" lg="3" className="tech-list">
                    <h5 onClick={() =>ToggleClass("design")} className={`tech-title ${isActive === "design" ? "tech-active" : ""}`}>Design</h5>
                    <div  className={`tech-menu ${isActive === "design" ? "child-wrap" : ""}`}>
                      <ul className="tech-sub sub-ul">
                        <li><a href="#"><img src={figma} />Figma</a></li>
                        <li><a href="#"><img src={figma} />Sketch</a></li>
                        <li><a href="#"><img src={figma} />Adobe Illustrator</a></li>
                        <li><a href="#"><img src={figma} />Adobe Photoshop</a></li>                       
                      </ul>
                    </div>
                    <h5 onClick={() =>ToggleClass("frontend")} className={`tech-title ${isActive === "frontend" ? "tech-active" : ""}`}>Front-end</h5>
                    <div className={`tech-menu ${isActive === "frontend" ? "child-wrap" : ""}`}>
                      <ul className="tech-sub sub-ul">
                        <li><a href="#"><img src={figma} />ReactJS</a></li>
                        <li><a href="#"><img src={figma} />Angular</a></li>
                        <li><a href="#"><img src={figma} />Vue.JS</a></li>                    
                      </ul>
                    </div>
                    <h5  onClick={() =>ToggleClass("backend")} className={`tech-title ${isActive === "backend" ? "tech-active" : ""}`}>Back-end</h5>
                    <div className={`tech-menu ${isActive === "backend" ? "child-wrap" : ""}`}>
                      <ul className="tech-sub sub-ul">
                        <li><a href="#"><img src={figma} />.Net</a></li>
                        <li><a href="#"><img src={figma} />Node JS</a></li>
                        <li><a href="#"><img src={figma} />Java</a></li>                    
                        <li><a href="#"><img src={figma} />Ruby On Rails</a></li>                    
                        <li><a href="#"><img src={figma} />Laravel</a></li>                    
                        <li><a href="#"><img src={figma} />PHP</a></li>                    
                        <li><a href="#"><img src={figma} />Golang</a></li>                    
                      </ul>
                    </div>
                    <h5 onClick={() =>ToggleClass("Other")} className={`tech-title ${isActive === "Other" ? "tech-active" : ""}`}>Other</h5>
                    <div className={`tech-menu ${isActive === "Other" ? "child-wrap" : ""}`}>
                      <ul className="tech-sub sub-ul">
                        <li><a href="#"><img src={figma} />Agile TDD</a></li>
                      </ul>
                    </div>
                  </Col>
                  <Col xs="12" lg="3" className="tech-list">
                  <h5 onClick={() =>ToggleClass("server")} className={`tech-title ${isActive === "server" ? "tech-active" : ""}`}>Server</h5>
                    <div className={`tech-menu ${isActive === "server" ? "child-wrap" : ""}`}>
                      <ul className="tech-sub sub-ul">
                        <li><a href="#"><img src={figma} />Azure</a></li>
                        <li><a href="#"><img src={figma} />Google Cloud</a></li>
                        <li><a href="#"><img src={figma} />AWS</a></li>
                        <li><a href="#"><img src={figma} />Digital Ocean</a></li>                       
                        <li><a href="#"><img src={figma} />Heroku</a></li>                       
                      </ul>
                    </div>
                    <h5 onClick={() =>ToggleClass("Database")} className={`tech-title ${isActive === "Database" ? "tech-active" : ""}`}>Database</h5>
                    <div className={`tech-menu ${isActive === "Database" ? "child-wrap" : ""}`}>
                      <ul className="tech-sub sub-ul">
                        <li><a href="#"><img src={figma} />MS SQL</a></li>
                        <li><a href="#"><img src={figma} />MongoDB</a></li>
                        <li><a href="#"><img src={figma} />PostgreSQL</a></li>                    
                        <li><a href="#"><img src={figma} />MySQL</a></li>                    
                        <li><a href="#"><img src={figma} />Dynamo DB</a></li>                  
                      </ul>
                    </div>
                    <h5 onClick={() =>ToggleClass("Mobile")} className={`tech-title ${isActive === "Mobile" ? "tech-active" : ""}`}>Mobile</h5>
                    <div className={`tech-menu ${isActive === "Mobile" ? "child-wrap" : ""}`}>
                      <ul className="tech-sub sub-ul">
                        <li><a href="#"><img src={figma} />iOS</a></li>
                        <li><a href="#"><img src={figma} />Android</a></li>
                        <li><a href="#"><img src={figma} />Flutter</a></li>                    
                        <li><a href="#"><img src={figma} />React Native</a></li>                    
                        <li><a href="#"><img src={figma} />Ionic</a></li>                    
                        <li><a href="#"><img src={figma} />Kotlin</a></li>                   
                      </ul>
                    </div>
                  </Col>
                  <Col xs="12" lg="3" className="tech-list">
                  <h5 onClick={() =>ToggleClass("vc")} className={`tech-title ${isActive === "vc" ? "tech-active" : ""}`}>Version Control</h5>
                    <div className={`tech-menu ${isActive === "vc" ? "child-wrap" : ""}`}>
                      <ul className="tech-sub sub-ul">
                        <li><a href="#"><img src={figma} />Github</a></li>
                        <li><a href="#"><img src={figma} />BitBucket</a></li>
                        <li><a href="#"><img src={figma} />Gitlab</a></li>                     
                      </ul>
                    </div>
                    <h5 onClick={() =>ToggleClass("CRM")} className={`tech-title ${isActive === "CRM" ? "tech-active" : ""}`}>CRM</h5>
                    <div className={`tech-menu ${isActive === "CRM" ? "child-wrap" : ""}`}>
                      <ul className="tech-sub sub-ul">
                        <li><a href="#"><img src={figma} />Salesforce</a></li>
                        <li><a href="#"><img src={figma} />Microsoft Dynamic 365</a></li>
                        <li><a href="#"><img src={figma} />TeamCity</a></li>                    
                        <li><a href="#"><img src={figma} />Bamboo</a></li>                    
                        <li><a href="#"><img src={figma} />Circleci Hudson</a></li>                    
                        <li><a href="#"><img src={figma} />Jenkins</a></li>                    
                        <li><a href="#"><img src={figma} />Apps</a></li>                    
                        <li><a href="#"><img src={figma} />Git</a></li>                    
                      </ul>
                    </div>
                    <h5 onClick={() =>ToggleClass("CMS")} className={`tech-title ${isActive === "CMS" ? "tech-active" : ""}`}>CMS</h5>
                    <div className={`tech-menu ${isActive === "CMS" ? "child-wrap" : ""}`}>
                      <ul className="tech-sub sub-ul">
                        <li><a href="#"><img src={figma} />WordPress</a></li>
                        <li><a href="#"><img src={figma} />Drupal</a></li>                   
                      </ul>
                    </div>
                  </Col>
                  <Col xs="12" lg="3" className="tech-list">
                  <h5 onClick={() =>ToggleClass("Devops")} className={`tech-title ${isActive === "Devops" ? "tech-active" : ""}`}>Devops</h5>
                    <div className={`tech-menu ${isActive === "Devops" ? "child-wrap" : ""}`}>
                      <ul className="tech-sub sub-ul">
                        <li><a href="#"><img src={figma} />Apacheant</a></li>
                        <li><a href="#"><img src={figma} />Xcode</a></li>
                        <li><a href="#"><img src={figma} />Fastlane Gant</a></li>
                        <li><a href="#"><img src={figma} />Gradle</a></li>                       
                        <li><a href="#"><img src={figma} />Maven</a></li>                       
                        <li><a href="#"><img src={figma} />Ansible</a></li>                       
                        <li><a href="#"><img src={figma} />Chef</a></li>                       
                        <li><a href="#"><img src={figma} />Puppet</a></li>                       
                      </ul>
                    </div>
                    <h5 onClick={() =>ToggleClass("Project")} className={`tech-title ${isActive === "Project" ? "tech-active" : ""}`}>Project Management Tools</h5>
                    <div className={`tech-menu ${isActive === "Project" ? "child-wrap" : ""}`}>
                      <ul className="tech-sub sub-ul">
                        <li><a href="#"><img src={figma} />Jira</a></li>
                        <li><a href="#"><img src={figma} />Trello</a></li>
                        <li><a href="#"><img src={figma} />BaseCamp</a></li>                    
                        <li><a href="#"><img src={figma} />MS Project</a></li>                    
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
              </Row>
          </Container>
        </div>

      </div>
    )
}

export default withRouter(Home);