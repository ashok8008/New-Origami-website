import {React, useState} from "react";
import { Col, Container, Row, ListGroup, Card } from "react-bootstrap";
import FooterLogo from "../../images/footer-logo.svg";
import * as Icon from 'react-feather';
const FooterContact = () => {
  const [isActive, setActive] = useState("");
  const ToggleClass = (e) => {
    setActive(prev => prev===e ? "" : e );  
  };
  return (
    <Container className="og-footer-contact mb-5">
      <Row xs={1} lg={3} xl={4} className="g-5">
        <Col className="img-section">
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={FooterLogo} />
              <Card.Text>Your Go-To Digital Developers</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="contact-section">
          <Card>
            <Card.Body>
              <Card.Title onClick={() =>ToggleClass("contact")} className={`contact-title ${isActive === "contact"? "contact-active" : ""}`}>Contact US - </Card.Title>
              <ListGroup className={`contact-menu ${isActive === "contact" ? "contact-wrap" : ""}`}>
                <ListGroup.Item>
                  <Icon.Mail /> contact@myorigami.co
                </ListGroup.Item>
                <ListGroup.Item>
                  <Icon.PhoneCall /> US +1 858 429 9159
                </ListGroup.Item>
                <ListGroup.Item>
                  <Icon.PhoneCall /> IN +91 761 878 0865
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col className="off-section">
          <Card>
            <Card.Body>
              <Card.Title onClick={() =>ToggleClass("Office")} className={`contact-title ${isActive === "Office"? "contact-active" : ""}`}>Office - </Card.Title>
              <ListGroup className={`contact-menu ${isActive === "Office" ? "contact-wrap" : ""}`}>
                <ListGroup.Item>
                  312N Milton Ave, Campbell, California, 95008, US
                </ListGroup.Item>
                <ListGroup.Item><Icon.PhoneCall/> US +1 858 429 9159</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterContact;