import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { history } = props;

  return (
    <React.Fragment>
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/dashboard")}
          >
            Dashsboard
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/gifs")}
                >
                  Search a Gif
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/top-gif")}
                >
                  Top Gif
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Test Search a Gif API</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
