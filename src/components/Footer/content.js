import React from "react";
import { Card, Button } from "react-bootstrap";

const FooterContent = () => {
  return (

    <Card className="og-footer-getintouch pt-5">
      <Card.Body>
        <Card.Subtitle>Are you ready?</Card.Subtitle>
        <Card.Text>
          Let's build your next Digital <span className="red">product</span>!
        </Card.Text>
        <Button variant="primary">Get in touch</Button>
      </Card.Body>
    </Card>
  );
};

export default FooterContent;
