
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

import classnames from "classnames";
// reactstrap components


function BasicFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <div className="btn-fill">
            <span className="btn-fill">
              © {new Date().getFullYear()}, made with react
            </span>
          </div>
          <div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default BasicFooter;
