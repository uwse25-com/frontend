import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";
import "./styles.scss";
import { useAuth0 } from "@auth0/auth0-react";

const MainNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-horizontal-padding">
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">UWSE25.com</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Calendar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/event/create">Event Voting</NavLink>
              </NavItem>
            </Nav>
            <Nav>
              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Account Settings
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      onClick={() => {
                        logout({
                          returnTo: window.location.origin,
                        });
                      }}
                    >
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default MainNavbar;
